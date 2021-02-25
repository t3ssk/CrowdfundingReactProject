import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { Formik, Form, Field } from 'formik';
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import { Button } from '../../UI/Button/Button';
import { Card } from '../../UI/Card/Card';
import styles from './SignInForm.module.css';
import {signUpSchema} from '../../../Utility/validationSchema';

interface user {email: string, pwd: string, usrname: string, fname: string, lname: string, address: string, city: string, zip: string, phone:string}


export const SignInForm: React.FC<any> = (props) => {
    const initValues = {email: '', pwd: '', usrname: '', fname: '', lname: '', address: '', city: '', zip: '', phone:''};
    const [user, setUser] = useState<user>(initValues)
    const dispatch = useDispatch()
    const [error, setError] = useState<string|null>(null)
    
    const handleChange = (event: any) => {
        const val = event.target.value;
        const id = event.target.id
        const userCopy = {...user, [id]: val}
        setUser(userCopy)
    }

    const handleSubmit = (value:user) => {
        firebase.auth().createUserWithEmailAndPassword(value.email, value.pwd).then((userCredential)=>{
            const user = userCredential.user
            if(user){
                const userData = {
                    username: value.usrname,
                    name: value.fname,
                    lastName: value.lname,
                    userId: user.uid,
                    address: value.address,
                    city: value.city,
                    zip: value.zip,
                    phone: value.phone,
                    bookmarked: false
                }

                dispatch({type: 'LOG-IN/USER', payload: { userId: user.uid, refreshToken: user.refreshToken}})
           firebase.database().ref('users/'+ user.uid).set(userData)
           dispatch({type: 'USER/FETCH_DATA', payload: userData})
        }
            setUser(initValues)

        }).catch((error)=>{
            setError(error.message)
        })
        
    }
    
    return(<Card small={true}>
        {}
         <h2 className={styles.Signin__Welcome}>Welcome to the club!</h2>
         {error && <p>{error}</p>}
        <Formik initialValues={user} onSubmit={(value)=>handleSubmit(value)} enableReinitialize={true} validationSchema={signUpSchema} validateOnChange> 
        {({ errors, touched }) => (
        <Form className={styles.Form}>
            <div className={styles.Input}>
                <label htmlFor='email'>E-mail</label>
                <Field type='email' id='email' name='email' placeholder='eg. name@email.com' value={user.email}
                onChange={handleChange}/>
                 {errors.email && touched.email ? <p>{errors.email}</p> : null}
            </div>
            <div className={styles.Input}>
                <label htmlFor='pwd'>Password</label>
                <Field type='password' id='pwd' name='pwd' placeholder='*******' value={user.pwd}
                onChange={handleChange}/>
                {errors.pwd && touched.pwd ? <p>{errors.pwd}</p> : null}
            </div>
            <div className={styles.Input}>
                <label htmlFor='usrname'>Username</label>
                <Field type='text' id='usrname' name='usrname' placeholder='eg. Mrs.Doom500' value={user.usrname}
                onChange={handleChange}/>
                {errors.usrname && touched.usrname ? <p>{errors.usrname}</p> : null}
            </div>

            <div className={styles.Input}>
                <label htmlFor='fname'>First name</label>
                <Field type='text' id='fname' name='fname' placeholder='eg. Jane' value={user.fname}
                onChange={handleChange}/>
                {errors.fname && touched.fname ? <p>{errors.fname}</p> : null}
            </div>
            <div className={styles.Input}>
                <label htmlFor='lname'>Last name</label>
                <Field type='text' id='lname' name='lname' placeholder='eg. Jane' value={user.lname}
                onChange={handleChange}/>
                {errors.lname && touched.lname ? <p>{errors.lname}</p> : null}
            </div>
            <div className={styles.Input}>
                <label htmlFor='address'>Address line 1</label>
                <Field type='text' id='address' name='address' placeholder='eg. Prazska 3' value={user.address}
                onChange={handleChange}/>
                {errors.address && touched.address ? <p>{errors.address}</p> : null}
            </div>
            <div className={styles.Input}>
                <label htmlFor='city'>City</label>
                <Field type='text' id='city' name='city' placeholder='eg. Prague' value={user.city}
                onChange={handleChange}/>
                {errors.city && touched.city ? <p>{errors.city}</p> : null}
            </div>
            <div className={styles.Input}>
                <label htmlFor='zip'>ZIP code</label>
                <Field type='text' id='zip' name='zip' placeholder='eg. 13000' value={user.zip}
                onChange={handleChange}/>
                {errors.zip && touched.zip ? <p>{errors.zip}</p> : null}
            </div>
            <div className={styles.Input}>
                <label htmlFor='ziphonep'>ZIP code</label>
                <Field type='text' id='phone' name='phone' placeholder='eg. 603254123' value={user.phone}
                onChange={handleChange}/>
                {errors.phone && touched.phone ? <p>{errors.phone}</p> : null}
            </div>

            <Button margin={30} type={'submit'}>Sign me up!</Button>
        </Form>)}
        </Formik> 
    </Card>)
}
