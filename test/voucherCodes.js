import "dotenv/config";
import axios from "axios";

const server = process.env.SERVER_URL || "";
console.log("server", server);

const voucherCodes = () => {
 const vouchers = [
   {
     code: "WELCOME20", // Unique code identifier
     discountType: "PERCENTAGE", // Type of discount is percentage-based
     discountValue: 20, // A 20% discount will be applied
     minimumPurchaseAmount: 50, // Minimum order value to apply the voucher (e.g., $50)
    //  validFrom: new Date("2023-10-26"), // Start date of validity
    //  validTo: new Date("2024-01-31"), // End date of validity
     usageLimitPerCustomer: 1, // Can be used only once per customer
     isRedeemable: true,
   },

   {
     code: "FREESHIP",
     discountType: "FIXED_AMOUNT", // Discount is a fixed amount
     discountValue: 10, // A $10 discount will be applied to shipping. No minimum purchase required!
     minimumPurchaseAmount: null,
    //  validFrom: new Date("2023-10-26"),
    //  validTo: new Date("2023-12-31"),
     usageLimitPerCustomer: Infinity, // Can be used unlimited times per customer
     isRedeemable: true,
   },
 ];

  vouchers.map(async (voucher) => {
    const response = await axios.post(`${server}/voucher`, voucher);
    console.log(response.data);
  });
};
voucherCodes();
