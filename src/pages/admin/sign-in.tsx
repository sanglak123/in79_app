import api_auth from '@/server/api/auth';
import React, { useState } from 'react';

function AuthSignIn() {
    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const onChangeUser = (e: any) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    };

    const handle_sign_in = async () => {
        await api_auth.SignIn(user);
    };

    return (
        <div className='w-screen h-screen relative'>
            <div className='lg:w-1/3 md:w-1/2 w-[95vw] h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg p-6'>
                <div>
                    <label className='text-sm text-gray-500'>Username</label>
                    <input
                        autoFocus
                        className='w-full px-3 py-2 rounded-md shadow-sm border border-gray-400 focus:outline-none'
                        placeholder='Enter your username...'
                        name='username'
                        onChange={onChangeUser}
                    />
                </div>

                <div>
                    <label className='text-sm text-gray-500'>Password</label>
                    <input
                        className='w-full px-3 py-2 rounded-md shadow-sm border border-gray-400 focus:outline-none'
                        placeholder='Enter your password...'
                        type='password'
                        name='password'
                        onChange={onChangeUser}
                    />
                </div>
                <div className='my-3 w-full flex justify-end'>
                    <button
                        aria-label='Đăng nhập'
                        className='border bg-blue-600 p-3 w-[250px] rounded-md text-white me-auto transition-colors duration-300 hover:bg-white hover:text-blue-600 cursor-pointer'
                        onClick={handle_sign_in}
                    >
                        Sign in
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AuthSignIn;