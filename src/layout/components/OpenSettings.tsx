import { BsFillGearFill } from 'react-icons/bs'
import { useRouter } from 'next/router'

export function OpenSettings() {
    const router = useRouter()
    const isSettings = router.pathname === '/settings'

    const handleOpenSettings = () => {
        if (!isSettings) router.push('/settings')
    }

    return (
        <div
            onClick={handleOpenSettings}
            className={`transition-all duration-300 ease-in-out ${
                isSettings
                    ? 'bg-gray-300 dark:bg-dark_primary'
                    : 'hover:bg-gray-300 dark:hover:bg-dark_primary cursor-pointer'
            } text-tlight dark:text-gray-50 rounded p-3`}
        >
            <BsFillGearFill size={24} />
        </div>
    )
}
