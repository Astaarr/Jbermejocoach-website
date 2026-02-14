import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MethodSection } from "@/components/MethodSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { VideoSection } from "@/components/VideoSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.page}>
        <Hero />
        <VideoSection />
        <MethodSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
