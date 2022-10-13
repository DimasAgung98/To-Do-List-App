import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function LoginPage() {
    return (
        <>
            <Navbar />
            <section id='loginpage'>
                <div className='w-100'>
                    <div className='container login-area'>
                        <form method='post' className='row justify-content-center align-items-center'>
                            <div className='wrapper-login border'>
                                <div className='pin-box'>
                                    <input type="number" maxLength={1} />
                                    <input type="number" maxLength={1} />
                                    <input type="number" maxLength={1} />
                                    <input type="number" maxLength={1} />
                                </div>
                                <div className='row align-items-center justify-content-center'>
                                    <button className='mt-4 btn btn-login' type='button'>Login</button>
                                </div>
                            </div>
                            <div className='row text-center mt-3'>
                                <p className='text-muted'>Login by input number</p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default LoginPage