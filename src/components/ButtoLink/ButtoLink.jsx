function ButtonLink({ children, className, href, ...props }) {
    const baseClasses = `w-full h-12 rounded-lg text-white font-bold text-center flex items-center justify-center ${className}`;
    if (href) {
        return (
            <a
                href={href}
                className={baseClasses}
                target="_blank"
                rel="noopener noreferrer"
                {...props}
            >
                {children}
            </a>
        );
    }
    return (
        <button className={baseClasses} {...props}>
            {children}
        </button>
    );
}
export default ButtonLink;