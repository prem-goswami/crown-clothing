import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

import { useState } from "react"

import FormInput from "../form-input/form-input.component"

import Button from "../button/button.component"

import './signup-form.scss'

const SignUpForm = () => {

    var [displayName, setName] = useState('')
    var [email, setEmail] = useState('')
    var [password, setPassword] = useState('')
    var [confirmPassword, setConfPswd] = useState('')

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
        if (password !== confirmPassword) {
            alert('password do not match')
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();

        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert('Email already in use')
            }
            else {

                console.log('error occured', error)
            }

        }
    }
    return (
        <div className="sign-up-container">
            <h2>Dont have an Account?</h2>
            <span>Sign up with your email and Password </span>
            <form onSubmit={handelSubmit}>
                <FormInput label="Name" type="text" required onChange={setDisplayName} value={displayName} />
                <FormInput label="Email" type='email' required onChange={setEmailText} value={email} />
                <FormInput label="Password" type='password' required onChange={setPasswordText} value={password} />
                <FormInput label="Confirm Password" type='password' required onChange={setCnfrmPswd} value={confirmPassword} />
                <Button type="submit"> Sign UP</Button>
            </form>
        </div>
    )
}

export default SignUpForm