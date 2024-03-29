import ReChartAllUsers from "../../components/ReChart/ReChartAllUsers";
import GoogleMapComp from "../../components/GoogleMap/GoogleMap";

export default function locationBasedStats({entries, allUserEntries}) {
  return (
    <>
      <div>
        <h1>Everyone Else</h1>
        <p>Emotions are measured on a scale of 0 - 5</p>
      </div>
      <ReChartAllUsers entries={entries} allUserEntries={allUserEntries}/>
      <GoogleMapComp />
    </>
  );
}
