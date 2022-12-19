import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import NewEntryPage from '../NewEntryPage/NewEntryPage';
import EntryHistoryPage from '../EntryHistoryPage/EntryHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import EntryDetailPage from '../EntryDetail/EntryDetailPage';
import { useEffect } from 'react';
import * as entryAPI from '../../utilities/entries-api'
import { useNavigate } from 'react-router-dom';
import UpdateNotePage from '../../components/UpdateEntryForm/UpdateEntryForm';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [entries, setEntries] = useState([]);
  const navigate = useNavigate();

  async function addEntry(entry) {
    const newEntry = await entryAPI.create(entry);
    setEntries([...entries, newEntry]);
  }

  async function handleUpdateEntry(entryFormData, id) {
   await entryAPI.updateEntry(entryFormData, id);
   const updatedEntries = await entryAPI.index();
   setEntries(updatedEntries);
  }

  async function handleDelete(id) {
    await entryAPI.deleteEntry(id);
    const remainingEntries = entries.filter(entry => entry._id !== id);
    setEntries(remainingEntries);
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
            <Route path="/home" element={<HomePage user={user} />} />
            <Route path="/entries" element={<EntryHistoryPage user={user} setEntries={setEntries} entries={entries} />} />
            <Route path="/entries/:entryName" element={<EntryDetailPage user={user} entries={entries} handleDelete={handleDelete} handleUpdateEntry={handleUpdateEntry}/>} />
            <Route path="/entries/new" element={<NewEntryPage addEntry={addEntry} user={user} />} />
            <Route path="/entries/:id/update" element={<UpdateNotePage handleUpdateEntry={handleUpdateEntry} entries={entries} user={user} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
