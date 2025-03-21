import { z } from "zod";

// Step 1 Schema (Business Details)
export const step1Schema = z.object({
  businessName: z.string().min(2, "Business Name is required"),
  businessEmail: z.string().email("Invalid email"),
  businessPhone: z.string().min(5, "Invalid phone number"),
  businessCategory: z.string().min(2, "Select a category"),
  accountNo: z.string().min(5, "Account Number is required"),
  businessLogo: z.any(),
});

// Step 2 Schema (Contact & Address)
export const step2Schema = z
  .object({
    houseNumber: z.string().min(1, "House Number is required"),
    street: z.string().min(2, "Street is required"),
    city: z.string().min(2, "City is required"),
    state: z.string().min(2, "Select a state"),
    contactName: z.string().min(2, "Contact Name is required"),
    contactEmail: z.string().email("Invalid email"),
    contactPhone: z.string().min(5, "Invalid phone number"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });
