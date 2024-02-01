import React, { useState } from 'react';  
import { Link } from 'react-router-dom';

function getUser() {
    let user = localStorage.getItem('user');
    if (user) {
        user = JSON.parse(user);
    } else {
        user = null;
    }
    return user;
}

export default function HeaderTask() {
    const [user, setUser] = useState(getUser());
    const handleLogout =(e)=>{
       localStorage.removeItem('user');
       setUser(null);
    } 
    return (
        <div>
            <nav className='navbar navbar-light bg-light shadow p-3'>
                <div className="container-fluid">
                    <Link to='/' className='navbar-brand mb-0 h1'>Task management App</Link>
                    <div className='d-flex'>
                        <form action="">
                            <Link className='me-2' style={{ textDecoration: 'none' }}>{user?.name}</Link>
                            <Link to='/register' className='btn btn-primary' onClick={handleLogout}>Logout</Link>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}
