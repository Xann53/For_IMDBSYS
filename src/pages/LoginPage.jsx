import { NavLink } from 'react-router-dom';

function login() {
    return (
        <>
            <div>
                <NavLink to="/"><button>CANCEL</button></NavLink>
            </div>
        </>
    );
}

export default login;