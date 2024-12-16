'use client'
import React, { useEffect } from 'react'
import { ClerkLoaded, ClerkLoading, useAuth, UserButton, useUser } from '@clerk/nextjs'
import { userLookupDb } from '@/srv-actions/userLookup'
import { UserType } from '@/interfaces'
import CurrentUserInfo from '@/providers/layout-components/current-user-info'
import { Spin } from 'antd'

function Header(props) {
	const [user, setUser] = React.useState<UserType>(null)
	const [showCurrentUserInfo, setShowCurrentUserInfo] = React.useState(false)

	const { isLoaded, userId, sessionId, getToken } = useAuth()
	const { isLoaded: isUserLoaded, isSignedIn, user: currentUser } = useUser()
	console.log('useAuth>>>', isLoaded, userId, sessionId)
	console.log('useUser>>>', isUserLoaded, isSignedIn, currentUser)
	console.log('user>>>', user)

	useEffect(() => {
		const fetchUser = async () => {
			if (userId) {
				const userData = await userLookupDb(userId)
				if (typeof userData === 'string') {
					setUser(JSON.parse(userData))
				}
			}
		}

		fetchUser()
	}, [isUserLoaded])

	return (
		<div>
			{user && sessionId ? (
				<div className={'bg-gray-100 w-full p-5 flex justify-between'}>
					<h1 className={'text-xl font-medium'}>Chat</h1>
					<div className={'justify-center text-center flex space-x-1 bg-emerald-400 border rounded-xl p-2'}>
						<span
							className={'text-xl font-light px-1 hover:cursor-pointer'}
							onClick={() => setShowCurrentUserInfo(true)}>
							{user?.name}
						</span>

						{isLoaded ? (
							<UserButton />
						) : (
							<div className={'h-full justify-center items-center'}>
								<Spin size="small" />
							</div>
						)}
					</div>
				</div>
			) : (
				''
			)}

			{showCurrentUserInfo ? (
				<CurrentUserInfo
					currentUser={user}
					showCurrentUserInfo={showCurrentUserInfo}
					setShowCurrentUserInfo={setShowCurrentUserInfo}
				/>
			) : (
				''
			)}
		</div>
	)
}

export default Header
