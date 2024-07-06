import { useContext } from 'react';
import Card from './Card.jsx';

import '../css/home.css';
export default function Home() {
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
  </>
  )
}
