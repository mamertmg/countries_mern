import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/authSlice'
import Spinner from '../components/Spinner'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

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

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='text-3xl w-4/5 mx-auto'>
        <h1 className='flex items-center  mx-auto justify-center'>
          <FaSignInAlt className='mr-4'/> Login
        </h1>
        <p className='text-xl mt-4'>Start tracking your visited countries</p>
      </section>

      <section className='w-4/5 mx-auto'>
        <form onSubmit={onSubmit}>
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
            <button type='submit' className='bg-black text-white text-md px-5 py-2 rounded-md cursor-pointer'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login