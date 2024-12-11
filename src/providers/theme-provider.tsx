'use client'
import React from 'react'
import { ConfigProvider } from 'antd'

function ThemeProvider({ children }: { children: React.ReactNode }) {
	return (
		<>
			<ConfigProvider
				theme={{
					token: {
						// Seed Token
						colorPrimary: '#0c4f95',
						// borderRadius: 2,

						// Alias Token
						// colorBgContainer: '#f6ffed',
					},
					components: {
						Button: {
							controlHeight: 40,
							boxShadow: 'none',
							controlOutline: 'none',
						},
					},
				}}>
				{children}
			</ConfigProvider>
		</>
	)
}

export default ThemeProvider
