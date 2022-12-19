import NewEntryForm from '../../components/NewEntryForm/NewEntryForm'

export default function NewEntryPage({ user, addEntry }) {
  return (
    <>
    <h1>How are you {user.name}?</h1>
    < NewEntryForm user={user} addEntry={addEntry}/>
    <img src="/assets/emotions.png" />
    </>
  );
}