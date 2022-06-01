import { BaseButton, GoogleSignIn, Inverted } from './button-styles.jsx'

export const ButtonTypes = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted'
}

const getButton = (buttonType = ButtonTypes.base) => (
    {
        [ButtonTypes.base]: BaseButton,
        [ButtonTypes.google]: GoogleSignIn,
        [ButtonTypes.inverted]: Inverted
    }[buttonType]
)


const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType)
    return <CustomButton {...otherProps}    >
        {children}
    </CustomButton>

}

export default Button;