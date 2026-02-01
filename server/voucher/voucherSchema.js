import mongoose from "mongoose";
const { Schema } = mongoose

const voucherSchema = new Schema({
   // Example using Mongoose (a popular MongoDB Object Modeling tool)
 code: { // Unique identifier 
	type: String,
	required: true,
	unique: true,
	trim: true // Remove leading/trailing whitespace for consistency
  }, 

  discountType: { // Type of discount applied (percentage or fixed amount)
	type: String,
	enum: ['PERCENTAGE', 'FIXED_AMOUNT'], // Use an enum for better data integrity and validation
	required: true, 
	default: 'PERCENTAGE' // Default to percentage if not specified
  },

  discountValue: { // Value of the discount (e.g., 10% or $25)
	type: Number, 
	required: true, 
   validate: [function(value){return value >= 0; }], // Ensure discount is non-negative
  },

  minimumPurchaseAmount: { // Optional minimum order value required to apply the voucher (Number)
	type: Number,      
	default: null, 
   // validate: [function(value){ return !isNaN(value);}], // Optionally validate that it's a number
  },

  maximumDiscountValue: { 
	type: Number,       // Optional maximum cap on the discount amount (Number) 
	default: null      // No limit by default   
   // validate: [function(value){ return !isNaN(value);}], // Optionally validate that it's a number     
  },

//   validFrom: { // Start date of voucher validity (Date object or ISO string format)
// 	type: Date, 
// 	required: true      
//   },

//   validTo: {   // End date of voucher validity (Date object or ISO string format)
// 	type: Date,     
// 	required: true       
//   },

  usageLimitPerCustomer:{ // Maximum times a customer can use this voucher 
	type: Number,     
	default: Infinity // Can be used indefinitely by default.   
  },

// Need to track on the User
  numberOfUsesRemaining:{ // How many more times the voucher can be redeemed (starts at totalUsageLimit) 
	type: Number,      
	default: Infinity ,   // Default to unlimited use           
  },
  isRedeemable:{ // Indicates if the voucher is still redeemable. Set to false when a customer has used it or it's expired 
	type: Boolean,     
	default: true       
  }

});



export default voucherSchema