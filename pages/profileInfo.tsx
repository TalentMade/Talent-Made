import { AppProps } from "next/app";
import React, { FunctionComponent } from "react";
import { IuserInfo } from '../models/userInfo';

interface ProfileProps {
  userProfile: IuserInfo,
  clickHandler: React.MouseEventHandler<HTMLDivElement>
}

export default function ProfileInfo({userProfile, clickHandler}: ProfileProps) {
  return (
    <div onClick={clickHandler}>
      {userProfile.firstname}
    </div>
  )
}