export function AppInitializing() {
    return (
        <div className="relative w-screen h-screen flex flex-col justify-center items-center bg-lightbg text-secondary dark:bg-darkbg dark:text-primary font-primary transition duration-300">
            <img
                src="/static/logo.png"
                alt="Logo image"
                draggable={false}
                width={112}
                className="absolute ml-6"
            />
            <div className="gradient-spinner"></div>
        </div>
    )
}
