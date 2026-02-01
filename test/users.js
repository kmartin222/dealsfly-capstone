import "dotenv/config";
import { faker } from "@faker-js/faker";
import axios from "axios";

const generateFakeUser = () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.firstName();
  return {
    firstName,
    lastName,
    email: faker.internet.email({ firstName, lastName }),
    password: "test",
    cart: [
      {
        img: "",
        name: "",
        text: "",
        type: "",
        size: "",
        color: "",
        gender: "",
        price: 0,
        quantity: 0,
        itemPrice: 0,
      },
    ],
    paymentMethod: {
      cardType: " ",
      cardNumber: " ",
      expirationDate: " ",
      ccv: 0,
      billingAddress: {
        street: " ",
        street2: " ",
        city: " ",
        state: " ",
        zip: 0,
      },
    },
  };
};
const user = generateFakeUser();
console.log("user", user);
 
   const createUser = await axios.post(`${process.env.SERVER_URL}/users`, user);
   console.log("createUser", createUser.data);



// user {
//   firstName: 'Rosa',
//   lastName: 'Hugh',
//   email: 'Rosa_Hugh@gmail.com',
//   password: 'test'
// }
