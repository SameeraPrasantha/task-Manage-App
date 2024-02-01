import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../Redux/UserSlice';
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {loading,error } = useSelector((state)=>state.user);

    const dispatch = useDispatch();
    const navigate  = useNavigate();
    const handleLoginEvent = (e) =>{
        e.preventDefault();
        let userCreadentials = {
            email,password
        }
        dispatch(loginUser(userCreadentials)).then((result)=>{
            if(result.payload){
                setEmail('');
                setPassword('');
                navigate('/task');
            }
        })
    }
  return (
    <div>
        <div className='container mt-5'>
            <div className='row d-flex justify-content-center'>
                <div className='card mb-3 p-3' style={{ width: '30rem' }}>
                    <h4 className='card-title text-center'>Login</h4>
                    <form onSubmit={handleLoginEvent}>
                   
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control"  name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control"  name="password"value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="btn b-color">
                                {loading ? 'Loading...' : 'Login'}
                        </button>
                        {
                            error && <p className='alert alert-danger mt-3 text-center'>{error}</p>
                        }
                    </form>
                </div>
            </div>
        </div>
        </div>
  )
}
