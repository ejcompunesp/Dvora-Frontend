import React, { memo } from 'react';

import { BsCalendar, BsClock } from 'react-icons/bs';
import { Card } from './styles/monitoring';

const DutyCard = memo(({duty, onClick, dutyId}) => {
  function timeConvert(n) {
    let num = n;
    let hours = (num / 60);
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    if(rminutes === 0) rminutes = "00";
    return rhours + ":" + rminutes;
  }
  const { createdAt, elapsedTime } = duty;
  let time = timeConvert(((elapsedTime/60)))
  let date = new Date(createdAt);
  date = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
  return(
    <Card active={duty.id === dutyId ? true : false} onClick={() => onClick(duty.id)}>
      <div>
        <BsCalendar/>
        <span>{date}</span>
      </div>
      <div className="line"/>
      <div>
        <BsClock/>
        <span>{time}</span>
      </div>
    </Card>
  )
});

export default DutyCard;
