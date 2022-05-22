import Link from 'next/link'
import { MdSettingsSuggest } from 'react-icons/md'
import { setOpenSettings, useAppDispatch } from 'src/app'
import { Sidebar } from './Sidebar'

export function AppBar(props: any) {
    const dispatch = useAppDispatch()
    const { children } = props

    const handleOpenSettings = () => {
        dispatch(setOpenSettings(true))
    }
    return (
        <div className="flex h-screen">
            <Sidebar />

            <div className="flex flex-col flex-1 w-full sticky z-10">
                <header>
                    <nav className="h-24 px-4 flex items-center justify-between shadow-md">
                        <div className="cursor-pointer">
                            <Link href="/">
                                <img
                                    alt="NTIS Logo"
                                    src="/static/logo.png"
                                    width={64}
                                    className="opacity-90 hover:opacity-100"
                                    draggable={false}
                                />
                            </Link>
                        </div>
                        <div className="flex justify-between items-center gap-4">
                            <div
                                className="hover:text-primary cursor-pointer"
                                onClick={handleOpenSettings}
                            >
                                <MdSettingsSuggest size={44} />
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
