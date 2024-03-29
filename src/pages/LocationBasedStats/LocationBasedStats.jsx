import { Rectangle } from "recharts";
import ReChartAllUsers from "../../components/ReChart/ReChartAllUsers";

export default function locationBasedStats({entries, allUserEntries}) {
  const userEmotions = entries.map((entry) => entry.emotion);
  const allEmotions = allUserEntries.map((entry) => entry.emotion);

  console.log(userEmotions, allEmotions);

  console.log(userEmotions, allEmotions);
  return (
    <>
      <div>
        <h1>Everyone Else</h1>
      </div>
      <ReChartAllUsers entries={entries} allUserEntries={allUserEntries}/>
    </>
  );
}
