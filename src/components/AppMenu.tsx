import Link from 'next/link'
import { toast } from 'react-toastify'
import {
    MdOutlineSettings,
    MdPersonOutline,
    MdOutlineNotificationsNone,
    MdDeveloperBoard,
    MdGroups,
    MdOutlineReceiptLong,
    MdAccountBalance,
    MdCalendarViewMonth,
    MdDataExploration,
    MdGavel,
    MdPanTool,
    MdSettingsInputComposite,
    MdSpeakerNotes,
    MdFeed,
    MdParagliding,
    MdSocialDistance,
    MdOutlineApi,
    MdOutlineFingerprint,
    MdOutlineRemoveCircle,
    MdOutlineSecurity,
    MdOutlineVpnLock,
    MdOutlineRecycling,
    MdOutlineReduceCapacity,
    MdOutlineRealEstateAgent,
    MdReorder,
} from 'react-icons/md'
import {
    setOpenSettings,
    useAppDispatch,
    useAppSelector,
    logout,
    setMobileNav,
} from 'src/app'
import { SidebarMenu, SidebarNav, SidebarTitle } from 'src/components'
import { NavItem, SidebarMenuItem } from 'types'

export function AppMenu(props: any) {
    const dispatch = useAppDispatch()
    const { isMobile, theme, t, dir, openMobileNav } = useAppSelector(
        state => state.ui
    )
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
        {
            localeKey: 'BANK',
            icon: <MdAccountBalance size={28} />,
            path: '/bank',
        },
        {
            localeKey: 'GALLERY',
            path: '/gallery',
            icon: <MdCalendarViewMonth size={28} />,
        },
        {
            localeKey: 'DATA',
            path: '/data',
            icon: <MdDataExploration size={28} />,
        },
        {
            localeKey: 'JUDGEMENTS',
            icon: <MdGavel size={28} />,
            path: '/judgements',
        },
        {
            localeKey: 'INQUIRIES',
            path: '/inquiries',
            icon: <MdPanTool size={28} />,
        },
        {
            localeKey: 'POWER',
            path: '/power',
            icon: <MdSettingsInputComposite size={28} />,
        },
        {
            localeKey: 'CHATS',
            icon: <MdSpeakerNotes size={28} />,
            path: '/chats',
        },
        {
            localeKey: 'DOCUMENTS',
            path: '/docs',
            icon: <MdFeed size={28} />,
        },
        {
            localeKey: 'ORDERS',
            path: '/orders',
            icon: <MdParagliding size={28} />,
        },
        {
            localeKey: 'TRANSFERS',
            icon: <MdSocialDistance size={28} />,
            path: '/transfers',
        },
        {
            localeKey: 'CENTER',
            path: '/center',
            icon: <MdOutlineApi size={28} />,
        },
        {
            localeKey: 'FINGERPRINTS',
            path: '/fingerprints',
            icon: <MdOutlineFingerprint size={28} />,
        },
        {
            localeKey: 'TERMINATED',
            icon: <MdOutlineRemoveCircle size={28} />,
            path: '/terminated',
        },
        {
            localeKey: 'SECURITY',
            path: '/security',
            icon: <MdOutlineSecurity size={28} />,
        },
        {
            localeKey: 'REGIONS',
            path: '/regions',
            icon: <MdOutlineVpnLock size={28} />,
        },
        {
            localeKey: 'RECYCLE',
            icon: <MdOutlineRecycling size={28} />,
            path: '/recycle',
        },
        {
            localeKey: 'ORGANIZATION',
            path: '/org',
            icon: <MdOutlineReduceCapacity size={28} />,
        },
        {
            localeKey: 'GRANTS',
            path: '/grants',
            icon: <MdOutlineRealEstateAgent size={28} />,
        },
    ]

    const sidebarMenuitems: Array<SidebarMenuItem> = [
        {
            onClick: () => toast.info(t.ASKED_HELP),
            name: t.HELP,
        },
        {
            onClick: () => {
                dispatch(logout())
                toast.info(t.LOGGED_OUT)
            },
            name: t.LOG_OUT,
        },
    ]

    const handleOpenSettings = () => {
        dispatch(setOpenSettings(true))
    }

    const handleOpenMobileMenu = () => {
        dispatch(setMobileNav(!openMobileNav))
    }

    return (
        <div className="flex h-screen w-screen">
            <div
                className={`flex h-full dark:bg-darkfg shadow-md border-shade border-opacity-40 ${
                    isMobile ? '' : dir === 'rtl' ? 'border-l' : 'border-r'
                }`}
            >
                {!isMobile && (
                    <aside className="w-80 shadow-md flex flex-col justify-start">
                        <SidebarTitle />

                        <SidebarNav navs={navs} />

                        <SidebarMenu items={sidebarMenuitems} />
                    </aside>
                )}
            </div>

            {isMobile && (
                <aside
                    className={`h-full flex flex-col justify-start w-3/4 absolute z-20 overflow-y-auto bg-lightbg dark:bg-darkfg shadow-lg border-shade border-opacity-40
                ${
                    dir === 'rtl'
                        ? 'left-0 border-r animate-slide-right'
                        : 'right-0 border-l animate-slide-left'
                } 
                ${!openMobileNav && 'hidden'}`}
                >
                    <SidebarNav navs={navs} />
                    <SidebarMenu items={sidebarMenuitems} />
                </aside>
            )}

            <div className="w-full flex flex-col flex-1">
                <header>
                    <nav className="h-24 px-4 flex items-center justify-between dark:bg-darkfg shadow-md border-b border-shade border-opacity-40">
                        <div className="cursor-pointer">
                            {isMobile ? (
                                <div
                                    className="hover:text-primary cursor-pointer onclick-push"
                                    onClick={handleOpenMobileMenu}
                                >
                                    <MdReorder size={36} />
                                </div>
                            ) : (
                                <Link href="/">
                                    <img
                                        alt="Bhr Logo"
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
                            )}
                        </div>
                        <div className="flex justify-between items-center">
                            <Link href="/user">
                                <div className="mx-2 hover:text-primary cursor-pointer onclick-push">
                                    <MdPersonOutline size={24} />
                                </div>
                            </Link>

                            <div className="mx-2 hover:text-primary cursor-pointer onclick-push">
                                <MdOutlineNotificationsNone size={24} />
                            </div>

                            <div
                                className="mx-2 hover:text-primary cursor-pointer onclick-push"
                                onClick={handleOpenSettings}
                            >
                                <MdOutlineSettings size={24} />
                            </div>
                        </div>
                    </nav>
                </header>

                <main
                    className="w-full h-full overflow-y-auto overflow-x-hidden"
                    onClick={e => {
                        e.stopPropagation()
                        dispatch(setMobileNav(false))
                    }}
                >
                    {children}
                </main>
            </div>
        </div>
    )
}
