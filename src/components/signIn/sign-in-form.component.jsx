import {createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils"

import { useState } from "react"

import FormInput from "../form-input/form-input.component"

import Button from "../button/button.component"

import './signIn-form.scss'

const SignInForm = () => {

    var [email, setEmail] = useState('')
    var [password, setPassword] = useState('')


    const setEmailText = (event) => {
        let email = event.target.value
        setEmail(email)
    }

    const setPasswordText = (event) => {
        let password = event.target.value
        setPassword(password)
    }



    const resetFormFields = () => {
        setEmail('')
        setPassword('')
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user)
    };

    const handelSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password)
            console.log(response)
            resetFormFields();

        } catch (error) {
            console.log(error)
            switch(error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect Password')
                    break
                case 'auth/user-not-found':
                    alert('Invalid User')
                    break
                default:
                    console.log(error)
            }
        }
    }
    return (
        <div className="sign-up-container">
            <h2>Already have an Account?</h2>
            <span>Sign up with your email and Password </span>
            <form onSubmit={handelSubmit}>
                <FormInput label="Email" type='email' required onChange={setEmailText} value={email} />
                <FormInput label="Password" type='password' required onChange={setPasswordText} value={password} />
                <div className="buttons-container">
                    <Button type="submit"> Sign In</Button>
                    <Button type="button" onClick={signInWithGoogle} buttonType="google"> Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm