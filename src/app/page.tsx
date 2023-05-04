import Bg from "@/components/Bg";
import Casino from "@/components/Casino";
import Community from "@/components/Community";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Shop from "@/components/Shop";
export default function Home() {
  return (
    <main className=" font-Inter relative overflow-hidden">
      <Header />
      <Bg />
      <div className="circle-pattern" />
      <Hero />

      <Casino />
      <Shop />
      <Community />
      <Footer />
    </main>
  );
}
