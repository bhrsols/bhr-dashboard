import type { NextPage } from 'next'
import { useAppSelector } from 'src/app'
import { AppLayout } from 'src/components'

const HomePage: NextPage = () => {
    const { t } = useAppSelector(state => state.ui)
    return (
        <AppLayout>
            <div className="h-full flex justify-center items-center">
                <h3 className="animate-pulse">{t.HELLO_WORLD}</h3>
            </div>
        </AppLayout>
    )
}

export default HomePage
