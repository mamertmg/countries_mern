import React from 'react'
import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../features/authSlice'
import Spinner from '../components/Spinner'

function Register() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
      })
    
    const { name, email, password, password2 } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )

    useEffect(() => {
        if (isError) {
          toast.error(message)
        }
    
        if (isSuccess || user) {
          navigate('/')
        }
    
        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) =>{
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    
    const onSubmit = (e) =>{
        e.preventDefault()

        if (password !== password2) {
            toast.error('Passwords do not match')
          } else {
            const userData = {
              name,
              email,
              password,
            }
            
            dispatch(register(userData))
        }
    }

    if (isLoading) {
        return <Spinner />
    }

    return (
            <>
            <section className='text-3xl w-4/5 mx-auto'>
            <h1 className='flex items-center  mx-auto justify-center'>
                <FaUser className='mr-4'/> Register
            </h1>
            <p className='text-xl mt-4'>Please create an account</p>
            </section>

            <section className='w-4/5 mx-auto'>
            <form onSubmit={onSubmit}>
                <div className='my-4'>
                <input
                    type='text'
                    className='border-2 rounded-md p-2'
                    id='name'
                    name='name'
                    value={name}
                    placeholder='Enter your name'
                    onChange={onChange}
                />
                </div>
                <div className='my-4'>
                <input
                    type='email'
                    className='border-2 rounded-md p-2'
                    id='email'
                    name='email'
                    value={email}
                    placeholder='Enter your email'
                    onChange={onChange}
                />
                </div>
                <div className='my-4'>
                <input
                    type='password'
                    className='border-2 rounded-md p-2'
                    id='password'
                    name='password'
                    value={password}
                    placeholder='Enter password'
                    onChange={onChange}
                />
                </div>
                <div className='my-4'>
                <input
                    type='password'
                    className='border-2 rounded-md p-2'
                    id='password2'
                    name='password2'
                    value={password2}
                    placeholder='Confirm password'
                    onChange={onChange}
                />
                </div>
                <div className='my-4'>
                <button type='submit' className='bg-black text-white text-md px-5 py-2 rounded-md cursor-pointer'>
                    Submit
                </button>
                </div>
            </form>
            </section>
        </>
    )
}

export default Register