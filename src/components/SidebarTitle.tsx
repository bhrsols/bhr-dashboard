import { useAppSelector } from 'src/app'

export const SidebarTitle = () => {
    const { t } = useAppSelector(state => state.ui)
    return (
        <div className="h-24 mb-4 text-center flex justify-center items-center shadow-md dark:shadow-2xl border-b border-gentle border-opacity-10">
            <div className="flex items-center gap-8">
                <p className="flex items-center justify-center select-none text-darkbg dark:text-lightfg font-semibold">
                    {t.APP_TITLE}
                </p>
            </div>
            <hr className="mt-2" />
        </div>
    )
}
