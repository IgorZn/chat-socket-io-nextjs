export interface UserType {
	id: string
	clerkUserId: string
	userName: string
	name: string
	profileImage: string
	email: string
	createdAt: string
	updatedAt: string
}

export interface ChatType {
	_id: string
	users: UserType[]
	createdBy: UserType
	lastMessage: MessageType
	isGroupChat: boolean
	groupName: string
	groupImage: string
	unreadCount: number
	groupBio: string
	groupAdmins: UserType[]
	createdAt: string
	updatedAt: string
}

export interface MessageType {
	_id: string
	chat: ChatType
	sender: UserType
	text: string
	image: string
	readBy: UserType[]
	unreadCount: object
	createdAt: string
	updatedAt: string
}
