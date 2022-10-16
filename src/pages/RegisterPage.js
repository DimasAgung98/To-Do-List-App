import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';

function RegisterPage() {
    return (
        <>
            <Navbar />
            <section id='registerpage'>
                <div className='w-100'>
                    <div className='container register-area'>
                        <form method='post' className='row justify-content-center align-items-center'>
                            <div className='wrapper-register border'>
                                <div className='pin-box'>
                                    <input type="text" maxLength={4} id="user_id" name="user_id" placeholder='4-Digit User Id' />
                                </div>
                                <div className='row align-items-center justify-content-center'>
                                    <button className='mt-4 btn btn-login' type='button' >Create Account</button>
                                    <p className='text-center mt-3'>Already have an account ? <NavLink to='/login'>Login</NavLink></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section >
            <Footer />
        </>
    )
}

export default RegisterPage;