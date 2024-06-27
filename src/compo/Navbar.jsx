import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
      </ul>
    </div>
  </div>
<Link to='/form'><button className='m-4'>form</button></Link>
<Link to='/next'><button className='m-4'>next</button></Link>
</nav>
    </div>
  )
}
