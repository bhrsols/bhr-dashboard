import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAppSelector } from 'src/app'
import { ISidebarNavProps, NavItem } from 'types'

export const SidebarNav = (props: ISidebarNavProps) => {
    const router = useRouter()
    const { t } = useAppSelector(state => state.ui)
    const { navs } = props
    return (
        <div className="space-y-5">
            {navs.map((item: NavItem) => (
                <Link href={item.path} key={item.localeKey}>
                    <div
                        className={`flex items-center rounded-md mx-3 px-2 py-2 hover:bg-gentle dark:hover:bg-darkbg cursor-pointer select-none
                        ${
                            router.pathname === item.path &&
                            'bg-gentle dark:bg-darkbg'
                        }
                        `}
                    >
                        {item.icon}
                        {/* @ts-ignore */}
                        <p className="mx-2">{`${t[item.localeKey]}`}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}
