import mongoose, { Schema } from 'mongoose'

const chatSchema = new mongoose.Schema(
	{
		users: {
			type: [Schema.Types.ObjectId],
			ref: 'Users',
			required: true,
		},
		createdBy: {
			type: Schema.Types.ObjectId,
			ref: 'Users',
		},
		lastMessage: {
			type: Schema.Types.ObjectId,
			ref: 'Message',
		},
		isGroupChat: {
			type: Boolean,
			default: false,
		},
		groupName: {
			type: String,
			default: '',
		},
		groupImage: {
			type: String,
			default: '',
		},
		groupBio: {
			type: String,
			default: '',
		},
		groupAdmins: {
			type: [Schema.Types.ObjectId],
			ref: 'Users',
		},
	},
	{ timestamps: true }
)

export default mongoose.models.Chat || mongoose.model('Chats', chatSchema)
