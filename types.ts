import { ReactElement } from 'react'

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
    openSettings: boolean
}

export type NavItem = {
    localeKey: string
    path: string
    icon: ReactElement<any, any>
}

export type UIStateToSave = {
    theme: 'light' | 'dark'
    locale: LOCALE
    openSettings: boolean
}

export type ReactSelectOption = {
    value: string
    label: string
}

export interface ISidebarMenuProps {
    items: Array<SidebarMenuItem>
}

export interface IButtonSettingProps {
    btn: JSX.Element
    icon: JSX.Element
    name: string
}

export interface ISelectSettingProps {
    options: Array<ReactSelectOption>
    value: string
    onChange: any
    icon: JSX.Element
    name: string
}

export interface ISelectProps {
    options: Array<string>
    placeholder?: string
    value: string
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
    disabled?: boolean
    width?: 'small' | 'medium' | 'large'
    classes?: string
}

export interface IToggleSettingProps {
    onClick: (e: React.MouseEvent) => void
    name: string
    icon: JSX.Element
    toggled: boolean
}

export interface ISidebarNavProps {
    navs: Array<NavItem>
}

export interface SidebarMenuItem {
    onClick: Function
    name: string
}

export interface IToggleProps {
    toggled: boolean
}

export interface IAppModalProps {
    children: any
    show: boolean
    hide: () => void
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
    loading?: boolean
    disabled?: boolean
    classes?: string
    variant?: 'danger' | 'warning'
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
    EN = 'English',
    AR = 'عربي',
}

export type AppLocale = {
    APP_TITLE: string
    SETTINGS: string
    DARK_THEME: string
    APP_LOCALE: string
    SELECT_LOCALE: string
    RESET_SETTINGS: string
    RESET: string
    CLEAR_DATA: string
    DELETE: string
    NOT_FOUND: string
    NUM_404: string
    BACK_HOME: string
    OVERVIEW: string
    CLIENTS: string
    RECEIPTS: string
    LOG_OUT: string
    LOG_IN: string
    HELP: string
}
