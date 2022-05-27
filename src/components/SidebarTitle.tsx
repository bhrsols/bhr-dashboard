import { useAppSelector } from 'src/app'

export const SidebarTitle = () => {
    const { t } = useAppSelector(state => state.ui)
    return (
        <div className="min-h-24 text-center flex justify-center items-center shadow-md border-b border-shade border-opacity-40">
            <p className="flex items-center justify-center select-none text-darkbg dark:text-lightfg font-semibold">
                {t.APP_TITLE}
            </p>
        </div>
    )
}
