export type TestState = {
    msg: string
    user: any
}

export type UIState = {
    initializing: boolean
    appInitialized: boolean
    theme: 'light' | 'dark'
    locale: LOCALE
    t: AppLocale
    dir: 'rtl' | 'ltr'
}

export type UIStateToSave = {
    theme: 'light' | 'dark'
    locale: LOCALE
}

export interface InputFieldProps {
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

export enum HTTPResponse {
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NO_CONTENT = 204,
    RESET_CONTENT = 205,
    FOUND = 302,
    NOT_MODIFIED = 304,
    UNUSED = 306,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    NOT_ACCEPTABLE = 406,
    REQUEST_TIMEOUT = 408,
    CONFLICT = 409,
    GONE = 410,
    URI_TOO_LONG = 414,
    UNSUPPORTED_MEDIA_TYPE = 415,
    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
}

export enum REST {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    PATCH = 'PATCH',
}

export enum LOCALE {
    EN = 'en',
    AR = 'ar',
}

export type AppLocale = {
    APP_TITLE: string
}
