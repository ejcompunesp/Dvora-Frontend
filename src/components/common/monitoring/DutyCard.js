import React from 'react';
import { DutysCard } from '../../../views/dashboard/monitoring/styles/monitoring';

import { BsCalendar, BsClock } from 'react-icons/bs';
import { Card } from './styles/monitoring';

const DutyCard = ({date, elapsedTime, active}) => {
  return(
    <Card active={active}>
      <div>
        <BsCalendar/>
        <span>12/08</span>
      </div>
      <div className="line"/>
      <div>
        <BsClock/>
        <span>2hrs</span>
      </div>
    </Card>
  )
}

export default DutyCard;
