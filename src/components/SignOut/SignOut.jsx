import { logout } from "../../services/auth"

export const SignOut = () => <button onClick={logout}>Sign Out</button>
