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
      <div className="gradient-011" />
      <div className="gradient-012" />
      <div className="circle-pattern" />
      <Hero />
      <div className="gradient-021" />
      <div className="circle-02-pattern" />
      <div className="gradient-022" />
      <Casino />
      <Shop />
      <Community />
      <Footer />
    </main>
  );
}
