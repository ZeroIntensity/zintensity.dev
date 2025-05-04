"use client";
import { CanvasRevealEffect } from "@/components/canvas-reveal-effect";
import { Card } from "./card";

export default function ProjectList({
    pointersStars,
    viewStars,
}: {
    pointersStars: number;
    viewStars: number;
}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-2 lg:gap-2 py-5 lg:py-10">
            <Card
                title="Bringing the hell of pointers to Python"
                url="https://pointers.zintensity.dev"
                name="pointers.py"
                starCount={pointersStars}
            >
                <CanvasRevealEffect
                    animationSpeed={5.1}
                    containerClassName="bg-sky-900"
                    colors={[
                        [29, 111, 219],
                        [74, 225, 255],
                    ]}
                />
            </Card>
            <Card
                title="The Batteries-Detachable Web Framework"
                url="https://view.zintensity.dev"
                name="view.py"
                starCount={viewStars}
            >
                <CanvasRevealEffect
                    animationSpeed={5.1}
                    containerClassName="bg-rose-900"
                    colors={[
                        [250, 45, 59],
                        [255, 89, 100],
                        [255, 128, 136],
                    ]}
                />
            </Card>
            <Card
                title="Call asynchronous code from an extension module"
                url="https://pyawaitable.zintensity.dev"
                name="PyAwaitable"
            >
                <CanvasRevealEffect
                    animationSpeed={5.1}
                    containerClassName="bg-zinc-900"
                    colors={[
                        [122, 122, 122],
                        [161, 161, 161],
                    ]}
                />
            </Card>{" "}
            <Card
                title="Developer-oriented client-server communication library"
                name="Hoist"
                url="https://hoist.zintensity.dev"
            >
                <CanvasRevealEffect
                    animationSpeed={5.1}
                    containerClassName="bg-emerald-900"
                    colors={[
                        [66, 245, 123],
                        [0, 125, 40],
                        [156, 255, 157],
                    ]}
                />
            </Card>
        </div>
    );
}
