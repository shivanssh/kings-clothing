import './SignUp.scss';
import FormInput from './../FormInput/FormInput';
import { useState } from 'react';
import CustomButton from './../CustomButton/CustomButton';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, createUserProfileDocument } from '../../utils/firebase';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [passowrd, setPassowrd] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const clearState = () => {
    setEmail('');
    setPassowrd('');
    setConfirmPassword('');
    setDisplayName('');
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    // eslint-disable-next-line default-case
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'displayName':
        setDisplayName(value);
        break;
      case 'password':
        setPassowrd(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (passowrd !== confirmPassword) {
      alert("password didn't match");
      setPassowrd('');
      setConfirmPassword('');
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        passowrd
      );

      await createUserProfileDocument(user, { displayName });
      clearState();
    } catch (error) {
      console.log(error, '--------------err');
    }
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type='text'
          label='Display Name'
          name='displayName'
          handleChange={handleChange}
          value={displayName}
          required
        />
        <FormInput
          type='email'
          label='Email'
          name='email'
          handleChange={handleChange}
          value={email}
          required
        />
        <FormInput
          type='password'
          label='Password'
          name='password'
          handleChange={handleChange}
          value={passowrd}
          required
        />
        <FormInput
          type='password'
          label='Confirm Password'
          name='confirmPassword'
          handleChange={handleChange}
          value={confirmPassword}
          required
        />
        <CustomButton>Sign Up</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
