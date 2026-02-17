import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signOutUser } from "../../utils/firebase/firebase.utils"

import { useState } from "react"

import FormInput from "../form-input/form-input.component"

import Button from "../button/button.component"

import './signup-form.scss'

const SignUpForm = () => {

    var [displayName, setName] = useState('')
    var [email, setEmail] = useState('')
    var [password, setPassword] = useState('')
    var [confirmPassword, setConfPswd] = useState('')
    var [successMessage, setSuccessMessage] = useState('')
    var [isSigningUp, setIsSigningUp] = useState(false)

    const setDisplayName = (event) => {
        let displayName = event.target.value
        setName(displayName)
    }

    const setEmailText = (event) => {
        let email = event.target.value
        setEmail(email)
    }

    const setPasswordText = (event) => {
        let password = event.target.value
        setPassword(password)
    }

    const setCnfrmPswd = (event) => {
        let confirmPassword = event.target.value
        setConfPswd(confirmPassword)
    }


    const resetFormFields = () => {
        console.log(displayName)
        setName('')
        setEmail('')
        setPassword('')
        setConfPswd('')
    }

    const handelSubmit = async (event) => {
        event.preventDefault()
        if (isSigningUp) return

        setIsSigningUp(true)
        setSuccessMessage('')

        if (password !== confirmPassword) {
            alert('password do not match')
            setIsSigningUp(false)
            return;
        }

        sessionStorage.setItem('isPostSignup', 'true')

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user, { displayName });
            await signOutUser();
            resetFormFields();
            setSuccessMessage('User registered. Proceed to sign in.')

        } catch (error) {
            sessionStorage.removeItem('isPostSignup')
            if (error.code === "auth/email-already-in-use") {
                alert('Email already in use')
            }
            else {

                console.log('error occured', error)
            }

        } finally {
            setIsSigningUp(false)
        }
    }
    return (
        <div className="sign-up-container">
            <h2>Dont have an Account?</h2>
            <span>Sign up with your email and Password </span>
            {successMessage && <span className="success-message">{successMessage}</span>}
            <form onSubmit={handelSubmit}>
                <FormInput label="Name" type="text" required onChange={setDisplayName} value={displayName} />
                <FormInput label="Email" type='email' required onChange={setEmailText} value={email} />
                <FormInput label="Password" type='password' required onChange={setPasswordText} value={password} />
                <FormInput label="Confirm Password" type='password' required onChange={setCnfrmPswd} value={confirmPassword} />
                <Button type="submit" disabled={isSigningUp}>{isSigningUp ? 'Signing Up...' : 'Sign UP'}</Button>
            </form>
        </div>
    )
}

export default SignUpForm