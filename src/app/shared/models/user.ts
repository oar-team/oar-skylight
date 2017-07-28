export class User {
	private password: string;
	 username: string;

	constructor(username: string, password: string) {
		this.password = password;
		this.username = username;
	}

    getUsername() {
        return this.username;
    }

    getPassword(){
        return this.password;
    }
}
