export interface IRegistration {
	email: string;
	password: string;
	confirmPassword: string;
	nickname: string;
}

export interface ILogin {
	nickname: string;
	password: string;
}
