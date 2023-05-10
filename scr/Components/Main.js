import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';

import { NavigationContainer } from '@react-navigation/native';
import { useRoute } from './router';

const Main = () => {
    const [user, setUser] = useState(null);
    const state = useSelector((state) => state);
    console.log(state);

    onAuthStateChanged(auth, (user) => setUser(user));
    const routing = useRoute(user);

    return (
    <NavigationContainer>{routing}</NavigationContainer>
      );
}
export default Main