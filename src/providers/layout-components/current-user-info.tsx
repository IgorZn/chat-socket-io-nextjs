import React from 'react'
import { UserType } from '@/interfaces/'
import { Button, Divider, Drawer } from 'antd'
import { useClerk } from '@clerk/nextjs'
import { useSelector } from 'react-redux'

function CurrentUserInfo({
	showCurrentUserInfo,
	setShowCurrentUserInfo,
}: {
	currentUser: UserType
	showCurrentUserInfo: boolean
	setShowCurrentUserInfo: React.Dispatch<React.SetStateAction<boolean>>
}) {
	const { currentUserData }: string = useSelector(state => state.user)
	const currentUser = { ...currentUserData }

	const [file, setFile] = React.useState(null)
	const clerk = useClerk()
	const getProperty = (key: string, value: string) => {
		return (
			<div className={'flex flex-col space-y-1 justify-start'}>
				<div className={'text-xl font-medium'}>{key}</div>
				<div>{value}</div>
			</div>
		)
	}
	return (
		<Drawer
			title={currentUser.name}
			placement="right"
			open={showCurrentUserInfo}
			onClose={() => setShowCurrentUserInfo(false)}>
			<div className={'flex flex-col space-y-2 j'}>
				{/* Profile image */}
				<div className={'flex flex-col justify-center items-center'}>
					<img
						src={currentUser.profileImage}
						className={'w-28 h-28 rounded-full'}
						alt={'profile'}
						width={'1000px'}
						height={'1000px'}
					/>
					<span className={'text-gray-600 text-xl font-light mt-5'}>Change profile image</span>
					<Divider className={'my-5 border-gray-400'} />
				</div>

				{/* User info */}
				<div className={'flex flex-col justify-start space-y-4'}>
					{getProperty('User Id', currentUser._id)}
					{getProperty('Joined on', new Date(currentUser.createdAt).toLocaleString())}
					<Divider className={'my-5 border-gray-400'} />
				</div>

				{/* Logout */}
				<div className={''}>
					<Button
						className={'w-full mt-5'}
						onClick={() => {
							clerk.signOut()
							setShowCurrentUserInfo(false)
						}}
						block>
						Logout
					</Button>
				</div>
			</div>
		</Drawer>
	)
}

export default CurrentUserInfo
