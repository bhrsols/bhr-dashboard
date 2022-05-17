import { OpenSettings } from './OpenSettings'
import { Sidebar } from './Sidebar'
import { ToggleSidebar } from './ToggleSidebar'

export function AppBar(props: any) {
    const { children } = props
    return (
        <div className="flex h-screen bg-gray-50 dark:bg-dark_primary text-tlight dark:text-tdark">
            <Sidebar />

            <div className="flex flex-col flex-1 w-full sticky z-10">
                <header>
                    <nav className="h-24 flex items-center bg-white shadow-md dark:bg-dark_accent">
                        <div className="container max-w-8xl mx-auto px-2 sm:px-6 lg:px-6">
                            <div className="relative flex items-center justify-between px-2">
                                <ToggleSidebar />

                                <div className="flex">
                                    <div className="mx-3">
                                        <OpenSettings />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
                <main className="h-full overflow-y-auto overflow-x-hidden p-4 animate-grow-light">
                    <div className="h-full container px-2 md:px-6 mx-auto transition-all duration-500 ease-in-out">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}
