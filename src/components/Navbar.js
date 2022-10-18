import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { NavLink } from 'react-router-dom';

function Navbar() {

    const navigate = useNavigate();

    //HANLDE LOGOUT
    const handleLogout = () => {
        Swal.fire({
            icon: 'success',
            title: 'Log Out Success',
            showConfirmButton: false,
            timer: 1500
        })
        localStorage.clear('token')
        navigate('/')
    }
    return (
        <>
            <section id='Navbar'>
                <nav className='navbar navbar-light bg-nav px-5'>
                    <div className='d-flex align-items-center'>
                        <NavLink className='title-nav' to='/'><h1>to do list app</h1></NavLink>
                    </div>
                    <div className='button-area'>
                        <div className='btn-logout' onClick={handleLogout}>Logout</div>
                        <NavLink to='/register'><div className='btn-logout'>Register</div></NavLink>
                        <NavLink to='/login'><div className='btn-logout'>Login</div></NavLink>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default Navbar;