import Hero from "./sections/Hero";
import About from "./sections/About";
import Categories from "./sections/Categories";
import BestProduct from "./sections/BestProduct";
import TopSelling from "./sections/TopSelling";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <main className="font-body text-ink">
      <Hero />
      <About />
      <Categories />
      <BestProduct />
      <TopSelling />
      <Testimonials />
      <Footer />
    </main>
  );
}
