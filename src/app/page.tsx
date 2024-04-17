"use client";
import Image from "next/image";
import { AuroraBackground } from "@/components/aurora-background";
import Header from "./header";
import { motion } from "framer-motion";
import About from "./about";

export default function Home() {
    return (
        <main>
            <AuroraBackground>
                <section>
                    <Header />
                </section>
            </AuroraBackground>
            <About />
        </main>
    );
}
