export class Greeter {
	private greeting: string;

	constructor(message: string) {
		this.greeting = message;
	}

	greet(): string {
		return `Bonjour, ${this.greeting}!`;
	}
}
