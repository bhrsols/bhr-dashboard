import Head from 'next/head'
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import {
    useAppDispatch,
    useAppSelector,
    initApp,
    setOpenSettings,
    setInitializing,
    isLoggedIn,
    setIsMobile,
    validateAppVersion,
} from 'src/app'
import {
    AppLogin,
    AppInitializing,
    AppModal,
    AppSettings,
    AppMenu,
} from 'src/components'
import { SCREENS } from 'types'

export function AppLayout(props: any) {
    const dispatch = useAppDispatch()
    const { children } = props
    const { ui, properties } = useAppSelector(state => state)
    const { user } = properties
    const { t, dir, theme, appInitialized, initializing, openSettings } = ui

    useEffect(() => {
        // Check if app version is latest reset if not
        dispatch(validateAppVersion())

        // Loads saved state from storage if available
        if (!appInitialized) {
            dispatch(initApp())
        }

        // Check if jwttoken is available
        dispatch(isLoggedIn())

        // Disable app loading screen after 1s
        if (initializing) {
            setTimeout(() => dispatch(setInitializing(false)), 1500)
        }

        const handleResize = () => {
            if (window.innerWidth < SCREENS.DESKTOP_MIN_WIDTH)
                dispatch(setIsMobile(true))
            else dispatch(setIsMobile(false))
        }
        handleResize()
        window.addEventListener('resize', handleResize)
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

            {user ? <AppMenu>{children}</AppMenu> : <AppLogin />}
        </div>
    )
}
