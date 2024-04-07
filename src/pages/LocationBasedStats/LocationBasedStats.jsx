import ReChartAllUsers from "../../components/ReChart/ReChartAllUsers";
import ReChartAllUsersMobile from "../../components/ReChart/ReChartAllUsersMobile";
import GoogleMapComp from "../../components/GoogleMap/GoogleMap";
import { useRef } from "react";
import "./LocationBasedStats.css";

export default function LocationBasedStats({
  entries,
  allUserEntries,
  isMobile,
}) {
  const circleRadius = useRef(null);
  return (
    <>
      <div className="page-container">
        <h1 className="title">Everyone Else</h1>
        <p>
          Emotions are measured on a scale of 0 - 5.
          <br /> Current statistics are for all users. Adjust the circle below
          to see customized results based on location.
        </p>
        {isMobile ? (
          <ReChartAllUsersMobile
            circleRadius={circleRadius}
            entries={entries}
            allUserEntries={allUserEntries}
          />
        ) : (
          <ReChartAllUsers
            circleRadius={circleRadius}
            entries={entries}
            allUserEntries={allUserEntries}
          />
        )}
        <GoogleMapComp circleRadius={circleRadius} />
      </div>
    </>
  );
}
