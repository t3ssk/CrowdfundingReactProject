import * as Yup from 'yup';

export const signUpSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email!').required(),
    usrname: Yup.string()
        .min(5, 'Your username is too short!')
        .max(20, 'Your username is too long!')
        .required(),
    pwd: Yup.string()
        .min(5, 'Password too weak')
        .required(),
    fname: Yup.string()
        .min(3, 'Your first name is too short!')
        .max(20, 'Your first name is too long!')
        .required(),
    lname: Yup.string()
        .min(3, 'Your last name is too short!')
        .max(20, 'Your last name is too long!')
        .required(),
    address: Yup.string()
        .min(10, 'Did you fill in your adress with house number?').required(),
    city: Yup.string()
        .min(2, 'Please use whole name of the city where you live').required(),
    zip: Yup.string()
        .min(5, 'Please use whole postal code')
        .max(5, 'The zip code should be without any spaces').required(),
    phone: Yup.string()
        .min(9, 'Please use your whole telephone number')
        .max(13, 'Telephone number should be without spaces').required()})

export const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email!').required(),
    pwd: Yup.string()
        .min(5, 'Password too weak')
        .required(),
})

