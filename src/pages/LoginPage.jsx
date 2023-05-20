import { NavLink } from 'react-router-dom';
import '../style/StyleSheet.css';

function Login() {
    return (
        <div class="logPage">
            <div class="form">
                <div class="loginTextboxArea">
                    <input type="text" placeholder="Username / E-mail Address" class="textbox" />
                    <input type="password" placeholder="Password" class="textbox" />
                </div>
                <div class="loginButtons">
                    <NavLink to="/profile"><button class="loginButtons">SUBMIT</button></NavLink>
                    <NavLink to="/"><button class="loginButtons">CANCEL</button></NavLink>
                </div>
            </div>
            <div class="note">
                <h1>NOTE: THIS PAGE DOES NOT WORK YET</h1>
                <h2>IN ORDER TO PROCEED TO THE USER PROFILE LIST PAGE, JUST CLICK ON THE "SUBMIT" BUTTON</h2>
                <h2>IN ORDER TO RETURN TO THE LANDING PAGE, JUST CLICK ON THE "CANCEL" BUTTON</h2>
            </div>
            <div class="regPageBG" />
            <div class="regPageBGIMG" />
        </div>
    );
}

export default Login;