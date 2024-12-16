import React from 'react'
import Header from '@/providers/layout-components/header'
import Content from '@/providers/layout-components/content'

function LayoutProvider({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<Header />
			<Content>{children}</Content>
		</div>
	)
}

export default LayoutProvider
