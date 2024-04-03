import { color } from 'framer-motion';
import NewEntryForm from '../../components/NewEntryForm/NewEntryForm';
import './NewEntryPage.css'

export default function NewEntryPage({ user, addEntry }) {
  return (
    <>
    <div className="page-container">
    <h1 className='title'>How are you, {user.name}?</h1>
    < NewEntryForm user={user} addEntry={addEntry}/>
    </div>
    </>
  );
}