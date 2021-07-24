import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface LoadingState {
  [requestType: string]: boolean
}
const initialState: LoadingState = {}

const slice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    startLoading(state, action: PayloadAction<string>) {
      state[action.payload] = true
    },
    finishLoading(state, action: PayloadAction<string>) {
      state[action.payload] = true
    },
  },
})

export const LOADING = slice.name
export const { startLoading, finishLoading } = slice.actions
export default slice.reducer
