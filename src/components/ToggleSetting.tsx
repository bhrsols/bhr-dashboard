import { IToggleSettingProps } from 'types'
import { Toggle } from 'src/components'

export const ToggleSetting = (props: IToggleSettingProps) => {
    const { onClick, icon, name, toggled } = props

    return (
        <div className="flex justify-between items-center p-4 select-none">
            <div className="flex justify-center items-center">
                {icon}
                <h5 className="mx-4">{name}</h5>
            </div>
            <div onClick={onClick}>
                <Toggle toggled={toggled} />
            </div>
        </div>
    )
}
