import 'globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { store } from 'src/app'
import { AppLoading } from 'src/components'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Head>
                <title>Website Name</title>
                <meta name="theme-color" content="#1ea3a6" />
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
                <meta property="og:image" content="./static/main.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="bhr.sa" />
                <meta property="twitter:url" content="https://bhr.sa" />
                <meta name="twitter:title" content="Website Title" />
                <meta
                    name="twitter:description"
                    content="description goes here in this very exact meta tag"
                />
                <meta name="twitter:image" content="./static/main.png" />
            </Head>
            <AppLoading />
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
