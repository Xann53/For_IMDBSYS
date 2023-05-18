import { NavLink } from 'react-router-dom';
import '../style/StyleSheet.css';

function register() {
    return (
        <div class="regPage">
            <div class="form">
                <div class="textboxArea">
                    <input type="text" placeholder="First Name" class="textbox" />
                    <input type="text" placeholder="Last Name" class="textbox" />
                    <input type="text" placeholder="Username" class="textbox" />
                    <input type="text" placeholder="E-mail Address" class="textbox" />
                    <input type="text" placeholder="Password" class="textbox" />
                    <input type="text" placeholder="Confirm Password" class="textbox" />
                </div>
                <div class="registerButtons">
                    <NavLink to="/"><button class="registerButtons">SUBMIT</button></NavLink>
                    <NavLink to="/"><button class="registerButtons">CANCEL</button></NavLink>
                </div>
            </div>
            <div class="regPageBG" />
            <div class="regPageBGIMG" />
        </div>
    );
}

export default register;