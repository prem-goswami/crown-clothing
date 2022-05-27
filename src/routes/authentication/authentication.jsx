
import SignInForm from '../../components/signIn/sign-in-form.component';

import SignUpForm from '../../components/signUp/sign-up-form.component';
import './authentication.styles.scss'


const Authentication = () => {
    

    return (
        <div className='authentication-container'>
            <SignInForm/>
            <SignUpForm/>
        </div>
    );
};

export default Authentication;