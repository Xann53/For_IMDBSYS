import { NavLink } from 'react-router-dom';
import '../style/StyleSheet.css';

function login() {
    return (
        <div class="logPage">
            <div class="form">
                <div class="loginTextboxArea">
                    <input type="text" placeholder="Username / E-mail Address" class="textbox" />
                    <input type="text" placeholder="Password" class="textbox" />
                    <input type="text" placeholder="Confirm Password" class="textbox" />
                </div>
                <div class="loginButtons">
                    <NavLink to="/"><button class="loginButtons">SUBMIT</button></NavLink>
                    <NavLink to="/"><button class="loginButtons">CANCEL</button></NavLink>
                </div>
            </div>
            <div class="regPageBG" />
            <div class="regPageBGIMG" />
        </div>
    );
}

export default login;