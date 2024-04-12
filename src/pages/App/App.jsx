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
import { set } from "mongoose";

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
  // State for the average emotion for each day of the week.
  // We need this top level to pass to child components
  // to check if user fell below the average for the day and call GPT.
  const [mondayAverage, setMondayAverage] = useState([]);
  const [tuesdayAverage, setTuesdayAverage] = useState([]);
  const [wednesdayAverage, setWednesdayAverage] = useState([]);
  const [thursdayAverage, setThursdayAverage] = useState([]);
  const [fridayAverage, setFridayAverage] = useState([]);
  const [saturdayAverage, setSaturdayAverage] = useState([]);
  const [sundayAverage, setSundayAverage] = useState([]);
  const [currentDay, setCurrentDay] = useState([]);
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
    setEntries(updatedEntries.entries);
    navigate("/entries");
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
  // ---------------------------------------------------------------
  // GPT call logic for when the user falls below the average for the day
  // Grab the current day everytime someone logs in
  useEffect(() => {
    function getCurrentDay() {
      const dayOfWeek = new Date().getDay();
      const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
      setCurrentDay(days[dayOfWeek]);
    }
    getCurrentDay();
  }, [user]);

  // React doesn't allow for dynamic props to be passed directly, so we have to make an object beforehand
  // for the New Entry component to use. This way we don't need to pass every day's average individually.

  const dailyAverageKey = {
    mondayAverage: mondayAverage,
    tuesdayAverage: tuesdayAverage,
    wednesdayAverage: wednesdayAverage,
    thursdayAverage: thursdayAverage,
    fridayAverage: fridayAverage,
    saturdayAverage: saturdayAverage,
    sundayAverage: sundayAverage,
  };


  // Create a dynamic var to hold the average for the current day 
  const currentDayAverage = dailyAverageKey[currentDay];
  console.log(currentDayAverage)




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
                    mondayAverage={mondayAverage}
                    tuesdayAverage={tuesdayAverage}
                    wednesdayAverage={wednesdayAverage}
                    thursdayAverage={thursdayAverage}
                    fridayAverage={fridayAverage}
                    saturdayAverage={saturdayAverage}
                    sundayAverage={sundayAverage}
                    setMondayAverage={setMondayAverage}
                    setTuesdayAverage={setTuesdayAverage}
                    setWednesdayAverage={setWednesdayAverage}
                    setThursdayAverage={setThursdayAverage}
                    setFridayAverage={setFridayAverage}
                    setSaturdayAverage={setSaturdayAverage}
                    setSundayAverage={setSundayAverage}
                  />
                }
              />
              <Route
                path="/everyone"
                element={
                  <LocationBasedStats
                    entries={entries}
                    allUserEntries={allUserEntries}
                    isMobile={isMobile}
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
                element={<NewEntryPage addEntry={addEntry} user={user} currentDayAverage={currentDayAverage} />}
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
