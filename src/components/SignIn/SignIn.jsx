import { loginWithGoogle } from "../../services/auth"
import './SignIn.css'
import { ReactComponent as SignInGoogle } from '../../assets/SignInGoogle.svg';

export const SignIn = () => <SignInGoogle onClick={loginWithGoogle} className='loginButton'/>
