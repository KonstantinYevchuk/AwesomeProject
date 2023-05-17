// import Main from './Components/Main';
import MainApp from './Components/MainApp';
// import { useState } from 'react';
// import { auth } from './firebase/config';
// import { onAuthStateChanged } from 'firebase/auth';

// import { NavigationContainer } from '@react-navigation/native';
// import { useRoute } from './Components/router';
import { Provider } from "react-redux";
import { store } from './redux/store';

export default function App() {
  // const [user, setUser] = useState(null);

  // onAuthStateChanged(auth, (user) => setUser(user));
  // const routing = useRoute(user);

  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}

