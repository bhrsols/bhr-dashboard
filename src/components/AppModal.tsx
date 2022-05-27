import { IAppModalProps } from 'types'

export function AppModal(props: IAppModalProps) {
    const { children, show, hide } = props

    // Handles the click on the modal's parent div
    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation()
        hide()
    }

    return (
        <div
            className={`${!show && 'hidden'} 
        z-30 fixed w-screen h-screen flex flex-col justify-center items-center py-24 md:py-16 bg-overlay`}
            onClick={handleClick}
        >
            <div
                className={`bg-lightfg dark:bg-darkfg shadow rounded w-11/12 md:w-2/4 overflow-y-auto animate-grow`}
            >
                {children}
            </div>
        </div>
    )
}
