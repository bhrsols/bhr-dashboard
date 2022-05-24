import Head from 'next/head'
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import {
    useAppDispatch,
    useAppSelector,
    initApp,
    setOpenSettings,
    setInitializing,
} from 'src/app'
import {
    AppLogin,
    AppInitializing,
    AppModal,
    AppSettings,
    AppMenu,
} from 'src/components'

export function AppLayout(props: any) {
    const dispatch = useAppDispatch()
    const { ui } = useAppSelector(state => state)
    const { children } = props
    const { t, dir, theme, appInitialized, initializing, openSettings } = ui

    useEffect(() => {
        if (!appInitialized) {
            dispatch(initApp())
        }

        if (initializing) {
            setTimeout(() => dispatch(setInitializing(false)), 1000)
        }
    }, [])

    return (
        <div className="relative overflow-x-hidden">
            <Head>
                <title>{t.APP_TITLE}</title>
            </Head>

            <ToastContainer
                position="top-center"
                rtl={dir === 'rtl'}
                theme={theme}
                autoClose={1000}
                closeButton={false}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
                limit={1}
            />

            <AppInitializing />

            <AppModal
                show={openSettings}
                hide={() => dispatch(setOpenSettings(false))}
            >
                <AppSettings />
            </AppModal>

            {false ? <AppMenu>{children}</AppMenu> : <AppLogin />}
        </div>
    )
}
