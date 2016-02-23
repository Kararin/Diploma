import React from 'react';
import TeacherPage from 'teacher/Page';

export default ({pageName}) => {
    return (
        <div>
            {pageName === 'teachers'? <TeacherPage/>: null}
        </div>
    );
}

//TODO: defaultPropss