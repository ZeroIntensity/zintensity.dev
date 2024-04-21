"use client";
import { TextGenerateEffect } from "@/components/text-generate-effect";

export default function ProjectHeader() {
    return (
        <div className="flex flex-col">
            <h2 className="text-left text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-zinc-50 to-zinc-500 bg-opacity-50">
                What do I do?
            </h2>
            <TextGenerateEffect words="Sometimes I make serious projects. Sometimes I make silly projects. Sometimes I make both." />
        </div>
    );
}
