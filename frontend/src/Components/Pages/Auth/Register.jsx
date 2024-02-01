import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../../Redux/UserSlice';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setConfirmPassword] = useState('');

  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegisterEvent = (e) => {
    e.preventDefault();

    if (password !== password_confirmation) {
      alert("Password and Confirm Password do not match");
      return;
    }

    let userCredentials = {
      name,
      email,
      password,
      password_confirmation,
    };

    dispatch(registerUser(userCredentials)).then((result) => {
      if (result.payload) {
        alert("Registration successful");
        navigate('/');
      }
    });
  };
  return (
    <div>
      <div className='container mt-5'>
        <div className='row d-flex justify-content-center'>
          <div className='card mb-3 p-3' style={{ width: '30rem' }}>
            <h4 className='card-title text-center'>Registration</h4>
            <form onSubmit={handleRegisterEvent}>
              <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label">Full Name</label>
                <input type="text" className="form-control" name="name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail" className="form-label">Email address</label>
                <input type="email" className="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                <input type="password" className="form-control" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputConfirmPassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" name="password_confirmation" value={password_confirmation} onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>

              <button className="btn b-color" type='submit'>
                {loading ? 'Loading...' : 'Register'}
              </button>
              {error && <p className='alert alert-danger mt-3 text-center'>{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
