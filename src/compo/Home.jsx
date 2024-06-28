import { useContext } from 'react';
import Card from './Card.jsx';
import {AppContext} from './Create.jsx';
export default function Home() {
  const {phone,name}=useContext(AppContext);
  return (
  <>
  <div className='row flex-row justify-content-evenly mt-5'>
  <Card src='rn.jpg' title="cris" desc="Hello cris"/>
  <Card src='cons.jpg' title="cons of business" desc="Hello cons"/>
  </div>
   <div className='row'>
     <p>{phone}</p>
     <p>{name}</p>
   </div>
  </>
  )
}
