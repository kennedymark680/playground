import { useState } from 'react'

const Login = () => {
  const [hasLoggedIn, setHasLoggedIn] = useState(false)

  let button

  hasLoggedIn
    ? (button = <button onClick={() => setHasLoggedIn(false)}>SignOut</button>)
    : (button = <button onClick={() => setHasLoggedIn(true)}>SignIn</button>)

  return (
    <div>
      <div>{button}</div>
    </div>
  )
}

export default Login
