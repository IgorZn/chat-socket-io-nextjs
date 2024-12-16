import { Button, Flex } from 'antd'
import { SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import dbConnect from '@/config/db-config'
import { getCurrentUser } from '@/srv-actions/users'

export default async function Home() {
	const { userId } = await auth()
	await dbConnect().then(() => console.log('Connected to MongoDB (cached)'))
	const userData = await getCurrentUser()

	// console.log(userId)
	console.log('currentUser>>>', userData)
	return (
		<div className={'mt-5 mx-2'}>
			{userId ? (
				<>
					<UserButton />
					<div className={'flex flex-row mt-5 space-x-2 w-1/2'}>
						<h1 className={'text-sm'}>Home page</h1>
					</div>
				</>
			) : (
				<SignInButton>
					<button>Sign-in</button>
				</SignInButton>
			)}
		</div>
	)
}
