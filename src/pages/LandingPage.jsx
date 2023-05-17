import { NavLink } from 'react-router-dom';
import '../style/StyleSheet.css';

function landing() {
    return (
        <>
            <div class="landingButtons">
                <div class="buttonMiddle">
                    <NavLink to="register"><button class="landingButtons">SIGN UP</button></NavLink>
                    <NavLink to="login"><button class="landingButtons">LOGIN</button></NavLink>
                </div>
            </div>
        </>
    );
}

export default landing;