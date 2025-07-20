import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import UserInfo from './components/UserInfo';

import UserContext from './UserContext';

function App() {
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com"
  };

  return (
    <UserContext.Provider value={userData}>
      <>
        <div>
          <a href="https://vite.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <h1>Vite + React</h1>

        <WelcomeMessage />
        <Header />
        <MainContent />
        <Footer />

        <UserProfile 
          name="Alice" 
          age={25} 
          bio="Loves hiking and photography" 
        />

        <UserInfo /> {/* ✅ Uses Context */}

        <Counter />

        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    </UserContext.Provider>
  );
}

export default App;
