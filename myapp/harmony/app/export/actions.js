import * as actions from './actionTypes';

const exportToHtmlRequest = () => ({type: actions.EXPORT_TO_HTML_REQUEST});

const exportToHtmlError = () => ({type: actions.EXPORT_TO_HTML_ERROR});

const exportToHtmlSuccess = () => ({type: actions.EXPORT_TO_HTML_SUCCESS});


export const exportToHtml  = (scheduleId, dates) => {
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
                scheduleId
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