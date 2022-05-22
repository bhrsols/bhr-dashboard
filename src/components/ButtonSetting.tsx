import { IButtonSettingProps } from 'types'
import Select from 'react-select'

export const ButtonSetting = (props: IButtonSettingProps) => {
    const { icon, name, btn } = props

    return (
        <div className="flex justify-between items-start p-4 select-none">
            <div className="flex justify-center items-center">
                {icon}
                <h5 className="mx-4">{name}</h5>
            </div>
            {btn}
        </div>
    )
}
