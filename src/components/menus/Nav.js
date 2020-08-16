import React from 'react';
import TopNavbar from './TopNavbar';


export default function Nav({ je , logout, member }) {
  return (
    <TopNavbar je={je} logout={logout} member={member}/>
  );
}
