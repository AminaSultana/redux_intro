import Counter from "./components/Counter";
import Auth from "./components/Auth";
import Headers from "./components/Header";
import { useSelector } from 'react-redux';
import UserProfile from "./components/UserProfile";

function App() {
  const isAuthenticated = useSelector(state=> state.auth.isAuthenticated)
  return (
    <>
      <Headers />
      {isAuthenticated && <UserProfile/>}
      {!isAuthenticated && <Auth />}
      <Counter />
    </>
  );
}

export default App;
