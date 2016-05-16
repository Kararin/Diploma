import React from 'react';

const ScheduleDates  = ({
    startDate,
    endDate
}) => (
    <div className = 'dates-container'>
        <div className = 'dates'>
            {startDate} - {endDate}
        </div>
    </div>
)

export default ScheduleDates;