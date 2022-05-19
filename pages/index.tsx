import type { NextPage } from 'next'
import Link from 'next/link'
import { Button } from 'src/components'
import { AppLayout } from 'src/components/layout'
import {
    useAppDispatch,
    useAppSelector,
    switchTheme,
    setLocale,
    setOpenSettings,
} from 'src/app'
import { LOCALE } from 'types'

const Home: NextPage = () => {
    const dispatch = useAppDispatch()
    const { t, locale, openSettings } = useAppSelector(state => state.ui)

    return (
        <AppLayout>
            <Link href="/">{t.APP_TITLE}</Link>
            <Button text="theme" onClick={() => dispatch(switchTheme())} />
            <Button
                text="locale"
                onClick={() =>
                    dispatch(
                        setLocale(locale === LOCALE.EN ? LOCALE.AR : LOCALE.EN)
                    )
                }
            />
            <Button
                text="settings"
                onClick={() => dispatch(setOpenSettings(true))}
            />
        </AppLayout>
    )
}

export default Home
