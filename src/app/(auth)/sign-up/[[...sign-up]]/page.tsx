import React from 'react'
import { SignUp } from '@clerk/nextjs'

function Page(props) {
	return <SignUp path={'/sign-up'} />
}

export default Page
