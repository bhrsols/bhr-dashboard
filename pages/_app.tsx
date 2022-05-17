import 'globals.css'
import { AppLoading } from 'src/components'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from 'src/app'
import { AppLayout } from 'src/layout'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <AppLoading />
            <AppLayout>
                <Component {...pageProps} />
            </AppLayout>
        </Provider>
    )
}

export default MyApp
