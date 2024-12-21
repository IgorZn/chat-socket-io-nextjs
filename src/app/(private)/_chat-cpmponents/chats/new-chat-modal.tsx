import React from 'react'
import { Modal } from 'antd'

function NewChatModal({ showModal, handleCancel }) {
	return (
		<div>
			<Modal title="Basic Modal" open={showModal} onOk={handleCancel} onCancel={handleCancel}>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Modal>
		</div>
	)
}

export default NewChatModal
