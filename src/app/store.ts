import { calculatorSlice } from './../components/CalculatorManager/CalculatorManagerSlice';
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import loginSlice from "../components/Login/LoginSlice"
import calculatorSliceSlice from "../components/CalculatorManager/CalculatorManagerSlice"

export const store = configureStore({
  reducer: {
    login: loginSlice,
    calculator: calculatorSliceSlice,
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
