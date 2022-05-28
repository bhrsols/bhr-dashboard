import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
    delCookie,
    delLocalStorageByKey,
    getCookie,
    getCurrentLocale,
    getLocalStorageByKey,
    saveLocalStorage,
    setCookie,
} from 'helpers'
import { REST, User, PropertiesState, LoginDto, AppLocale } from 'types'
import { toast } from 'react-toastify'

const initialState = {
    user: null,
    propertiesLoading: false,
} as PropertiesState

export const propertiesSlice = createSlice({
    name: 'properties',
    initialState,
    reducers: {
        logout: state => {
            delCookie('access_token')
            delLocalStorageByKey('user')
            state.user = null
        },

        isLoggedIn: state => {
            const jwt = getCookie('access_token')
            const user = getLocalStorageByKey('user')

            if (jwt && user) state.user = user
            else state.user = null
        },
    },
    extraReducers: builder => {
        // Initializes app
        builder.addCase(login.fulfilled, (state, action) => {
            const { user } = action.payload
            state.user = user

            // Save user data to cookie and storage
            setCookie('access_token', user, 7)
            saveLocalStorage('user', user)

            // Greet user upon login
            const { t } = getCurrentLocale()
            toast.info(`${t.GREET_USER} ${user.name} ${t.HAND_WAVING}.`)

            state.propertiesLoading = false
        })
        builder.addCase(login.pending, state => {
            state.propertiesLoading = true
        })
        builder.addCase(login.rejected, (state, action) => {
            const localeKey = action.payload

            //TO-DO: remove when real login is implemented
            state.user = {
                id: 1,
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'Sincere@april.biz',
                address: {
                    street: 'Kulas Light',
                    suite: 'Apt. 556',
                    city: 'Gwenborough',
                    zipcode: '92998-3874',
                    geo: {
                        lat: '-37.3159',
                        lng: '81.1496',
                    },
                },
                phone: '1-770-736-8031 x56442',
                website: 'hildegard.org',
                company: {
                    name: 'Romaguera-Crona',
                    catchPhrase: 'Multi-layered client-server neural-net',
                    bs: 'harness real-time e-markets',
                },
            }

            // Display error message
            const { t } = getCurrentLocale()
            toast.error(t[`${localeKey as keyof AppLocale}`])

            state.propertiesLoading = false
        })
    },
})

export const login = createAsyncThunk(
    'properties/login',
    async (_: LoginDto, thunkAPI) => {
        // Expecting an array of type User
        const userLoginResponse = await fetch(
            `https://jsonplaceholder.typicode.com/users`,
            {
                method: REST.GET,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        )

        if (userLoginResponse.ok) {
            const userLoginResponseToJSON: Array<User> =
                await userLoginResponse.json()

            return {
                user: userLoginResponseToJSON[0],
            }
        } else {
            return thunkAPI.rejectWithValue('LOGIN_FAILED')
        }
    }
)

export const { logout, isLoggedIn } = propertiesSlice.actions

export default propertiesSlice.reducer
