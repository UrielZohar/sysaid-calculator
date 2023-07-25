import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../app/store"

export interface CalculatorState {
  currentFormula: string,
  lastsClicks: string[]
}

const initialState: CalculatorState = {
  currentFormula: '',
  lastsClicks: [],
}

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addClick: (state, action: PayloadAction<string>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.lastsClicks = [...state.lastsClicks, action.payload].slice(-20)
    },
    clearClicks: (state) => {
      state.lastsClicks = []
    },
    setCurrentFormula: (state, action: PayloadAction<string>) => {
      state.currentFormula = action.payload
    },
    clearAll: (state) => {
      state.currentFormula = ''
      state.lastsClicks = []
    }
  }
})

export const { addClick, setCurrentFormula, clearAll, clearClicks  } = calculatorSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.calculator)`
export const selectLastsClicks = (state: RootState) => state.calculator.lastsClicks
export const selectCurrentFormula = (state: RootState) => state.calculator.currentFormula

export default calculatorSlice.reducer
