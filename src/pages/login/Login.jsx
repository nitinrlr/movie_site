import "./Login.css";
import {Link} from "react-router-dom";
import Logo from "../../components/logo/Logo";

const Login = () => {
    return (
        <section className="login-main">
            <div className="login-card">
                <Logo />
                <form>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="you@example.com" />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Password" />
                    <Link to="/login" className="forgot">Forgot Password?</Link>
                    <button type="button" className="sign-in">Sign In</button>
                </form>
                <p className="divider">or</p>
                <p className="signup">
                    Don't have an account? <Link to="/login">Sign Up</Link>
                </p>
            </div>
        </section>
    );
};

export default Login;
