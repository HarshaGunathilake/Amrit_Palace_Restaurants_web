import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FullMenuHeader from "@/components/FullMenuHeader";
import FullMenuList from "@/components/FullMenuList";

export const metadata: Metadata = {
  title: "The Full Menu, Amrit Palace",
  description:
    "The complete à la carte menu at Amrit Palace: starters, tandoor, mains, vegetarian, rice and bread, and desserts.",
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
