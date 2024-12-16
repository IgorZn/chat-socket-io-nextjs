'use server'
import UserModel from '@/models/user-model'
import dbConnect from '@/config/db-config'

export const userLookupDb = async (clerkUserId: string) => {
	await dbConnect()
	const user = await UserModel.findOne({ clerkUserId })
	// console.log('user.toJSON()>>>', JSON.stringify(user))
	if (user) return JSON.stringify(user)
	return null
}
