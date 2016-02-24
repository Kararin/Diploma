import React from 'react';
import TeacherPage from 'teacher/Page';
import Positions from 'teacherPositions/Page';

export default ({pageName}) => {
    return (
        <div>
            <Positions
                display = {(pageName === 'teachersPositions')? 'block': 'none'}
            />
            <TeacherPage
               display = {(pageName === 'teachers')? 'block': 'none'}
            />
        </div>
    );
}
//TODO: defaultPropss