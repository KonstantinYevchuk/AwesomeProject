
import MainApp from './Components/MainApp';

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

