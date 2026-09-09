import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import StorySection from "@/components/StorySection";
import SignatureDishes from "@/components/SignatureDishes";
import MenuSection from "@/components/MenuSection";
import CinematicBreak from "@/components/CinematicBreak";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import ReservationSection from "@/components/ReservationSection";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <IntroSection />
        <StorySection />
        <SignatureDishes />
        <MenuSection />
        <CinematicBreak />
        <Gallery />
        <Reviews />
        <ReservationSection />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
