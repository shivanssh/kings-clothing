import { useState } from 'react';
import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';
import './SignIn.scss';
import { signInWithGoogle } from '../../utils/firebase';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail('');
    setPassword('');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    name === 'email' ? setEmail(value) : setPassword(value);
  };

  return (
    <div className='sign-in'>
      <h2>Already have an account</h2>
      <span>Sigin in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type='email'
          name='email'
          id='email'
          value={email}
          label='Email'
          handleChange={handleChange}
          required
        />

        <FormInput
          type='password'
          name='password'
          id='password'
          value={password}
          label='Password'
          handleChange={handleChange}
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
