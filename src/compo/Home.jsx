import { useContext } from 'react';
import Card from './Card.jsx';
import {AppContext} from './Create.jsx';
import '../css/home.css';
export default function Home() {
  const {phone,name}=useContext(AppContext);
  return (
  <>
  <div className="flex flex-row justify-around mt-5">
  <Card src='rn.jpg' title="cris" desc="Hello cris"/>
  <Card src='cons.jpg' title="cons of business" desc="Hello cons"/>
</div>
<div className="flex flex-row justify-around mt-5">
  <Card src='rn.jpg' title="cris" desc="Hello cris"/>
  <Card src='cons.jpg' title="cons of business" desc="Hello cons"/>
</div>
{/* <div className="mt-5">
  <p className="text-gray-600">{phone}</p>
  <p className="text-gray-600">{name}</p>
</div> */}
  </>
  )
}
