import { ISelectSettingProps } from 'types'
import Select from 'react-select'
import { generateUUID } from 'helpers'

export const SelectSetting = (props: ISelectSettingProps) => {
    const { options, onChange, icon, name, value } = props
    const id = generateUUID()
    return (
        <div className="flex justify-between items-start p-4 select-none">
            <div className="flex justify-center items-center">
                {icon}
                <h5 className="mx-4">{name}</h5>
            </div>
            <Select
                id="56e9d6a5-0076-4e72-82d4-7dd08502117b"
                instanceId="56e9d6a5-0076-4e72-82d4-7dd08502117b"
                placeholder={value}
                options={options}
                isSearchable={false}
                onChange={onChange}
                className="my-react-select-container"
                classNamePrefix="my-react-select"
            />
        </div>
    )
}
