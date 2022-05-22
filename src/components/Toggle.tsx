import { useAppSelector } from 'src/app'
import { IToggleProps } from 'types'

export function Toggle(props: IToggleProps) {
    const { dir } = useAppSelector(state => state.ui)
    const { toggled } = props

    return dir == 'rtl' ? (
        <div className="relative inline-block w-11 align-middle">
            <input
                type="checkbox"
                name="toggle"
                className="toggle-checkbox-right absolute block w-7 h-7 rounded-full bg-darkfg appearance-none"
                checked={toggled}
                readOnly
            />
            <label
                htmlFor="toggle"
                className="toggle-label block overflow-hidden h-7 rounded-full bg-disabled cursor-pointer"
            />
        </div>
    ) : (
        <div className="relative inline-block w-11 align-middle">
            <input
                type="checkbox"
                name="toggle"
                className="toggle-checkbox-left absolute block w-7 h-7 rounded-full bg-darkfg appearance-none"
                checked={toggled}
                readOnly
            />
            <label
                htmlFor="toggle"
                className="toggle-label block overflow-hidden h-7 rounded-full bg-disabled cursor-pointer"
            />
        </div>
    )
}
