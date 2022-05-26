import Head from 'next/head'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useAppSelector } from 'src/app'
import { Button, AppLayout } from 'src/components'

const UserPage: NextPage = () => {
    const router = useRouter()
    const { ui, properties } = useAppSelector(state => state)
    const { t } = ui
    const { user } = properties

    const handleNavigateToHome = () => {
        router.push('/')
    }

    return (
        <AppLayout>
            <Head>
                <title>{user && user?.name}</title>
            </Head>

            <div className="h-full w-full flex flex-col justify-center items-center">
                <h4 className="mb-6">{user && user?.name}</h4>
                <Button text={t.BACK_HOME} onClick={handleNavigateToHome} />
            </div>
        </AppLayout>
    )
}

export default UserPage
