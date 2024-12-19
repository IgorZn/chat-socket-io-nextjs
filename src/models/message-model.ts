import mongoose from 'mongoose'

const chatSchema = new mongoose.Schema(
	{
		chat: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Chat',
			required: true,
		},
		sender: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Users',
			required: true,
		},
		text: {
			type: String,
			default: '',
		},
		image: {
			type: String,
			default: '',
		},
		readBy: {
			type: [mongoose.Schema.Types.ObjectId],
			ref: 'Users',
		},
		unreadCount: {
			type: Object,
			default: {},
		},
	},
	{ timestamps: true }
)

const ChatModel = mongoose.models.Chat || mongoose.model('Chat', chatSchema)

export default ChatModel
