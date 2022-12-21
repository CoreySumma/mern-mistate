import NewEntryForm from '../../components/NewEntryForm/NewEntryForm';
import './NewEntryPage.css'

export default function NewEntryPage({ user, addEntry }) {
  return (
    <>
    <h1>How are you {user.name}?</h1>
    < NewEntryForm user={user} addEntry={addEntry}/>
    <div className='scale'>
    <img className='imgClass' src="/assets/emotions.png" />
    </div>
    </>
  );
}