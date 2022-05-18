import { IButtonProps } from 'types'
import { ImSpinner10 } from 'react-icons/im'

export const Button = (props: IButtonProps) => {
    const {
        type,
        onClick,
        disabled,
        color,
        outLine,
        fullWidth,
        icon,
        loading,
        classes,
    } = props

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`block px-3 md:px-5 py-2 border border-transparent  rounded shadow-md focus:outline-none focus:ring-1 focus:ring-black  transition 
      ${
          (color === 'danger' && 'bg-red-600 hover:bg-red-600 bg-opacity-90') ||
          (color === 'warning' && 'bg-yellow-500 hover:bg-yellow-600') ||
          (outLine &&
              !disabled &&
              'bg-transparent border-accent dark:border-gray-300 hover:bg-primary hover:bg-opacity-20 text-gray-600 dark:text-gray-300') ||
          (disabled &&
              'bg-black text-gray-400 bg-opacity-20 dark:bg-black dark:bg-opacity-30 dark:text-gray-500') ||
          'bg-button_primary hover:bg-button_accent'
      }
      ${fullWidth ? `w-full flex justify-center` : `w-auto`}
      ${icon && `flex justify-center items-center`}
      ${disabled && 'cursor-default'}
      ${classes}`}
        >
            {loading ? (
                <div className="w-32 flex justify-center items-center">
                    <ImSpinner10 className="animate-spin" size={20} />
                </div>
            ) : (
                <div className={`flex items-center justify-center`}>
                    <span className={icon && 'mx-1'}>{icon}</span>
                    <p className="text-sm">{props.text}</p>
                </div>
            )}
        </button>
    )
}
