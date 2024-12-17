import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import { UserType } from '@/interfaces'

export const store = configureStore({
	reducer: {
		user: userReducer,
	},
})

export default store

export interface UserState {
	currentUserData: UserType | string | null
	currentUserId: string
}
