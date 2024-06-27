import React from 'react'


export default function form(props) {
  return (
    <>
    <form className='d-grid justify-content-center align-items-center '>
      {props.type==='signin'? (

        <h1>Register</h1>
      ):<h1>Login</h1>}
      <div className="mb-3">
  {props.type === 'signin' ? (
    <>
      <label htmlFor="exampleInputEmail1" className="form-label">FullName</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </>
  ) : null}
</div>

<div className="mb-3">
  <label for="exampleInputEmail1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
</div>
<div class="mb-3">
  <label for="exampleInputPassword1" className="form-label">Password</label>
  <input type="password" className="form-control" id="exampleInputPassword1"/>
</div>
<div className="mb-3 form-check">
  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
  <label className="form-check-label" for="exampleCheck1">Check me out</label>
</div>

<button type="submit" className="btn btn-primary">{props.type==='signin'? 'Signin':'Login'}</button>
 </form>
   
  </>
  )
}
