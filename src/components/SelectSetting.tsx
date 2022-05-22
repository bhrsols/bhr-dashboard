import { ISelectSettingProps } from 'types'
import Select from 'react-select'

export const SelectSetting = (props: ISelectSettingProps) => {
    const { options, onChange, icon, name, value } = props

    return (
        <div className="flex justify-between items-start p-4 select-none">
            <div className="flex justify-center items-center">
                {icon}
                <h5 className="mx-4">{name}</h5>
            </div>
            <Select
                options={options}
                isSearchable={false}
                onChange={onChange}
                className="my-react-select-container"
                classNamePrefix="my-react-select"
            />
        </div>
    )
}
