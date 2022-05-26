import Head from 'next/head'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useAppSelector } from 'src/app'
import { Button, AppLayout } from 'src/components'

const ReceiptsPage: NextPage = () => {
    const router = useRouter()
    const { t } = useAppSelector(state => state.ui)

    const handleNavigateToHome = () => {
        router.push('/')
    }

    return (
        <AppLayout>
            <Head>
                <title>{t.RECEIPTS}</title>
            </Head>

            <div className="h-full w-full flex flex-col justify-center items-center">
                <h4 className="mb-6">{t.RECEIPTS}</h4>
                <Button text={t.BACK_HOME} onClick={handleNavigateToHome} />
            </div>
        </AppLayout>
    )
}

export default ReceiptsPage
