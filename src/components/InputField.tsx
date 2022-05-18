import { InputFieldProps } from 'types'
import { useState } from 'react'
import { HiEye, HiEyeOff } from 'react-icons/hi'

export const InputField = (props: InputFieldProps) => {
    const [showField, setShowField] = useState(false)

    return (
        <>
            <div
                dir={props.ltr ? 'ltr' : ''}
                className={`flex flex-col my-2 justify-center ${
                    props.width === 'small'
                        ? 'w-48'
                        : props.width === 'medium'
                        ? 'w-64'
                        : props.width === 'large'
                        ? 'w-96'
                        : props.width === 'full'
                        ? 'w-full'
                        : 'w-auto'
                }`}
            >
                {props.label && (
                    <p
                        className={`text-gray-700 dark:text-gray-300 text-sm md:text-md my-2 mt-2`}
                    >
                        {props.label}
                    </p>
                )}

                <div className="flex relative justify-center items-center rounded-md border border-gray-300 dark:border-gray-700">
                    <span
                        className={`inline-flex  items-center px-3  ${
                            props.disabled ? 'h-full' : ''
                        }   text-gray-500 dark:text-gray-300 text-sm`}
                    >
                        {props.fieldIcon && <props.fieldIcon size={20} />}
                    </span>
                    {props.type === 'textarea' ? (
                        <textarea
                            autoFocus={props.autoFocus}
                            disabled={props.disabled}
                            placeholder={props.placeholder}
                            onChange={props.onChange}
                            onKeyDown={props.onKeyDown}
                            value={props.value ?? ''}
                            onBlur={props.onBlur}
                            className={`flex-1 appearance-none w-full py-1.5 px-4 border-0
        ${
            props.disabled
                ? 'bg-gray-200 dark:bg-dark_primary dark:bg-opacity-30 text-gray-700 dark:text-gray-300 text-opacity-50 dark:text-opacity-50'
                : 'bg-field dark:bg-dark_primary text-gray-700 dark:text-gray-300 placeholder-gray-400'
        }
        shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-accent dark:focus:ring-primary focus:border-transparent transition duration-200`}
                        />
                    ) : (
                        <input
                            autoFocus={props.autoFocus}
                            defaultValue={props.defaultValue}
                            required={props.required}
                            disabled={props.disabled}
                            type={showField ? 'text' : props.type}
                            placeholder={props.placeholder}
                            onChange={props.onChange}
                            onKeyDown={props.onKeyDown}
                            value={props.value ?? ''}
                            onBlur={props.onBlur}
                            className={`flex-1 appearance-none w-full h-10 py-1.5 px-4 border-0
        ${
            props.disabled
                ? 'bg-gray-200 dark:bg-dark_primary dark:bg-opacity-30 text-gray-700 dark:text-gray-300 text-opacity-50 dark:text-opacity-50'
                : 'bg-field dark:bg-dark_primary text-gray-700 dark:text-gray-300 placeholder-gray-400'
        }
        shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-accent dark:focus:ring-primary rtl:rounded-tl rtl:rounded-bl ltr:rounded-tr ltr:rounded-br focus:border-transparent transition duration-200`}
                        />
                    )}
                    {props.type === 'password' && (
                        <div
                            className="absolute top-2 right-3 text-gray-500 dark:text-gray-300 cursor-pointer select-none"
                            onClick={() => setShowField(!showField)}
                        >
                            {showField ? (
                                <HiEyeOff
                                    className="animate-grow-light hover:opacity-60"
                                    size={24}
                                />
                            ) : (
                                <HiEye
                                    className="animate-grow-light hover:opacity-60"
                                    size={24}
                                />
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
