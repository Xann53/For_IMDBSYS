import { NavLink } from 'react-router-dom';

function navigation() {
    return (
        <>
            <nav>
                <NavLink to='/'><button>landing</button></NavLink>
                <NavLink to='register'><button>register</button></NavLink>
                <NavLink to='login'><button>login</button></NavLink>
            </nav>
        </>
    );
}

export default navigation;