import Services from "@/components/services/Services";
import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Services />
    </main>
  );
}
