import express from "express"
import userCreate from "./userCreate.js"
import userLogin from "./userLogin.js"
import userMe from "./userMe.js"
import userLogout from "./userLogout.js"
import userGetOne from "./userGetOne.js"
import userUpdate from "./userUpdate.js"

const userIndex = express.Router()

userIndex.post("/", userCreate)
userIndex.post("/login", userLogin)
userIndex.get("/me/:token", userMe)
userIndex.get("/logout/:token", userLogout)
// Update one user
userIndex.put("/update/:id", userUpdate)
// Get one
userIndex.get("/details/:id", userGetOne)
// userIndex.put("/wishlist/:id", userUpdateWishList)
// userIndex.put("/cart/:id", userUpdateCart)

export default userIndex