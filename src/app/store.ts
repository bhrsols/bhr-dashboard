import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import uiReducer from 'src/app/uiSlice'
import propertiesReducer from 'src/app/propertiesSlice'

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        properties: propertiesReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
