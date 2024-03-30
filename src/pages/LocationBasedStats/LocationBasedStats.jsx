import ReChartAllUsers from "../../components/ReChart/ReChartAllUsers";
import GoogleMapComp from "../../components/GoogleMap/GoogleMap";
import { useRef } from "react";

export default function LocationBasedStats({entries, allUserEntries}) {
  const  circleRadius = useRef(null);
  return (
    <>
      <div>
        <h1>Everyone Else</h1>
        <p>Emotions are measured on a scale of 0 - 5.<br /> Current statistics are for all users. Adjust the circle below to see customized results based on location.</p>
      </div>
      <ReChartAllUsers circleRadius={circleRadius} entries={entries} allUserEntries={allUserEntries}/>
      <GoogleMapComp circleRadius={circleRadius}/>
    </>
  );
}
