import Link from 'next/link'
import {
    MdOutlineSettings,
    MdPersonOutline,
    MdOutlineNotificationsNone,
    MdDeveloperBoard,
    MdGroups,
    MdOutlineReceiptLong,
} from 'react-icons/md'
import { setOpenSettings, useAppDispatch, useAppSelector } from 'src/app'
import { SidebarMenu, SidebarNav, SidebarTitle } from 'src/components'
import { NavItem, SidebarMenuItem } from 'types'

export function AppMenu(props: any) {
    const dispatch = useAppDispatch()
    const { theme, t } = useAppSelector(state => state.ui)
    const { children } = props

    const navs: Array<NavItem> = [
        {
            localeKey: 'OVERVIEW',
            icon: <MdDeveloperBoard size={28} />,
            path: '/',
        },
        {
            localeKey: 'CLIENTS',
            path: '/clients',
            icon: <MdGroups size={28} />,
        },
        {
            localeKey: 'RECEIPTS',
            path: '/receipts',
            icon: <MdOutlineReceiptLong size={28} />,
        },
    ]

    const sidebarMenuitems: Array<SidebarMenuItem> = [
        {
            onClick: () => console.log('you logged out.'),
            name: t.LOG_OUT,
        },
        {
            onClick: () => console.log('you asked for help.'),
            name: t.HELP,
        },
    ]

    const handleOpenSettings = () => {
        dispatch(setOpenSettings(true))
    }
    return (
        <div className="flex h-screen">
            <div className="flex h-screen dark:bg-darkfg shadow-md dark:shadow-2xl border-r border-l border-gentle border-opacity-10">
                <aside className="w-80 overflow-y-auto shadow-md dark:shadow-2xl flex flex-col justify-start">
                    <SidebarTitle />

                    <SidebarNav navs={navs} />

                    <SidebarMenu items={sidebarMenuitems} />
                </aside>
            </div>

            <div className="flex flex-col flex-1 w-full sticky">
                <header>
                    <nav className="h-24 px-4 flex items-center justify-between dark:bg-darkfg shadow-md dark:shadow-2xl border-b border-gentle border-opacity-10">
                        <div className="cursor-pointer">
                            <Link href="/">
                                <img
                                    alt="NTIS Logo"
                                    src={
                                        theme === 'dark'
                                            ? '/static/logo-txt-dark.png'
                                            : '/static/logo-txt.png'
                                    }
                                    width={144}
                                    className="opacity-90 hover:opacity-100 onclick-push"
                                    draggable={false}
                                />
                            </Link>
                        </div>
                        <div className="flex justify-between items-center">
                            <Link href="/user">
                                <div className="mx-2 hover:text-primary cursor-pointer onclick-push">
                                    <MdPersonOutline size={32} />
                                </div>
                            </Link>

                            <div className="mx-2 hover:text-primary cursor-pointer onclick-push">
                                <MdOutlineNotificationsNone size={32} />
                            </div>

                            <div
                                className="mx-2 hover:text-primary cursor-pointer onclick-push"
                                onClick={handleOpenSettings}
                            >
                                <MdOutlineSettings size={32} />
                            </div>
                        </div>
                    </nav>
                </header>

                <main className="h-full overflow-y-auto overflow-x-hidden">
                    <div className="h-full container">{children}</div>
                </main>
            </div>
        </div>
    )
}
