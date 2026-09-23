"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { COUNTRY_CODES, MEAL_PERIODS, SEATING_PREFERENCES, getTimeSlots, type MealPeriod } from "@/lib/data";
import PhoneCountrySelect from "./PhoneCountrySelect";

const inputClass =
  "w-full border border-parchment/20 bg-parchment/[0.04] px-4 py-3.5 font-sans text-sm text-parchment placeholder:text-parchment/35 transition-colors focus:border-saffron focus:outline-none";

const labelClass = "font-sans text-[11px] tracking-[0.2em] text-parchment/55 uppercase";

/** First-seen order, de-duplicated. */
function uniqueInOrder<T>(values: T[]): T[] {
  return Array.from(new Set(values));
}

export default function ReservationForm() {
  const [meal, setMeal] = useState<MealPeriod["id"]>("dinner");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [ampm, setAmpm] = useState<"AM" | "PM">("PM");
  const [countryIso2, setCountryIso2] = useState(COUNTRY_CODES[0].iso2);
  const [guests, setGuests] = useState("2");
  const [seating, setSeating] = useState<string>(SEATING_PREFERENCES[0]);
  const [submitted, setSubmitted] = useState(false);

  const activePeriod = MEAL_PERIODS.find((m) => m.id === meal)!;

  // Every bookable slot for the selected meal — the only source of truth for
  // which hour, minute and AM/PM combinations are actually offered.
  const slots = useMemo(() => getTimeSlots(activePeriod), [activePeriod]);
  const ampmOptions = useMemo(() => uniqueInOrder(slots.map((s) => s.ampm)), [slots]);
  const hourOptions = useMemo(
    () => uniqueInOrder(slots.filter((s) => s.ampm === ampm).map((s) => s.hour12)),
    [slots, ampm]
  );
  const minuteOptions = useMemo(
    () => slots.filter((s) => s.ampm === ampm && s.hour12 === hour).map((s) => s.minute),
    [slots, ampm, hour]
  );

  // Whenever the meal (and so the valid slots) changes, snap the selection
  // back to the first bookable slot instead of leaving a stale, unavailable
  // hour/minute selected.
  useEffect(() => {
    const first = slots[0];
    if (!first) return;
    setAmpm(first.ampm);
    setHour(first.hour12);
    setMinute(first.minute);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePeriod.id]);

  const handleAmpmChange = (value: "AM" | "PM") => {
    setAmpm(value);
    const firstForAmpm = slots.find((s) => s.ampm === value);
    if (firstForAmpm) {
      setHour(firstForAmpm.hour12);
      setMinute(firstForAmpm.minute);
    }
  };

  const handleHourChange = (value: string) => {
    setHour(value);
    const firstForHour = slots.find((s) => s.ampm === ampm && s.hour12 === value);
    if (firstForHour) setMinute(firstForHour.minute);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-3 py-12">
        <span className="font-sans text-xs tracking-[0.2em] text-saffron uppercase">
          Request Received
        </span>
        <p className="max-w-md font-display text-2xl font-light text-parchment">
          Your table for {guests} at {hour}:{minute} {ampm} ({activePeriod.label.toLowerCase()}) is
          on hold. We&apos;ll confirm by email shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      <h3 className="font-display text-3xl font-light text-parchment sm:text-4xl">
        Make a Reservation
      </h3>

      <form onSubmit={handleSubmit} className="mt-10 border-t border-parchment/15 pt-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className={labelClass}>Full Name</span>
            <input required type="text" className={inputClass} placeholder="Your name" />
          </label>

          <label className="flex flex-col gap-2">
            <span className={labelClass}>Phone Number</span>
            <div className="flex">
              <PhoneCountrySelect
                value={countryIso2}
                onChange={(country) => setCountryIso2(country.iso2)}
              />
              <input
                required
                type="tel"
                className={`${inputClass} border-l-0`}
                placeholder="71 234 5678"
              />
            </div>
          </label>

          <label className="flex flex-col gap-2">
            <span className={labelClass}>Email</span>
            <input required type="email" className={inputClass} placeholder="you@example.com" />
          </label>

          <label className="flex flex-col gap-2">
            <span className={labelClass}>Date</span>
            <input required type="date" className={`${inputClass} [color-scheme:dark]`} />
          </label>

          <div className="flex flex-col gap-2 sm:col-span-2">
            <span className={labelClass}>
              Meal <span className="text-saffron">*</span>
            </span>
            <div className="grid grid-cols-2 gap-3">
              {MEAL_PERIODS.map((period) => (
                <button
                  key={period.id}
                  type="button"
                  onClick={() => setMeal(period.id)}
                  aria-pressed={meal === period.id}
                  className={`border px-6 py-3.5 font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
                    meal === period.id
                      ? "border-saffron bg-saffron text-midnight"
                      : "border-parchment/20 bg-parchment/[0.04] text-parchment/70 hover:border-parchment/40"
                  }`}
                >
                  {period.label}
                </button>
              ))}
            </div>
            <p className="mt-1 font-sans text-xs text-parchment/50">
              Available: {activePeriod.hours}
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:col-span-2">
            <span className={labelClass}>
              Time <span className="text-saffron">*</span>
            </span>
            <div className={`grid gap-3 ${ampmOptions.length > 1 ? "grid-cols-3" : "grid-cols-2"}`}>
              <label className="flex flex-col gap-1.5">
                <span className="font-sans text-[10px] tracking-[0.15em] text-parchment/40 uppercase">
                  Hour
                </span>
                <div className="relative">
                  <select
                    value={hour}
                    onChange={(e) => handleHourChange(e.target.value)}
                    className={`${inputClass} appearance-none pr-8`}
                  >
                    {hourOptions.map((h) => (
                      <option key={h} value={h} className="text-midnight">
                        {h}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={14}
                    strokeWidth={1.5}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-parchment/50"
                  />
                </div>
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="font-sans text-[10px] tracking-[0.15em] text-parchment/40 uppercase">
                  Minute
                </span>
                <div className="relative">
                  <select
                    value={minute}
                    onChange={(e) => setMinute(e.target.value)}
                    className={`${inputClass} appearance-none pr-8`}
                  >
                    {minuteOptions.map((m) => (
                      <option key={m} value={m} className="text-midnight">
                        {m}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={14}
                    strokeWidth={1.5}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-parchment/50"
                  />
                </div>
              </label>

              {ampmOptions.length > 1 && (
                <label className="flex flex-col gap-1.5">
                  <span className="font-sans text-[10px] tracking-[0.15em] text-parchment/40 uppercase">
                    AM/PM
                  </span>
                  <div className="relative">
                    <select
                      value={ampm}
                      onChange={(e) => handleAmpmChange(e.target.value as "AM" | "PM")}
                      className={`${inputClass} appearance-none pr-8`}
                    >
                      {ampmOptions.map((a) => (
                        <option key={a} value={a} className="text-midnight">
                          {a}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={14}
                      strokeWidth={1.5}
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-parchment/50"
                    />
                  </div>
                </label>
              )}
            </div>
            <p className="mt-1 font-sans text-xs text-parchment/50">
              Reservations must be made at least 3 hours in advance.
            </p>
          </div>

          <label className="flex flex-col gap-2">
            <span className={labelClass}>Number of Guests</span>
            <div className="relative">
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className={`${inputClass} appearance-none pr-8`}
              >
                <option value="" disabled className="text-midnight">
                  Select guests
                </option>
                {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n} className="text-midnight">
                    {n} {n === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={14}
                strokeWidth={1.5}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-parchment/50"
              />
            </div>
          </label>

          <label className="flex flex-col gap-2">
            <span className={labelClass}>Seating Preference</span>
            <div className="relative">
              <select
                value={seating}
                onChange={(e) => setSeating(e.target.value)}
                className={`${inputClass} appearance-none pr-8`}
              >
                {SEATING_PREFERENCES.map((pref) => (
                  <option key={pref} value={pref} className="text-midnight">
                    {pref}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={14}
                strokeWidth={1.5}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-parchment/50"
              />
            </div>
          </label>

          <label className="flex flex-col gap-2 sm:col-span-2">
            <span className={labelClass}>Special Requests (Optional)</span>
            <textarea
              rows={3}
              className={`${inputClass} resize-y`}
              placeholder="Allergies, anniversary, dietary requirements..."
            />
          </label>
        </div>

        <button
          type="submit"
          className="mt-10 w-full rounded-full border border-korean-red bg-korean-red py-4 font-sans text-xs tracking-[0.2em] text-parchment uppercase transition-all duration-400 hover:bg-transparent hover:text-parchment sm:w-auto sm:px-10"
        >
          Submit Reservation
        </button>
      </form>
    </div>
  );
}
