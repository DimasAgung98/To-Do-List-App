import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MdSystemUpdateAlt, MdDeleteForever, MdOutlineDoneAll } from 'react-icons/md';
import Swal from 'sweetalert2';

function ToDo() {
    //INITIATE NAVIGATE
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            Swal.fire({
                icon: 'error',
                title: 'LOGIN FIRST',
                confirmButtonColor: '#494ba5',
            })
            navigate('/login')
        } else {
            navigate('/home')
        }
    }, [navigate])

    //HANDLE CREATE
    //HANDLE READ
    //HANDLE UPDATE
    //HANDLE DELETE
    const handleDelete = () => {
        Swal.fire({
            title: 'Do you want to delete the task ?',
            showCancelButton: true,
            confirmButtonText: 'Yes, Delete it',
            confirmButtonColor: '#d9534f'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Task Has Been Deleted', '', 'success')
            }
        })
    }
    //HANDLE FINISHED
    const handleFinished = () => {
        Swal.fire({
            title: 'Do you want to finish the task ?',
            showCancelButton: true,
            confirmButtonText: 'Yes, Finish it',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Task Has Been Finished', '', 'success')
            }
        })
    }
    return (
        <>
            <Navbar />
            <section id='ToDo' className='pt-5'>
                <div className="container wrapper-area">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col col-lg-12">
                            <div className="card rounded-3">
                                <div className="card-body p-4">
                                    <div className="container text-center my-3 pb-3 title-todo">TODO BOARD</div>
                                    <form className="row row-cols-lg-auto g-3 justify-content-center mb-4 pb-2">
                                        <div className="col-12">
                                            <div className="form-outline">
                                                <input type="text" id="form1" className="form-control" placeholder='Enter a task here' />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <button type="submit" className="btn btn-add">Add Task</button>
                                        </div>
                                    </form>

                                    <table className="table mb-4 text-center">
                                        <thead>
                                            <tr>
                                                <th scope="col">No.</th>
                                                <th scope="col">Todo List</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Create Product Backlog</td>
                                                <td>In progress</td>
                                                <td>
                                                    <button type="submit" className="btn btn-primary me-1" data-bs-toggle='tooltip' data-bs-placement='top' title='Update'><MdSystemUpdateAlt /></button>
                                                    <button type="submit" className="btn btn-danger" data-bs-toggle='tooltip' data-bs-placement='top' title='Delete' onClick={handleDelete}><MdDeleteForever /></button>
                                                    <button type="submit" className="btn btn-success ms-1" data-bs-toggle='tooltip' data-bs-placement='top' title='Finished' onClick={handleFinished}><MdOutlineDoneAll /></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Develop Register Function</td>
                                                <td>In progress</td>
                                                <td>
                                                    <button type="submit" className="btn btn-primary me-1" data-bs-toggle='tooltip' data-bs-placement='top' title='Update'><MdSystemUpdateAlt /></button>
                                                    <button type="submit" className="btn btn-danger" data-bs-toggle='tooltip' data-bs-placement='top' title='Delete'><MdDeleteForever /></button>
                                                    <button type="submit" className="btn btn-success ms-1" data-bs-toggle='tooltip' data-bs-placement='top' title='Finished'><MdOutlineDoneAll /></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Deploy on vercel</td>
                                                <td>In progress</td>
                                                <td>
                                                    <button type="submit" className="btn btn-primary me-1" data-bs-toggle='tooltip' data-bs-placement='top' title='Update'><MdSystemUpdateAlt /></button>
                                                    <button type="submit" className="btn btn-danger" data-bs-toggle='tooltip' data-bs-placement='top' title='Delete'><MdDeleteForever /></button>
                                                    <button type="submit" className="btn btn-success ms-1" data-bs-toggle='tooltip' data-bs-placement='top' title='Finished'><MdOutlineDoneAll /></button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ToDo;