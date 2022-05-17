export type TestState = {
    msg: string
    user: any
}

export interface IInputField {
    fieldIcon: any
    placeholder: string
    onChange?: (e: any) => void
    onKeyDown?: (e: any) => void
    onBlur?: () => void
    value: string
    type?:
        | 'text'
        | 'password'
        | 'number'
        | 'range'
        | 'url'
        | 'hidden'
        | 'textarea'
        | 'email'
    width?: 'small' | 'medium' | 'large' | 'full'
    label?: string
    errorMessage?: string
    isInvalid?: any
    disabled?: boolean
    required?: boolean
    defaultValue?: string
    ltr?: boolean
    autoFocus?: boolean
}

export interface IButtonProps {
    text: string
    onClick?: (e: any) => void
    outLine?: boolean
    fullWidth?: boolean
    icon?: any
    loading?: boolean
    type?: 'submit' | 'reset' | 'button'
    color?: 'danger' | 'warning'
    disabled?: boolean
    classes?: string
}
