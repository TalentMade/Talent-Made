import React, { useEffect, useState } from "react"
import ProfileInfo from "./profileInfo";
import { IuserInfo } from "../models/userInfo";


export default function Profiles() {
  const [userData, setUserData] = React.useState<Array<IuserInfo>>([])

  const getData = () => {
    fetch('users.json', {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(async function(res) {
      const responseObj = await res.json();
      setUserData(responseObj)
    })
  }

  function clickHandler() {
    console.log('Clicked');
    return;
  }


  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Profiles</h2>
      <ul>
      {
        userData.map((userProfileInfo) => (
          <li key={userProfileInfo.id}>
            <ProfileInfo userProfile={userProfileInfo} clickHandler={clickHandler}/>
          </li>
        ))
      }
      </ul>
    </div>
  )
}