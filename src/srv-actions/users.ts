'use server'
import dbConnect from '@/config/db-config'
import UserModel from '@/models/user-model'
import { currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

await dbConnect()

export const getCurrentUser = async () => {
	const clerkUser = await currentUser()
	// console.log('clerkUser>>>', clerkUser)

	const mongoUser = await UserModel.findOne({ clerkUserId: clerkUser?.id })
	if (mongoUser) {
		// console.log('getCurrentUser_mongoUser>>>', mongoUser.toJSON())
		return mongoUser.toJSON()
	}

	const newUser = {
		clerkUserId: clerkUser?.id,
		userName: clerkUser?.username,
		name: clerkUser?.firstName + ' ' + clerkUser?.lastName,
		email: clerkUser?.emailAddresses[0].emailAddress,
		profileImage: clerkUser?.imageUrl,
		bio: '',
	}

	const savedUser = await UserModel.create(newUser)
	return NextResponse.json(savedUser)
}
