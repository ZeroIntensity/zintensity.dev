import { Highlight } from "@/components/hero-highlight";

export default function AboutHeader() {
    return (
        <div className="flex flex-col">
            <h2 className="text-left text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-zinc-50 to-zinc-500 bg-opacity-50">
                Who am I?
            </h2>
            <div>
                <p className="font-extralight text-3xl md:text-4xl dark:text-neutral-200 py-4 w-full lg:w-2/3">
                    My name is{" "}
                    <Highlight className="font-bold">Peter</Highlight>. I'm 16
                    years old and have been writing software for about{" "}
                    <Highlight className="font-bold">7 years</Highlight>.
                </p>
                <p className="font-extralight text-3xl md:text-4xl dark:text-neutral-200 w-full lg:w-2/3">
                    Typically, I build Python libraries or maintain others, but
                    I work in other languages from time to time.
                </p>
                <p className="font-extralight text-3xl md:text-4xl dark:text-neutral-200 py-4 w-full lg:w-2/3">
                    I also occasionally do some electrical engineering as a
                    hobbyist.
                </p>
            </div>
        </div>
    );
}
