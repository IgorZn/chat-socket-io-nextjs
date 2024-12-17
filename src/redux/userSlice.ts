import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
	currentUserData: null,
	currentUserId: '',
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		SetCurrentUser: (state, action: PayloadAction<string>) => {
			state.currentUserData = action.payload
		},
		SetCurrentUserId: (state, action: PayloadAction<string>) => {
			state.currentUserId = action.payload
		},
	},
})

export const { SetCurrentUser, SetCurrentUserId } = userSlice.actions

export default userSlice.reducer
