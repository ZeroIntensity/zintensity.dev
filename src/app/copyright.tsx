import { FaRegCopyright } from "react-icons/fa";

export default function Copyright() {
    return (
        <div className="flex items-center justify-center flex-col text-zinc-700 py-2">
            <div className="flex items-center space-x-1">
                <FaRegCopyright className="w-4 h-4" />
                <p>
                    This page is under the{" "}
                    <a
                        href="https://github.com/ZeroIntensity/zintensity.dev/blob/master/LICENSE"
                        target="_blank"
                        className="text-blue-800 hover:text-blue-700 transition-all"
                    >
                        MIT license
                    </a>
                    .
                </p>
            </div>
        </div>
    );
}
