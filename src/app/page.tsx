"use client";
import { AuroraBackground } from "@/components/aurora-background";
import Header from "./header";
import About from "./about";
import Projects from "./projects";

export default function Home() {
    return (
        <main>
            <AuroraBackground>
                <section>
                    <Header />
                </section>
            </AuroraBackground>
            <div className="flex flex-col px-16 space-y-40">
                <About />
                <Projects />
            </div>
        </main>
    );
}
