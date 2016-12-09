export class User {
	private password: string;
	private username: string;

	constructor(username: string, password: string) {
		this.password = password;
		this.username = username;
	}

    getUsername() {
        return this.username;
    }

    getPassword(){
        return this.username;
    }
}
