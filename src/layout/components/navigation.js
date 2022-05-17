import { MdNetworkWifi, MdNoEncryption, MdSecurity } from 'react-icons/md'
import { RiDashboardFill, RiDeviceFill } from 'react-icons/ri'
import { FaUserFriends, FaBook } from 'react-icons/fa'
import { IoKeypad } from 'react-icons/io5'
import { AiFillUsb } from 'react-icons/ai'

export const navigations = [
    {
        name: 'Dashboard',
        icon: (
            <RiDashboardFill
                size="22"
                className="text-tlight dark:text-tdark ml-3"
            />
        ),
        path: '/',
    },
    {
        name: 'Networks',
        path: '/networks',
        icon: (
            <MdNetworkWifi
                size="22"
                className="text-tlight dark:text-tdark ml-3"
            />
        ),
    },
    {
        name: 'Devices',
        path: '/devices',
        icon: (
            <RiDeviceFill
                size="22"
                className="text-tlight dark:text-tdark ml-3"
            />
        ),
    },
    {
        name: 'cikDevices',
        path: '/ciks',
        icon: (
            <AiFillUsb size="22" className="text-tlight dark:text-tdark ml-3" />
        ),
    },
    {
        name: 'fillDevices',
        path: '/fills',
        icon: (
            <IoKeypad size="22" className="text-tlight dark:text-tdark ml-3" />
        ),
    },
    {
        name: 'createKeys',
        path: '/keys',
        icon: (
            <MdNoEncryption
                size="22"
                className="text-tlight dark:text-tdark ml-3"
            />
        ),
    },
    {
        name: 'Roles',
        path: '/roles',
        icon: (
            <MdSecurity
                size="22"
                className="text-tlight dark:text-tdark ml-3"
            />
        ),
    },
    {
        name: 'Users',
        path: '/users',
        icon: (
            <FaUserFriends
                size="22"
                className="text-tlight dark:text-tdark ml-3"
            />
        ),
    },
    {
        name: 'Manual',
        path: '/manual',
        icon: <FaBook size="22" className="text-tlight dark:text-tdark ml-3" />,
    },
]
