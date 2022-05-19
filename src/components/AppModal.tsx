import { IAppModalProps } from 'types'

export function AppModal(props: IAppModalProps) {
    const { children, show } = props
    return (
        <div
            className={`${
                !show ? 'hidden' : null
            } z-30 fixed w-screen h-screen flex flex-col justify-center items-center py-24 md:py-16 animate-overlay`}
        >
            <div className="bg-lightfg dark:bg-darkfg p-12 shadow rounded w-10/12 md:w-3/4  overflow-y-auto animate-grow">
                {children}
            </div>
        </div>
    )
}
