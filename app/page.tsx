import Services from "@/components/services/Services";
import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";
import TiktokProfile from "@/components/tiktok/TiktokProfile";
import About from "@/components/about/About";
import ServiceArea from "@/components/serviceArea/ServiceArea";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Services />
      <TiktokProfile />
      <ServiceArea />
    </main>
  );
}
