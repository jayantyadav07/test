import { useState } from "react";
export default function Form() {
  const [userData, setUserData] = useState({
    userName: '',
    userEmail: ''
  })
  const getUserData =()=> {
    console.log(userData)
  }
  return (
    <div>
      <input
        type="text" onChange={(e) => setUserData({ ...userData, username: e.target.value })}
      />
      <h1>{userData.userName}</h1>
      <button onClick={getUserData}>click</button>
    </div>
  )
}
