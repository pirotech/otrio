import { useState, useEffect } from 'react'
import type { User } from '@otrio/shared'
import './App.css'

function App() {
  const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
      fetch('http://localhost:3000/user')
        .then((r) => r.json())
        .then((data: User) => setUser(data));
    }, []);

    return <div>{user ? user.email : 'Загрузка...'}</div>;
}

export default App
