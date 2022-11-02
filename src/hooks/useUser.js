import { useContext } from 'react';
import UserContext from '../contexts/user-context';


const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('UserContext cannot be used outside the UserProvider component');
  }

  return context;
};

export default useUser;