import React, {useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
 
const Nav=()=>{
    const auth= localStorage.getItem('user');
    const navigate = useNavigate();
    const logout =()=>{
        localStorage.clear();
        navigate('/SignUp')
    }
    return(
        <div>
            <img
            alt='logo'
            className='logo'
            src='https://img.freepik.com/free-vector/supermarket-logo-concept_23-2148467758.jpg?w=740&t=st=1688322329~exp=1688322929~hmac=57f0200155744d23a5799809adfca01f4a3d0f787b60e524bf4ecb57fc3d3e8c'/>
           {auth ? <ul className="nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Products</Link></li>
                <li><Link to="/update">Update Products</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/SignUp">Logout  ({JSON.parse(auth).name})</Link></li>
            </ul>
            :
            <ul className="nav-ul nav-right">
            <li><Link to="/signUp">Sign Up</Link></li>
            <li><Link to="/login">Login</Link></li>
            </ul>
}
        </div>
    )
}

export default Nav;