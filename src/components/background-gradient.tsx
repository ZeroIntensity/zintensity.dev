import { cn } from "../utils/cn";
import React from "react";
import { motion } from "framer-motion";

// Original bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]
const CYCLES: Record<number, string> = {
    1: `bg-[radial-gradient(circle_farthest-side_at_0_100%,#0003b5,transparent),radial-gradient(circle_farthest-side_at_100%_0,#362bff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ff14e4,transparent),radial-gradient(circle_farthest-side_at_0_0,#ff0000,#fbff00)]`,
    2: `bg-[radial-gradient(circle_farthest-side_at_0_100%,#009107,transparent),radial-gradient(circle_farthest-side_at_100%_0,#1bd8f5,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#d4ff00,transparent),radial-gradient(circle_farthest-side_at_0_0,#0080ff,#eaff00)]`,
    3: `bg-[radial-gradient(circle_farthest-side_at_0_100%,#9c0015,transparent),radial-gradient(circle_farthest-side_at_100%_0,#f5841b,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ff17a2,transparent),radial-gradient(circle_farthest-side_at_0_0,#79f51b,#ff4a77)]`,
    4: `bg-[radial-gradient(circle_farthest-side_at_0_100%,#bdaf1c,transparent),radial-gradient(circle_farthest-side_at_100%_0,#e3900b,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#e3bb0b,transparent),radial-gradient(circle_farthest-side_at_0_0,#ff9914,#1bf5ea)]`,
};

export const BackgroundGradient = ({
    children,
    className,
    containerClassName,
    colorCycle,
    padding,
    blurClass,
    animate = true,
}: {
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
    colorCycle?: number;
    padding?: string;
    blurClass?: string;
    animate?: boolean;
}) => {
    const variants = {
        initial: {
            backgroundPosition: "0 50%",
        },
        animate: {
            backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
        },
    };
    const colorString = CYCLES[colorCycle || 1];

    return (
        <div
            className={cn(
                `relative ${padding || "p-[4px]"} group`,
                containerClassName
            )}
        >
            <motion.div
                variants={animate ? variants : undefined}
                initial={animate ? "initial" : undefined}
                animate={animate ? "animate" : undefined}
                transition={
                    animate
                        ? {
                              duration: 5,
                              repeat: Infinity,
                              repeatType: "reverse",
                          }
                        : undefined
                }
                style={{
                    backgroundSize: animate ? "400% 400%" : undefined,
                }}
                className={cn(
                    `absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 ${
                        blurClass || "blur-xl"
                    } transition duration-500 will-change-transform`,
                    colorString
                )}
            />
            <motion.div
                variants={animate ? variants : undefined}
                initial={animate ? "initial" : undefined}
                animate={animate ? "animate" : undefined}
                transition={
                    animate
                        ? {
                              duration: 5,
                              repeat: Infinity,
                              repeatType: "reverse",
                          }
                        : undefined
                }
                style={{
                    backgroundSize: animate ? "400% 400%" : undefined,
                }}
                className={cn(
                    "absolute inset-0 rounded-3xl z-[1] will-change-transform",
                    colorString
                )}
            />

            <div className={cn("relative z-10", className)}>{children}</div>
        </div>
    );
};
