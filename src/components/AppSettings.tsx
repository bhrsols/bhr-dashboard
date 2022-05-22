import { clearStorageAndCookies } from 'helpers'
import React from 'react'
import {
    MdOutlineClose,
    MdDarkMode,
    MdTranslate,
    MdFlipCameraAndroid,
    MdDelete,
} from 'react-icons/md'
import {
    useAppDispatch,
    useAppSelector,
    setOpenSettings,
    switchTheme,
    setLocale,
} from 'src/app'
import {
    ToggleSetting,
    SelectSetting,
    ButtonSetting,
    Button,
} from 'src/components'
import { LOCALE, ReactSelectOption } from 'types'

export function AppSettings() {
    const dispatch = useAppDispatch()
    const { t, dir, locale, theme } = useAppSelector(state => state.ui)

    const localeOptions = [
        { value: LOCALE.EN, label: LOCALE.EN },
        { value: LOCALE.AR, label: LOCALE.AR },
    ]

    const handleSwitchTheme = (e: React.MouseEvent) => {
        dispatch(switchTheme())
    }

    const handleSwitchLocale = (option: ReactSelectOption) => {
        dispatch(setLocale(option.value))
    }

    const handleRestSettings = () => {
        dispatch(switchTheme())
        dispatch(setLocale(LOCALE.AR))
    }

    const handleClearData = () => {
        clearStorageAndCookies()
    }

    return (
        <div
            className="overflow-y-hidden min-h-400"
            dir={dir}
            onClick={e => e.stopPropagation()}
        >
            <div className="flex justify-between items-center p-4 mb-4 border-b-2 border-gentle">
                <h4>{t.SETTINGS}</h4>
                <MdOutlineClose
                    size={36}
                    className="hover:cursor-pointer"
                    onClick={() => dispatch(setOpenSettings(false))}
                />
            </div>

            <ToggleSetting
                name={t.DARK_THEME}
                icon={<MdDarkMode size={24} />}
                toggled={theme === 'dark'}
                onClick={handleSwitchTheme}
            />

            <SelectSetting
                name={t.APP_LOCALE}
                icon={<MdTranslate size={24} />}
                options={localeOptions}
                value={locale}
                onChange={handleSwitchLocale}
            />

            <ButtonSetting
                name={t.CLEAR_DATA}
                icon={<MdDelete size={24} />}
                btn={
                    <Button
                        text={t.DELETE}
                        variant="danger"
                        onClick={handleClearData}
                    />
                }
            />

            <ButtonSetting
                name={t.RESET_SETTINGS}
                icon={<MdFlipCameraAndroid size={24} />}
                btn={
                    <Button
                        text={t.RESET}
                        variant="warning"
                        onClick={handleRestSettings}
                    />
                }
            />
        </div>
    )
}
