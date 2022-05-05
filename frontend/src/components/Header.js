import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/authSlice'

function Header() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className='flex justify-between items-center p-5 mb-16 border-solid border-b-2'>
      <div className='logo'>
        <Link to='/'>Countries Track</Link>
      </div>
      <ul className='flex justify-between items-center'>
        {user ? (
          <li>
            <button className='flex items-center ' onClick={onLogout}>
              <FaSignOutAlt className='mr-2' /> Logout
            </button>
          </li>
        ) : (
          <>
            <li className='items-center ml-5'>
              <Link className='flex items-center ' to='/login'>
                <FaSignInAlt className='mr-2'/> Login
              </Link>
            </li>
            <li className=' ml-5'>
              <Link  className='flex items-center ' to='/register'>
                <FaUser className='mr-2' /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header