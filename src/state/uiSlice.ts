import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getLocalStorageByKey, saveLocalStorage } from 'helpers'
import { UIState, UIStateToSave, LOCALE } from 'types'
import { ar, en } from 'locale'

const initialState = {
    initializing: true,
    appInitialized: false,
    theme: 'light',
    locale: LOCALE.AR,
    t: ar,
    dir: 'rtl',
} as UIState

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        // Switches between dark and light themes
        switchTheme: state => {
            const root = window.document.documentElement
            const currentTheme = state.theme
            if (currentTheme === 'light') {
                root.classList.remove('light')
                root.classList.add('dark')
                state.theme = 'dark'
            } else {
                root.classList.remove('dark')
                root.classList.add('light')
                state.theme = 'light'
            }

            const stateToSave: UIStateToSave = {
                theme: state.theme,
                locale: state.locale,
            }

            saveLocalStorage('ui', stateToSave)
        },

        // Disables or enables app-wide loading animation
        setInitializing: (state, action) => {
            state.initializing = action.payload
        },

        // Sets app's locale and text dir
        setLocale: (state, action) => {
            const root = window.document.documentElement
            const locale = action.payload

            switch (locale) {
                case LOCALE.EN:
                    root.lang = LOCALE.EN
                    root.dir = 'ltr'
                    state.dir = 'ltr'
                    state.locale = LOCALE.EN
                    state.t = en
                    break
                default:
                    root.lang = LOCALE.AR
                    root.dir = 'rtl'
                    state.dir = 'rtl'
                    state.locale = LOCALE.AR
                    state.t = ar
            }

            const stateToSave: UIStateToSave = {
                theme: state.theme,
                locale: state.locale,
            }

            saveLocalStorage('ui', stateToSave)
        },
    },
    extraReducers: builder => {
        // Initializes app
        builder.addCase(initApp.fulfilled, (state, action) => {
            const root = window.document.documentElement
            const { uiState } = action.payload

            const theme = uiState.theme
            if (theme === 'light') {
                root.classList.remove('dark')
                root.classList.add('light')
            } else {
                root.classList.remove('light')
                root.classList.add('dark')
            }
            state.theme = theme

            const locale = uiState.locale
            switch (locale) {
                case LOCALE.EN:
                    root.lang = LOCALE.EN
                    root.dir = 'ltr'
                    state.dir = 'ltr'
                    state.locale = LOCALE.EN
                    state.t = en
                    break
                default:
                    root.lang = LOCALE.AR
                    root.dir = 'rtl'
                    state.dir = 'rtl'
                    state.locale = LOCALE.AR
                    state.t = ar
            }

            state.appInitialized = true
        })
    },
})

export const initApp = createAsyncThunk('ui/initApp', async () => {
    const uiState =
        (getLocalStorageByKey('ui') as UIStateToSave) || initialState
    return {
        uiState,
    }
})

export const { switchTheme, setInitializing, setLocale } = uiSlice.actions

export default uiSlice.reducer
