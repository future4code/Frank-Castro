export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export type user = {
    id: string;
    name: string;
	email: string;
	password: string;
	role: string;
}