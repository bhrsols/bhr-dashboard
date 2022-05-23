import { useAppSelector } from 'src/app'

export function AppInitializing() {
    const { initializing } = useAppSelector(state => state.ui)
    return (
        <div
            className={`w-screen h-screen ${
                !initializing && 'hidden'
            } fixed z-50`}
        >
            <div className="relative h-full w-full flex flex-col justify-center items-center bg-lightbg text-secondary dark:bg-darkbg dark:text-primary font-primary transition duration-300">
                <img
                    src="/static/logo.png"
                    alt="Logo image"
                    draggable={false}
                    width={112}
                    className="absolute ml-6"
                />
                <div className="gradient-spinner"></div>
            </div>
        </div>
    )
}
