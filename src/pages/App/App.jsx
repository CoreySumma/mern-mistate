import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewEntryPage from '../NewEntryPage/NewEntryPage';
import EntryHistoryPage from '../EntryHistoryPage/EntryHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import EntryDetailPage from '../EntryDetail/EntryDetailPage';
import { useEffect } from 'react';
import * as entryAPI from '../../utilities/entries-api'


export default function App() {
  const [user, setUser] = useState(getUser());
  
  const [entries, setEntries] = useState([]);

  const [showEntries, setShowEntries] = useState(true);

  async function addEntry(entry) {
    console.log(entry);
    const newEntry = await entryAPI.create(entry);
    setEntries([...entries, newEntry]);
  }

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/entries/new" element={<NewEntryPage addEntry={addEntry} user={user}/>} />
              <Route path="/entries" element={<EntryHistoryPage user={user}/>} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
