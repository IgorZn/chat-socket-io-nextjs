import React from 'react'
import { Button, Dropdown, message } from 'antd'
import type { MenuProps } from 'antd'
import { DownOutlined, UsergroupAddOutlined, UserOutlined } from '@ant-design/icons'
import NewChatModal from '@/app/(private)/_chat-cpmponents/chats/new-chat-modal'

function ChatHeader(props) {
	const [showModal, setShowModal] = React.useState(false)

	const items: MenuProps['items'] = [
		{
			label: 'New private chat',
			key: '1',
			icon: <UserOutlined />,
			onClick: () => setShowModal(true),
		},
		{
			label: 'New group chat',
			key: '2',
			icon: <UsergroupAddOutlined />,
			onClick: () => setShowModal(true),
		},
	]

	const handleMenuClick: MenuProps['onClick'] = e => {
		message.info({
			duration: 1,
			content: 'Click on menu item.',
		})
		console.log('click', e)
	}

	const handleCancel = () => {
		setShowModal(false)
	}

	const openModal = () => {
		setShowModal(true)
	}

	const menuProps = {
		items,
		onClick: handleMenuClick,
	}

	return (
		<>
			<div className="flex flex-col md:flex-row justify-between items-center">
				<h1 className={'text-2xl'}>My Chats</h1>
				<div>
					<Dropdown.Button menu={menuProps} size={'small'}>
						New Chat
					</Dropdown.Button>
				</div>
			</div>
			<NewChatModal showModal={showModal} handleCancel={handleCancel} />
		</>
	)
}

export default ChatHeader
