import { NavLink } from 'react-router-dom';
import '../style/StyleSheet.css';

function Landing() {
    return (
        <>
            <div class="landingButtons">
                <div class="buttonMiddle">
                    <NavLink to="register"><button class="landingButtons">SIGN UP</button></NavLink>
                    <NavLink to="login"><button class="landingButtons">LOGIN</button></NavLink>
                </div>
            </div>
            <div class="landingBody">
                <h1 class="landingBody">E-WAYSTE</h1>
                <p class="landingBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus, nunc ac ornare interdum, dui nisl tempus massa, sit amet malesuada diam turpis id purus. Ut dapibus, enim nec gravida fermentum, mauris lorem porta erat, sit amet finibus odio est ut est. Pellentesque feugiat nunc vitae felis euismod gravida. Donec id ex non ipsum varius aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur tincidunt vel purus id tristique. Morbi est magna, efficitur eu dapibus et, mollis vitae dui. Phasellus quis dolor quis ante volutpat luctus nec ac sem. Morbi et blandit purus, eu malesuada elit. Morbi interdum viverra leo, vitae bibendum enim tincidunt et. Maecenas nulla nisl, hendrerit non pellentesque id, cursus et lacus. Maecenas tincidunt pulvinar luctus. Vestibulum porttitor ipsum nec leo posuere viverra. Suspendisse non enim nibh. Nunc lobortis vehicula varius. Nulla eu lorem libero.</p>
                <div class="blurrImg" />
            </div>
            <div class="landingG1"></div>
            <div class="landingBG" />
        </>
    );
}

export default Landing;