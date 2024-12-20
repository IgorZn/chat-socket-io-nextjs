import { SignInButton, UserButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import dbConnect from '@/config/db-config'
import Chats from '@/app/(private)/_chat-cpmponents/chats'
import ChatArea from '@/app/(private)/_chat-cpmponents/chat-area'
import { Divider } from 'antd'

export default async function Home() {
	const { userId } = await auth()
	await dbConnect().then(() => console.log('Connected to MongoDB (cached)'))

	return (
		<div className={'flex h-[80vh]'}>
			<Chats />
			<Divider type={'vertical'} className={'h-full border-gray-200'} />
			<ChatArea />
		</div>
	)
}
