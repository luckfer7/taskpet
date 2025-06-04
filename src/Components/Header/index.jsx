export default function Header ({ children, ...props }) {
    return (
        <header className="flex items-center text-2xl p-4 bg-blue-400 text-white h-18" {...props} >
            {children}
        </header>
    )
}