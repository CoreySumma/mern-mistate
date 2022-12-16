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

  async function addEntry(entry) {
    const newEntry = await entryAPI.create(entry);
    console.log(newEntry)
    setEntries([...entries, newEntry]);
  }

  useEffect(function () {
    async function displayEntries() {
      const entryData = await entryAPI.index();
      setEntries(entryData);
    }
    if (user) displayEntries();
  }, [user])

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/entries/new" element={<NewEntryPage addEntry={addEntry} user={user} />} />
            <Route path="/entries" element={<EntryHistoryPage user={user} setEntries={setEntries} entries={entries} />} />
            <Route path="/entries/:entryName" element={<EntryDetailPage user={user} entries={entries} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
