import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function RegisterPage() {
    const navigate = useNavigate();
    //USESTATE USERID
    const [userId, setUserId] = useState('');
    //HANDLE REGISTER
    const handleRegister = async (e) => {
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
            axios.post('http://localhost:4000/register', {
                pin_id: userId
            }).then(res => {
                if (res.data.message === 'Pin is already registered') {
                    Swal.fire({
                        icon: 'error',
                        title: 'ALERT',
                        text: 'Pin Already Registered',
                        confirmButtonColor: '#dc3545',
                    })
                }
                else {
                    Swal.fire({
                        icon: 'success',
                        title: 'REGISTER SUCCESSFULLY',
                        confirmButtonColor: '#dc3545',
                    })
                    navigate('/login')
                }
            })
        } catch (err) {
            alert(err.toString());
            console.log(err);
        }
    }
    return (
        <>
            <Navbar />
            <section id='registerpage'>
                <div className='w-100'>
                    <div className='container register-area'>
                        <form method='post' className='row justify-content-center align-items-center'>
                            <div className='wrapper-register border'>
                                <div className='pin-box'>
                                    <input type="text" maxLength={4} id="pin_id" name="pin_id" placeholder='4-Digit User Id' value={userId} onChange={(e) => setUserId(e.target.value)} />
                                </div>
                                <div className='row align-items-center justify-content-center'>
                                    <button className='mt-4 btn btn-login' type='button' onClick={handleRegister} >Create Account</button>
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