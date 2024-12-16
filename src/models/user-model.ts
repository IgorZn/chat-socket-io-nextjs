import mongoose from 'mongoose'

const usersSchema = new mongoose.Schema(
	{
		clerkUserId: {
			type: String,
			required: true,
			unique: true,
		},
		userName: {
			type: String,
			required: true,
			unique: true,
		},
		name: {
			type: String,
			required: true,
		},
		profileImage: {
			type: String,
			required: false,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		bio: {
			type: String,
			required: false,
		},
	},
	{
		timestamps: true,
	}
)

export default mongoose.models.Users || mongoose.model('Users', usersSchema)
