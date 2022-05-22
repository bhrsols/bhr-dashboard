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
} from 'src/components'
import { AppBar } from './components/AppBar'
import { useEffect } from 'react'

export function AppLayout(props: any) {
    const dispatch = useAppDispatch()
    const { ui } = useAppSelector(state => state)
    const { children } = props
    const { appInitialized, initializing, openSettings } = ui

    useEffect(() => {
        !appInitialized && dispatch(initApp())
    }, [appInitialized, dispatch])

    return (
        <div className="relative overflow-x-hidden">
            <ToastContainer
                position="top-center"
                rtl={false}
                toastStyle={{
                    color: '#121317',
                    backgroundColor: '#ffffff',
                }}
                autoClose={1500}
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
                <AppBar>{children}</AppBar>
            ) : (
                <LoginForm />
            )}
        </div>
    )
}
