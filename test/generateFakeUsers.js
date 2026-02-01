import { faker } from "@faker-js/faker"

const generateFakeUser = () => {
//    const firstName = faker.person.firstName()
//    const lastName = faker.person.lastName()
  const firstName = "Kayla"
   const lastName = "Martin"
return {
  firstName: firstName,
  lastName: lastName,
  email: faker.internet.email({ firstName, lastName }),
  username: faker.internet.username({ firstName, lastName }),
  password: "test",
  address: {
    street: "17816 N 15th Ave",
    street2: " ",
    city: "Phoenix",
    state: "AZ",
    zip: 85023,
  },
  paymentMethod: {
    cardType: "Visa",
    cardNumber: "1234-5678-6549-9632",
    expirationDate: "01/35",
    ccv: 333,
  },
  billingAddress: {
    street: "17816 N 15th Ave",
    street2: " ",
    city: "Phoenix",
    state: "AZ",
    zip: 85023,
  },
  role: faker.helpers.arrayElement(["User"]),
  cart: [],
  wishList: [],
};
}

export const generateFakeUsers = (length) => {
    const users = []
    Array.from({ length: length }).forEach(() => {
        users.push(generateFakeUser())
    })
    return users
}