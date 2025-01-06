import { FaRegCopyright } from "react-icons/fa";

export default function Copyright() {
    return (
        <div className="flex items-center justify-center flex-col text-zinc-900 py-2">
            <div className="flex items-center space-x-1">
                <FaRegCopyright className="w-4 h-4" />
                <p>Peter Bierma 2025</p>
            </div>
        </div>
    );
}
