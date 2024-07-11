class Address {
	constructor(firstName, lastName) {
		this.firstName = firstName
		this.lastName = lastName
	}
}

let customer = new Address("Robert", "Oliver")

for (let detail in customer) {
	console.log(detail)
}
