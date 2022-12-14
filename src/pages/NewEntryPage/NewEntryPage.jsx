export default function NewOrderPage() {
  return (
    <>
    <h1>How has today been?</h1>
    <div className="App">
    <form>
      <label>NAME</label>
      <label>EMOTION</label>
      <select name="emotion">
        <option value="😁">Happy</option>
        <option value="😐">Neutral</option>
        <option value="😠">Angry</option>
      </select>
    </form>
  </div>
  </>
  );
}