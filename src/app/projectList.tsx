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
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:grid-cols-4 gap-2 lg:gap-4 py-10 lg:py-20">
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
                title="CPython API for asynchronous functions"
                url="https://awaitable.zintensity.dev"
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
            </Card>
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
            <Card
                title="No more stupid dots"
                name="namespaces.py"
                url="https://github.com/ZeroIntensity/namespaces.py"
            >
                <CanvasRevealEffect
                    animationSpeed={5.1}
                    containerClassName="bg-indigo-900"
                    colors={[
                        [169, 115, 255],
                        [192, 153, 255],
                        [59, 0, 153],
                    ]}
                />
            </Card>
            <Card
                title="Stop others from touching your privates"
                name="privates.py"
                url="https://privates.zintensity.dev/"
            >
                <CanvasRevealEffect
                    animationSpeed={5.1}
                    containerClassName="bg-blue-900"
                    colors={[
                        [41, 98, 255],
                        [133, 165, 255],
                        [0, 31, 120],
                    ]}
                />
            </Card>
            <Card
                title="Make your Python strings mutable"
                name="mutstring"
                url="https://github.com/ZeroIntensity/mutstring"
            >
                <CanvasRevealEffect
                    animationSpeed={5.1}
                    containerClassName="bg-orange-900"
                    colors={[
                        [255, 205, 105],
                        [143, 86, 0],
                        [255, 178, 122],
                    ]}
                />
            </Card>
            <Card
                title="Keep your dict keys PEP 8 compliant"
                name="snakedict"
                url="https://github.com/ZeroIntensity/snakedict"
            >
                <CanvasRevealEffect
                    animationSpeed={5.1}
                    containerClassName="bg-fuchsia-900"
                    colors={[
                        [255, 122, 224],
                        [255, 179, 237],
                        [163, 0, 125],
                    ]}
                />
            </Card>
        </div>
    );
}
