import { signInWithPopup } from "firebase/auth";
import "./App.css";
import { auth, provider } from "./firebase/firebaseConfig";

function App() {
  const handleSingIn = () => {
    signInWithPopup(auth, provider).then((resault) => {
      console.log(resault);
    });
  };
  return (
    <>
      <p>Giris yap</p>
      <button onClick={handleSingIn}>Google</button>
    </>
  );
}

export default App;
