import React from 'react'
import { Button } from 'antd'

function ChatHeader(props) {
	return (
		<div className="flex flex-col md:flex-row justify-between">
			<span className={'text-2xl'}>My Chats</span>
			<Button color="default" variant="outlined">
				New Chat
			</Button>
		</div>
	)
}

export default ChatHeader
