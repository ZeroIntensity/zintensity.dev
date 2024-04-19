import { Highlight } from "@/components/hero-highlight";

export default function AboutHeader() {
    return (
        <div className="flex flex-col">
            <h2 className="text-left text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-zinc-50 to-zinc-500 bg-opacity-50">
                Who am I?
            </h2>
            <p className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 w-2/3">
                My name is <Highlight className="font-bold">Peter</Highlight>.
                I'm 15 years old and love to write code. <br />I build things
                because{" "}
                <Highlight className="font-bold">
                    I have fun building them
                </Highlight>
                , not because I think they're useful.
            </p>
        </div>
    );
}
