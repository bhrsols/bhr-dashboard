import { InputFieldProps } from 'types'
import { useState } from 'react'
import { HiEye, HiEyeOff } from 'react-icons/hi'
import { useAppSelector } from 'src/app'

export const InputField = (props: InputFieldProps) => {
    const { dir } = useAppSelector(state => state.ui)
    const [showField, setShowField] = useState(false)

    return (
        <>
            <div
                dir={props.dir}
                className={`flex flex-col my-2 justify-center 
                ${
                    props.width === 'small'
                        ? 'w-48'
                        : props.width === 'medium'
                        ? 'w-64'
                        : props.width === 'large'
                        ? 'w-96'
                        : 'w-auto'
                }`}
            >
                <div className="flex relative justify-center items-center rounded-md border bg-lightbg dark:bg-darkbg border-disabled dark:border-opacity-10">
                    <span
                        className={`px-3 border-r border-shade dark:border-gentle`}
                    >
                        {props.fieldIcon && <props.fieldIcon size={20} />}
                    </span>

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
                                ? 'bg-disabled dark:bg-darkfg bg-opacity-30 text-shade'
                                : 'bg-ligthbg text-secondary dark:bg-darkbg dark:text-lightbg placeholder-disabled'
                        } shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-primary dark:focus:ring-primary rtl:rounded-tl rtl:rounded-bl ltr:rounded-tr ltr:rounded-br focus:border-transparent transition duration-200`}
                    />

                    {props.type === 'password' && (
                        <div
                            className={`absolute top-2 right-3 hover:text-primary cursor-pointer select-none`}
                            onClick={() => setShowField(!showField)}
                        >
                            {showField ? (
                                <HiEyeOff size={24} />
                            ) : (
                                <HiEye size={24} />
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
