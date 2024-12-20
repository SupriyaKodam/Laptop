import React, { useState } from 'react';

const LoginorRegister = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [signInData, setSignInData] = useState({
    signInUsername: '',
    signInPassword: '',
    keepMeSignedIn: false,
  });

  const [error, setError] = useState('');
  const [signInError, setSignInError] = useState('');

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignInChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setSignInData({
        ...signInData,
        [name]: checked,
      });
    } else {
      setSignInData({
        ...signInData,
        [name]: value,
      });
    }
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Your password and confirm password do not match.');
    } else {
      setError('');
      alert('Registration Completed!');
    }
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();

    // Example simple validation for sign-in
    if (signInData.signInUsername === '' || signInData.signInPassword === '') {
      setSignInError('Please fill in both fields.');
    } else {
      setSignInError('');
      alert('Sign In Successful!');
    }
  };

  return (
    <div className='flex flex-col lg:flex-row items-center justify-between mt-40'>
      {/* Sign Up Form */}
      <div className='flex flex-col items-start justify-start lg:mx-20 mb-10 lg:mb-0 w-full lg:w-1/2'>
        <h1 className='text-3xl mb-5'>Sign Up</h1>
        <hr className='text-gray-500 w-full mb-5'/>
        <form onSubmit={handleSignUpSubmit} className='w-full'>
          <div className='flex flex-row space-x-4 mb-6'>
            <div className='flex flex-col'>
              <label htmlFor='firstname' className='text-lg'>
                First Name
              </label>
              <input
                type='text'
                id='firstname'
                name='firstname'
                placeholder='Enter First Name'
                className='border p-2 rounded-md'
                value={formData.firstname}
                onChange={handleSignUpChange}
                required
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='lastname' className='text-lg'>
                Last Name
              </label>
              <input
                type='text'
                id='lastname'
                name='lastname'
                placeholder='Enter Last Name'
                className='border p-2 rounded-md'
                value={formData.lastname}
                onChange={handleSignUpChange}
                required
              />
            </div>
          </div>

          <div className='flex flex-row space-x-4 mb-6'>
            <div className='flex flex-col'>
              <label htmlFor='username' className='text-lg'>
                User Name
              </label>
              <input
                type='text'
                id='username'
                name='username'
                placeholder='Enter User Name'
                className='border p-2 rounded-md'
                value={formData.username}
                onChange={handleSignUpChange}
                required
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='email' className='text-lg'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='Enter Email'
                className='border p-2 rounded-md'
                value={formData.email}
                onChange={handleSignUpChange}
                required
              />
            </div>
          </div>

          <div className='flex flex-row space-x-4 mb-6'>
            <div className='flex flex-col'>
              <label htmlFor='password' className='text-lg'>
                Password
              </label>
              <input
                type='password'
                id='password'
                name='password'
                placeholder='Enter Password'
                className='border p-2 rounded-md'
                value={formData.password}
                onChange={handleSignUpChange}
                required
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='confirmPassword' className='text-lg'>
                Confirm Password
              </label>
              <input
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                placeholder='Confirm Password'
                className='border p-2 rounded-md'
                value={formData.confirmPassword}
                onChange={handleSignUpChange}
                required
              />
            </div>
          </div>

          {/* Show error if passwords don't match */}
          {error && <div className='text-red-500 mb-4'>{error}</div>}

          <button type='submit' className='bg-sky-400 text-white p-3 rounded-md'>
            Submit
          </button>
        </form>
      </div>

      {/* Sign In Form */}
      <div className='flex flex-col items-start justify-start lg:mx-20 w-full lg:w-1/2'>
        <h1 className='text-3xl mb-5'>Sign In</h1>
        <hr className='text-gray-500 w-full mb-5'/>
        <form onSubmit={handleSignInSubmit} className='w-full'>
          <div className='flex flex-row space-x-4 mb-6'>
            <div className='flex flex-col'>
              <label htmlFor='signInUsername' className='text-lg'>
                User Name
              </label>
              <input
                type='text'
                id='signInUsername'
                name='signInUsername'
                placeholder='Enter User Name'
                className='border p-2 rounded-md'
                value={signInData.signInUsername}
                onChange={handleSignInChange}
                required
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='signInPassword' className='text-lg'>
                Password
              </label>
              <input
                type='password'
                id='signInPassword'
                name='signInPassword'
                placeholder='Enter Password'
                className='border p-2 rounded-md'
                value={signInData.signInPassword}
                onChange={handleSignInChange}
                required
              />
            </div>
          </div>

          {/* Show error if sign-in fields are empty */}
          {signInError && <div className='text-red-500 mb-4'>{signInError}</div>}

          <div className='flex items-center mb-4'>
            <input
              type='checkbox'
              id='keepMeSignedIn'
              name='keepMeSignedIn'
              checked={signInData.keepMeSignedIn}
              onChange={handleSignInChange}
              className='mr-2'
            />
            <label htmlFor='keepMeSignedIn' className='text-lg'>
              Keep me signed in
            </label>
          </div>

          <div className='flex justify-between'>
            <button type='submit' className='bg-sky-400 text-white p-3 rounded-md'>
              Sign In
            </button>
            <button type='button' className='bg-gray-500 text-white p-3 rounded-md'>
              Forgot Password?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginorRegister;
