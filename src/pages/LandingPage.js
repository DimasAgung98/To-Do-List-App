import React from 'react';
import { NavLink } from 'react-router-dom';

function LandingPage() {
    return (
        <>
            <section id='landingpage'>
                <div className='container landing-area'>
                    <div className='row'>
                        <div className=' col-6 mx-auto wrapper-landing border'>
                            <h1 className='text-center'>TO DO APP</h1>
                            <div className='row align-items-center justify-content-center'>
                                <NavLink className='text-center' to='/login'><button className='mt-4 btn btn-login' type='button' >Start</button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default LandingPage