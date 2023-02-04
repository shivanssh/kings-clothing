import './SignUp.scss';
import FormInput from './../FormInput/FormInput';
import { useState } from 'react';
import CustomButton from './../CustomButton/CustomButton';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, createUserProfileDocument } from '../../utils/firebase';

const SignUp = () => {
  const initialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const [formValue, setFormValue] = useState(initialState);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = formValue;
    if (password !== confirmPassword) {
      alert("password didn't match");
      setFormValue({ ...formValue, password: '', confirmPassword: '' });
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
      setFormValue(initialState);
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
          value={formValue.displayName}
          required
        />
        <FormInput
          type='email'
          label='Email'
          name='email'
          handleChange={handleChange}
          value={formValue.email}
          required
        />
        <FormInput
          type='password'
          label='Password'
          name='password'
          handleChange={handleChange}
          value={formValue.password}
          required
        />
        <FormInput
          type='password'
          label='Confirm Password'
          name='confirmPassword'
          handleChange={handleChange}
          value={formValue.confirmPassword}
          required
        />
        <CustomButton>Sign Up</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
