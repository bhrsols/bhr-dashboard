import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import testReducer from 'src/features/testSlice'

export const store = configureStore({
    reducer: {
        test: testReducer,
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
