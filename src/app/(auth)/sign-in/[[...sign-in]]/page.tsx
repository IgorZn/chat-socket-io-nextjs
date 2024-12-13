import React from 'react'
import { SignIn } from '@clerk/nextjs'

function Page(props) {
	return (
		<>
			<h1>Welcome back</h1>
			<SignIn path={'/sign-in'} />
		</>
	)
}

export default Page
