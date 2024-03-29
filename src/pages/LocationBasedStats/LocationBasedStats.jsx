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
        <p>Emotions are measured on a scale of 0 - 5</p>
      </div>
      <ReChartAllUsers entries={entries} allUserEntries={allUserEntries}/>
    </>
  );
}
