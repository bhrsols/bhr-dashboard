import { IButtonProps } from 'types'
import { ImSpinner10 } from 'react-icons/im'

export const Button = (props: IButtonProps) => {
    const { onClick, classes, text, variant, disabled, loading } = props

    return (
        <div
            onClick={e => {
                if (!disabled && !loading && onClick) onClick(e)
            }}
            className={`min-w-10 flex justify-center items-center font-bold text-white rounded-md shadow py-1 px-3 select-none uppercase text-xs md:text-sm
            ${
                disabled || loading
                    ? 'bg-darkbg bg-opacity-40 dark:bg-shade dark:bg-opacity-40'
                    : variant === 'danger'
                    ? 'bg-gradient-to-r from-danger to-watermelon hover:from-watermelon hover:to-danger cursor-pointer onclick-push'
                    : variant === 'warning'
                    ? 'bg-gradient-to-r from-warning to-orange hover:from-orange hover:to-warning cursor-pointer onclick-push'
                    : 'bg-gradient-to-r from-primary to-blend hover:from-blend hover:to-primary cursor-pointer onclick-push'
            } ${classes}`}
        >
            {loading ? <ImSpinner10 className="animate-spin m-2" /> : text}
        </div>
    )
}
