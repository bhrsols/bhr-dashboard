import { useAppDispatch, useAppSelector, setOpenSettings } from 'src/app'
import { Button } from 'src/components'

export function AppSettings() {
    const dispatch = useAppDispatch()
    const { t, locale, openSettings } = useAppSelector(state => state.ui)
    return (
        <div>
            <Button
                text="settings"
                onClick={() => dispatch(setOpenSettings(false))}
            />
        </div>
    )
}
