import { IButtonProps } from 'types'

export const Button = (props: IButtonProps) => {
    const { onClick, classes, text, variant, disabled } = props

    return (
        <div
            onClick={e => {
                if (!disabled) onClick(e)
            }}
            className={`min-w-7 text-center text-white bg-opacity-90 hover:bg-opacity-100 rounded-xl shadow py-1 px-4 cursor-pointer 
            ${disabled && 'bg-disabled'}
            ${
                variant === 'danger'
                    ? 'bg-danger'
                    : variant === 'warning'
                    ? 'bg-warning'
                    : 'bg-primary'
            } ${classes}`}
        >
            {text.toUpperCase()}
        </div>
    )
}
