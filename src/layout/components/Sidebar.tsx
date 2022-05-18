import { TiKeyOutline } from 'react-icons/ti'
import { navigations } from './navigation'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsFillPersonBadgeFill } from 'react-icons/bs'

export function Sidebar() {
    const router = useRouter()
    return (
        <>
            <div className={`flex h-screen shadow-xl`}>
                <aside className="z-20 w-72 overflow-y-auto shadow-md hidden sm:block flex-shrink-0 relative">
                    <div className="h-24 mb-4 text-center flex justify-center items-center shadow-md dark:shadow-2xl">
                        <div className="flex items-center gap-8">
                            <h1 className="flex items-center justify-center select-none text-gray-800 dark:text-gray-50 dark:hover:text-gray-300 text-lg font-semibold">
                                appTitle
                            </h1>
                        </div>
                        <hr className="mt-2" />
                    </div>
                    <nav className="space-y-5">
                        {navigations.map((item: any, i: number) => (
                            <Link href={item.path} key={item + i}>
                                <a
                                    className={`flex items-center gap-2 transition ${
                                        router.pathname === item.path &&
                                        'bg-gray-100 dark:bg-dark_primary'
                                    } hover:bg-gray-100 dark:hover:bg-dark_primary rounded-md mx-3 px-2 text-tlight dark:text-tdark dark:hover:text-gray-300 py-2`}
                                >
                                    {item.icon}
                                    {/* @ts-ignore */}
                                    {`${item.name}`}
                                </a>
                            </Link>
                        ))}
                    </nav>
                    <div className="w-full flex justify-center items-center absolute bottom-8 left-0 px-4">
                        <div className="w-full bg-gray-100 dark:bg-dark_primary py-3 px-5 rounded-xl flex justify-between items-center gap-6">
                            <div className="flex flex-col items-center">
                                <Link href="/users">
                                    <div className="hover:text-tlight_accent dark:hover:text-tlight cursor-pointer text-center">
                                        <BsFillPersonBadgeFill size={46} />
                                        <h1 className="text-xs font-bold mt-2 select-none">
                                            name
                                        </h1>
                                    </div>
                                </Link>
                            </div>
                            <div className="w-full flex flex-col justify-start items-start gap-1 text-sm">
                                <button className="hover:bg-tdark hover:dark:bg-dark_accent cursor-pointer w-full rounded-md py-1">
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>

            <header
                className={`fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 shadow-md overflow-y-auto sm:hidden`}
            >
                <div className="divide-y divide-gray-500 py-4 text-gray-500 dark:text-gray-400">
                    <a
                        href="!#"
                        className="flex items-center text-gray-700 dark:text-gray-50 dark:hover:text-gray-300 text-lg font-medium "
                    >
                        <TiKeyOutline size="25" className="ml-2 mx-4" />{' '}
                        appTitle
                    </a>
                    <nav className="pt-3 space-y-2">
                        {navigations.map((item, i) => (
                            <div
                                key={i}
                                className={`flex items-center transition ${
                                    router.pathname === item.path &&
                                    'bg-gray-100 dark:bg-dark_primary'
                                } hover:bg-gray-100 dark:hover:bg-dark_primary rounded-md mx-3 px-2 text-tlight dark:text-tdark dark:hover:text-gray-300 py-2`}
                            >
                                {item.icon}
                                {item.name}
                            </div>
                        ))}
                    </nav>
                </div>
            </header>
        </>
    )
}
