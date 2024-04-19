"use client";
import { Vortex } from "@/components/vortex";

export default function Divider() {
    return (
        <div className="w-full mx-auto rounded-md  h-[10rem] overflow-hidden">
            <Vortex
                baseHue={170}
                rangeSpeed={0.1}
                rangeY={0.5}
                baseRadius={0.7}
                particleCount={700}
                backgroundColor="black"
                className="flex items-center flex-col justify-center md:px-10 py-4 w-full h-full"
                saturation={0}
            ></Vortex>
        </div>
    );
}
