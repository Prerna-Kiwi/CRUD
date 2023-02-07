import * as yup from 'yup';
export const reviewSchema = yup.object({
  name: yup.string().required().min(4),
  email: yup.string().email().required(),
  status: yup.string().required(),
  gender: yup.string().required('Please select a gender'),
});
export const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup
  .string()
  .min(8, 'Password must be 8 characters long')
  .matches(/[0-9]/, 'Password requires a number')
  .matches(/[a-z]/, 'Password requires a lowercase letter')
  .matches(/[A-Z]/, 'Password requires an uppercase letter')
  .matches(/[^\w]/, 'Password requires a symbol'),
});

