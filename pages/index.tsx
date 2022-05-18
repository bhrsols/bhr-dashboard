import type { NextPage } from 'next'
import Link from 'next/link'
import { Button } from 'src/components'
import { AppLayout } from 'src/layout'
import {
    useAppDispatch,
    useAppSelector,
    switchTheme,
    setLocale,
} from 'src/state'
import { LOCALE } from 'types'

const Home: NextPage = () => {
    const dispatch = useAppDispatch()
    const { t, locale } = useAppSelector(state => state.ui)

    return (
        <AppLayout>
            <Link href="/">{t.APP_TITLE}</Link>
            <Button text="Click" onClick={() => dispatch(switchTheme())} />
            <Button
                text="Click"
                onClick={() =>
                    dispatch(
                        setLocale(locale === LOCALE.EN ? LOCALE.AR : LOCALE.EN)
                    )
                }
            />
        </AppLayout>
    )
}

export default Home
