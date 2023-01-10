import { useState, useEffect } from 'react';
import { auth } from '../utils/firebase';

const useAuthUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setUser(user);

      return () => {
        unsubscribeFromAuth();
      };
    });
  }, []);

  return user;
};

export default useAuthUser;
