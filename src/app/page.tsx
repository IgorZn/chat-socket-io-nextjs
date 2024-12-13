import { Button, Flex } from 'antd'
import { SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import dbConnect from '@/config/db-config'

export default async function Home() {
	const { userId } = await auth()

	await dbConnect().then(() => console.log('Connected to MongoDB (cached)'))

	console.log(userId)
	return (
		<div className={'mt-5 mx-2'}>
			{userId ? (
				<UserButton />
			) : (
				<SignInButton>
					<button>Sign-in</button>
				</SignInButton>
			)}
		</div>
	)
}
