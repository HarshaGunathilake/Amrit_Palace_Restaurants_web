import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FullMenuHeader from "@/components/FullMenuHeader";
import FullMenuList from "@/components/FullMenuList";

export const metadata: Metadata = {
  title: "The Full Menu, Uncle Yoon Korean Restaurant",
  description:
    "The complete menu at Uncle Yoon Korean Restaurant: entrees, Korean fried chicken, jajang noodles, champong, rice dishes, Korean soups, main dishes, hot pot, sharing dishes and drinks.",
};

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <main>
        <FullMenuHeader />
        <FullMenuList />
      </main>
      <Footer />
    </>
  );
}
