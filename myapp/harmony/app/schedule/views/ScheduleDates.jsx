import React from 'react';

const ScheduleDates  = ({
    startDate,
    endDate
}) => (
    <div className>
        <div className = 'dates'>
            {startDate} - {endDate}
        </div>
    </div>
)

export default ScheduleDates;