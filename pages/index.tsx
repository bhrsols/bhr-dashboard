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

    return <AppLayout></AppLayout>
}

export default Home
