import * as actions from './actionTypes';
//note: for now we set to export list manually
import {setExportList as setExportListTeachers} from '../teachers/actions';
import { setExportList as setExportListDays } from '../days/actions';

const exportToHtmlRequest = () => ({type: actions.EXPORT_TO_HTML_REQUEST});

const exportToHtmlError = () => ({type: actions.EXPORT_TO_HTML_ERROR});

const exportToHtmlSuccess = () => ({type: actions.EXPORT_TO_HTML_SUCCESS});

const exportToHtmlServer  = ({scheduleId, teachers, days, dates}) => {
    return dispatch => {
        dispatch(exportToHtmlRequest);

        fetch('/export/html', {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                dates,
                scheduleId,
                teachers,
                days
            })
        }).then(response => {
            return response.json();
        }).then(json => {
            dispatch(exportToHtmlSuccess);
        }).catch(error => {
            dispatch(exportToHtmlError);
        });
    };
};

//Note: now we take teachers and days from state, then it will be arguments
export const exportToHtml = () => {
    return (dispatch, getCurrentState) => {
        var state = getCurrentState(),
            teachers = state.teachers.data,
            days = state.days.data,
            scheduleId,
            dates = state.dates,
            teachersToExport,
            daysToExport;

        dispatch(setExportListDays(days));
        dispatch(setExportListTeachers(teachers));

        state = getCurrentState();
        teachersToExport = state.teachers.exportList;
        daysToExport = state.days.exportList;
        scheduleId = state.schedule.schedule.currentItemId;

        dispatch(exportToHtmlServer({
            scheduleId,
            teachers: teachersToExport,
            days: daysToExport,
            dates
        }));
    };
};