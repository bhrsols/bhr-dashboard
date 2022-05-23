import Head from 'next/head'
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import {
    useAppDispatch,
    useAppSelector,
    initApp,
    setOpenSettings,
} from 'src/app'
import {
    LoginForm,
    AppInitializing,
    AppModal,
    AppSettings,
    AppMenu,
} from 'src/components'

export function AppLayout(props: any) {
    const dispatch = useAppDispatch()
    const { ui } = useAppSelector(state => state)
    const { children } = props
    const { t, appInitialized, initializing, openSettings } = ui

    useEffect(() => {
        !appInitialized && dispatch(initApp())
    }, [appInitialized, dispatch])

    return (
        <div className="relative overflow-x-hidden">
            <Head>
                <title>{t.APP_TITLE}</title>
            </Head>

            <ToastContainer
                position="top-center"
                rtl={false}
                toastStyle={{
                    color: '#121317',
                    backgroundColor: '#ffffff',
                }}
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

            <AppModal
                show={openSettings}
                hide={() => dispatch(setOpenSettings(false))}
            >
                <AppSettings />
            </AppModal>

            {initializing ? (
                <AppInitializing />
            ) : {} ? (
                <AppMenu>{children}</AppMenu>
            ) : (
                <LoginForm />
            )}
        </div>
    )
}
