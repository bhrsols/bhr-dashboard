import { IButtonProps } from 'types'

export const Button = (props: IButtonProps) => {
    const { onClick, classes, text, variant, disabled } = props

    return (
        <div
            onClick={e => {
                if (!disabled && onClick) onClick(e)
            }}
            className={`min-w-9 text-center font-bold text-white rounded-xl shadow py-1 px-4 select-none cursor-pointer onclick-push
            ${disabled && 'bg-disabled'}
            ${
                variant === 'danger'
                    ? 'bg-gradient-to-r from-danger to-watermelon hover:from-watermelon hover:to-danger'
                    : variant === 'warning'
                    ? 'bg-gradient-to-r from-warning to-orange hover:from-orange hover:to-warning'
                    : 'bg-gradient-to-r from-primary to-blend hover:from-blend hover:to-primary'
            } ${classes}`}
        >
            <p className="uppercase">{text}</p>
        </div>
    )
}
