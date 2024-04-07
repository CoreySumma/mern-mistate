import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import HomePage from "../HomePage/HomePage";
import LocationBasedStats from "../LocationBasedStats/LocationBasedStats";
import NewEntryPage from "../NewEntryPage/NewEntryPage";
import EntryHistoryPage from "../EntryHistoryPage/EntryHistoryPage";
import Navbar from "../../components/NavBar/NavBar";
import EntryDetailPage from "../EntryDetailPage/EntryDetailPage";
import * as entryAPI from "../../utilities/entries-api";
import { useNavigate } from "react-router-dom";
import UpdateEntryForm from "../../components/UpdateEntryForm/UpdateEntryForm";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/NavBar/Banner";
// We move these into src to import and dynamically change background images
import landscape1 from "../../backgroundImages/landscape1.jpg";
import landscape3 from "../../backgroundImages/landscape3.jpg";
import landscape6 from "../../backgroundImages/landscape6.jpg";
import clouds4 from "../../backgroundImages/clouds4.jpg";

// Map for easy image reference
const backgroundImages = {
  home: landscape3,
  entries: landscape1,
  everyone: landscape6,
  detail: clouds4,
};
// Function to find the correct image for the background depending on path
function findImage(path) {
  switch (path) {
    case "/":
      return backgroundImages.home;
    case "/entries":
      return backgroundImages.entries;
    case "/everyone":
      return backgroundImages.everyone;
    default:
      return backgroundImages.detail;
  }
}

export default function App() {
  const [user, setUser] = useState(getUser());
  const [entries, setEntries] = useState([]);
  const [allUserEntries, setAllUserEntries] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const useThisImage = findImage(location.pathname);
  // Check screen size for mobile or desktop so we can render different charts for each
  const [isMobile, setIsMobile] = useState(false);
  // Trigger the check when the component mounts(does not work for re-adjustements)
  useEffect(() => {
    window.innerWidth < 600 ? setIsMobile(true) : setIsMobile(false);
  }, []);

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
    const remainingEntries = entries.filter((entry) => entry._id !== id);
    setEntries(remainingEntries);
    navigate("/entries");
  }

  async function handleDeleteAll(entries) {
    await entryAPI.deleteAllEntries(entries);
    const updatedEntries = await entryAPI.index();
    setEntries(updatedEntries);
    console.log(updatedEntries);
    navigate("/entries/new");
  }

  useEffect(
    function () {
      async function displayEntries() {
        const entryData = await entryAPI.index();
        setEntries(entryData.entries);
        setAllUserEntries(entryData.allEntries);
      }
      if (user) displayEntries();
    },
    [user]
  );

  return (
    <main className="App">
      {user ? (
        <>
          <Banner />
          <div
            className="background-container"
            style={{ backgroundImage: `url(${useThisImage})` }}
          >
            <Navbar user={user} setUser={setUser} />
            <Routes>
              <Route path="/" element={<HomePage user={user} />} />
              <Route
                path="/entries"
                element={
                  <EntryHistoryPage
                    user={user}
                    setEntries={setEntries}
                    entries={entries}
                    handleDeleteAll={handleDeleteAll}
                    isMobile={isMobile}
                  />
                }
              />
              <Route
                path="/everyone"
                element={
                  <LocationBasedStats
                    entries={entries}
                    allUserEntries={allUserEntries}
                  />
                }
              />
              <Route
                path="/entries/:id"
                element={
                  <EntryDetailPage
                    user={user}
                    entries={entries}
                    handleDelete={handleDelete}
                    handleUpdateEntry={handleUpdateEntry}
                  />
                }
              />
              <Route
                path="/entries/new"
                element={<NewEntryPage addEntry={addEntry} user={user} />}
              />
              <Route
                path="/entries/:id/update"
                element={
                  <UpdateEntryForm
                    handleUpdateEntry={handleUpdateEntry}
                    entries={entries}
                    user={user}
                  />
                }
              />
            </Routes>
            <Footer />
          </div>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
