import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector, setMobileNav } from 'src/app'
import { AppLocale, ISidebarNavProps, NavItem } from 'types'

export const SidebarNav = (props: ISidebarNavProps) => {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const { t } = useAppSelector(state => state.ui)
    const { navs } = props

    const handleNavigation = (route: string) => {
        dispatch(setMobileNav(false))
        router.push(route)
    }
    return (
        <div className="overflow-y-auto">
            {navs.map((item: NavItem) => (
                <div
                    className={`flex items-center rounded-md m-3 px-2 py-2 hover:bg-gentle dark:hover:bg-darkbg cursor-pointer select-none
                 ${router.pathname === item.path && 'bg-gentle dark:bg-darkbg'}
                 `}
                    key={item.localeKey}
                    onClick={() => {
                        handleNavigation(item.path)
                    }}
                >
                    {item.icon}
                    <p className="mx-2">{`${
                        t[item.localeKey as keyof AppLocale]
                    }`}</p>
                </div>
            ))}
        </div>
    )
}
