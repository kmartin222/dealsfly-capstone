# E-commerce Website Capstone Project - README

## Description: 

This project aims to build a functional e-commerce website using React, Redux Toolkit, and MongoDB.

## The website will feature:

- [x] Product Catalog: A dynamic display of products with CRUD (Create, Read, Update, Delete) functionality.

- [X] User Accounts: Users can create accounts, update their profiles, and archive their orders. Cart management is integrated within the user schema.

- [X] Full CRUD Operations: All aspects of the website will have full CRUD capabilities for efficient data management.

### Technology Stack:

- React: Frontend framework for building interactive user interfaces.
- Redux Toolkit: State management library for handling application state efficiently.
- MongoDB: NoSQL database for storing product and user information.


## Tasks & ToDos:

### Phase 1 - Backend Development:

- [x] MongoDB Setup: Configure a MongoDB instance and create necessary collections for products, users, and orders. Define schemas with appropriate fields for each entity.

- [x] API Routes (Node.js/Express): Develop RESTful API endpoints to handle CRUD operations:

- POST /products: Create new product entries
- GET /products: Retrieve all products
- GET /products/:id: Get a specific product by ID
- PUT /products/:id: Update an existing product<br>
... (similar for users, orders)


### Phase 2 - Frontend Development:

- [x] React Component Structure: Create reusable components:
- - [x]  ProductList: Display products from the API. Implement pagination and filtering.
- - [x]  ProductDetail: Show individual product information with images and descriptions.
- - [x]  UserDashboard: Display user profile, orders, cart management features.

- [x]  Redux Toolkit Setup:

- - [x]  Create reducers to manage application state (products, user data).
- - [x]  Define actions for API calls and state updates.

- [x] User Interface Components: Create components for:

- - [x] UserDashboard: Display the logged-in user’s profile, orders history.

- - [x] CartComponent: Show items in the user’s cart and allow them to be removed/updated

- - [x] (Optional) Checkout Component: Implement a checkout flow.

### Phase 3 - Integration & Functionality:

- [x] Data Fetching: Implement fetch or axios to communicate with the backend API endpoints and fetch product and user data dynamically.

- [x] User Authentication/Authorization: Integrate user login, registration, and authentication using a suitable library (e.g., JWT).

- - [x]  Securely store sensitive information like passwords.
- - [ ]  Implement role-based access control if needed.


### Continuous Improvement & Todo List:

- [ ] Add Search Functionality: Implement a robust search bar for products based on keywords and filters.

- [ ] Voucher Code: Implement a voucher code to use at Checkout in cart

- [ ] Payment Gateway Integration: Integrate a secure payment gateway (e.g., Stripe) for order processing.

### Important Notes:

Stay organized! Use Git for version control throughout development.
Comment your code extensively! Make it understandable to others (and yourself in the future).
Please update this README with additional details and specific tasks as you progress through the project.