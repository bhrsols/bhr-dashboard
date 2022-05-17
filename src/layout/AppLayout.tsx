import Head from 'next/head'
import { ToastContainer } from 'react-toastify'
import { useAppSelector } from 'src/app'
import { LoginForm } from 'src/components'
import { AppBar } from './components/AppBar'

export function AppLayout(props: any) {
    const { children } = props
    const { user } = useAppSelector(state => state.test)
    return (
        <div className="relative overflow-x-hidden">
            <Head>
                <title>Website Name</title>
                <meta name="theme-color" content="#000" />
                <link rel="icon" type="image/png" href="./favicon.ico" />

                <meta
                    name="description"
                    content="description goes here in this very exact meta tag"
                />

                <meta property="og:url" content="bhr.sa" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Website Title" />
                <meta
                    property="og:description"
                    content="description goes here in this very exact meta tag"
                />
                <meta
                    property="og:image"
                    content="https://www.bhr.sa/assets/images/main.png"
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="bhr.sa" />
                <meta property="twitter:url" content="https://bhr.sa" />
                <meta name="twitter:title" content="Website Title" />
                <meta
                    name="twitter:description"
                    content="description goes here in this very exact meta tag"
                />
                <meta
                    name="twitter:image"
                    content="https://www.bhr.sa/assets/images/main.png"
                />
            </Head>

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

            {user ? <AppBar>{children}</AppBar> : <LoginForm />}
        </div>
    )
}
