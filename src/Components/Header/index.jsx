export default function Header ({ children, ...props }) {
    return (
        <header className="p-4 bg-blue-400 text-white" {...props} >
            {children}
        </header>
    )
}