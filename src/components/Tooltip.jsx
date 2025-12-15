export function Tooltip({ text, children }) {
    return (
        <div className="relative inline-block group">
            {children}
            <div
                className="absolute bottom-full left-1/2 mb-2
                   -translate-x-1/2
                   rounded bg-gray-900 px-3 py-1 text-xs text-white
                   opacity-0 group-hover:opacity-100
                   transition pointer-events-none"
            >
                {text}
            </div>
        </div>
    );
}