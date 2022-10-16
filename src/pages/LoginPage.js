import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function LoginPage() {
    const navigate = useNavigate();
    //USESTATE USERID
    const [userId, setUserId] = useState('');
    //HANDLE LOGIN
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            if (!userId) {
                Swal.fire({
                    icon: 'error',
                    title: 'ALERT',
                    text: 'Please make sure to fill 4 digit user id',
                    confirmButtonColor: '#494ba5',
                })
                return
            }
            axios.post('', {
                user_id: userId
            }).then(res => {
                if (res.data.message === 'user not found') {
                    Swal.fire({
                        icon: 'error',
                        title: 'ALERT',
                        text: 'User not Registered',
                        confirmButtonColor: '#494ba5',
                    })
                } else {
                    localStorage.setItem('token', JSON.stringify(res.data.result.access_token))
                    Swal.fire({
                        icon: 'success',
                        title: 'WELCOME',
                        text: 'Login Success!',
                        confirmButtonColor: '#494ba5',
                    })
                    navigate('/home');
                }
            })
        }
        catch (err) {
            alert(err.toString());
            console.log(err);
        }
    }

    return (
        <>
            <Navbar />
            <section id='loginpage'>
                <div className='w-100'>
                    <div className='container login-area'>
                        <form method='post' className='row justify-content-center align-items-center'>
                            <div className='wrapper-login border'>
                                <div className='pin-box'>
                                    <input type="text" maxLength={4} id="user_id" name="user_id" placeholder='4-Digit User Id' value={userId} onChange={(e) => setUserId(e.target.value)} />
                                </div>
                                <div className='row align-items-center justify-content-center'>
                                    <button className='mt-4 btn btn-login' type='button' onClick={handleLogin}>Login</button>
                                    <p className='text-center mt-3'>Don't have an account ? <NavLink to='/register'>Register</NavLink></p>
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

export default LoginPage