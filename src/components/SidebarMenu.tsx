import { setMobileNav, useAppDispatch } from 'src/app'
import { ISidebarMenuProps } from 'types'

export const SidebarMenu = (props: ISidebarMenuProps) => {
    const dispatch = useAppDispatch()
    const { items } = props
    return (
        <div className="mt-auto mb-4 pt-4 border-t border-shade border-opacity-40 w-full flex justify-center items-center px-4">
            <div className="w-full bg-gentle dark:bg-darkbg p-5 rounded-xl flex justify-between items-center gap-6">
                <div className="w-full flex flex-col justify-start items-start gap-1 text-sm">
                    {items.map(item => {
                        return (
                            <div
                                key={item.name}
                                className="hover:bg-disabled hover:dark:bg-darkfg cursor-pointer w-full rounded-md py-1 text-center select-none onclick-push uppercase text-xs"
                                onClick={() => {
                                    dispatch(setMobileNav(false))
                                    item.onClick()
                                }}
                            >
                                {item.name}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
