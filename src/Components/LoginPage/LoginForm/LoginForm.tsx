import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Formik, Form, Field} from 'formik';
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import { Button } from '../../UI/Button/Button';
import { Card } from '../../UI/Card/Card';
import styles from './LoginForm.module.css';
import {loginSchema} from '../../../Utility/validationSchema';

interface login{
    email: string,
    pwd: string
}


export const LoginForm: React.FC<any> = (props) => {
    const initValue = {email: '', pwd: ''}
    const [login, setLogin] = useState<login>(initValue)
    const dispatch = useDispatch()

    const handleChange = (event: any) => {
        const stateCopy = {...login, [event.target.id]: event.target.value}
        setLogin(stateCopy)
    }
    const handleSubmit = (value:any) => {
       firebase.auth().signInWithEmailAndPassword(value.email, value.pwd)
        .then((userCredential)=>{
            const user = userCredential.user;
            if(user){dispatch({type: 'LOG-IN/USER', payload: { userId: user.uid, refreshToken: user.refreshToken}})
            firebase.database().ref('/users/' + user.uid).on('value', (snapshot)=>{
                const data = snapshot.val();
                dispatch({type: 'USER/FETCH_DATA', payload: data})
            })
        
                }
            setLogin(initValue)
            
        })
        .catch(error=>{
            alert(error.message)
        })

    }

    return (
    <React.Fragment>
    <Card small={true}>
        <h2 className={styles.Login__Welcome}>Welcome back!</h2>
        <Formik initialValues={login} onSubmit={(value)=>handleSubmit(value)} enableReinitialize={true} validationSchema={loginSchema} validateOnChange>
        {({ errors, touched }) => (
            <Form className={styles.Form}>
                <div className={styles.Input}>
                    <label htmlFor='email'>E-mail</label>
                    <Field type='email' name='email' id='email' placeholder='name@email.com' value={login.email} onChange={handleChange}/>
                    {errors.email && touched.email ? <p>{errors.email}</p> : null}
                </div>
                <div className={styles.Input}>
                    <label htmlFor='pwd'>Password</label>
                    <Field type='password' name='pwd' id='pwd'  placeholder='ooooooo' value={login.pwd} onChange={handleChange}/>
                    {errors.pwd && touched.pwd ? <p>{errors.pwd}</p> : null}
                </div>
                <Button margin={30} type={'submit'}>Login</Button>
            </Form>)}
        </Formik>
    </Card>
    </React.Fragment>)
}