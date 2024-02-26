import { z } from 'zod'

export const GuestbookEntry = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  message: z.string().min(1, { message: 'Message is required' }), 
})

export const EmailLoginFormData = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
});