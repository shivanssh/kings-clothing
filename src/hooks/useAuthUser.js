import { useEffect, useState } from 'react';
import { auth, createUserProfileDocument } from '../utils/firebase';

const useAuthUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const snapShot = await createUserProfileDocument(userAuth);
        setUser({
          id: snapShot.id,
          ...snapShot.data(),
        });
      } else {
        setUser(userAuth);
      }
      return () => {
        unSubscribeFromAuth();
      };
    });
  }, []);

  if (user) return user;
};

export default useAuthUser;
