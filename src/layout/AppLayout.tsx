import { ToastContainer } from 'react-toastify'
import {
    useAppDispatch,
    useAppSelector,
    initApp,
    setInitializing,
} from 'src/state'
import { LoginForm, AppInitializing } from 'src/components'
import { AppBar } from './components/AppBar'
import { useEffect } from 'react'

export function AppLayout(props: any) {
    const dispatch = useAppDispatch()
    const { ui } = useAppSelector(state => state)
    const { children } = props
    const { appInitialized, initializing } = ui

    useEffect(() => {
        !appInitialized && dispatch(initApp())
        initializing && setTimeout(() => dispatch(setInitializing(false)), 1500)
    }, [])

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
