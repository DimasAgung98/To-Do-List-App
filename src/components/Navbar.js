import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

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
        navigate('/')
    }
    return (
        <>
            <section id='Navbar'>
                <nav className='navbar navbar-light bg-nav px-5'>
                    <div className='d-flex align-items-center'>
                        <h1 className='title-nav'>to do list app</h1>
                    </div>
                    <div className='button-area'>
                        <div className='btn-logout' onClick={handleLogout}>Logout</div>
                        <div className='btn-logout'>Register</div>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default Navbar;