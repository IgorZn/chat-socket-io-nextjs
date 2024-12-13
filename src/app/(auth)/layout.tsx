import React from 'react'
import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs/server'

async function Layout({ children }: { children: React.ReactNode }) {
	const { userId, redirectToSignIn } = await auth()

	if (userId) redirect('/')

	return <div className={'flex flex-col gap-2 items-center mt-20'}>{children}</div>
}

export default Layout
