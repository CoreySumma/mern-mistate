import NewEntryForm from '../../components/NewEntryForm/NewEntryForm'

export default function NewOrderPage({ user, addEntry }) {
  return (
    <>
    <h1>How has today been?</h1>
    < NewEntryForm user={user} addEntry={addEntry}/>
    </>
  );
}