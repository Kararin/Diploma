export default (uri) => {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();

        req.open('GET', uri, true);
        req.send();

        req.onreadystatechange = (argument) => {
            if (req.readyState === 4) {
                if (req.status !== 200 ) {
                    reject({
                        status: req.status,
                        text: req.statusText});
                } else {
                    try {
                        resolve(JSON.parse(req.responseText));
                    }
                    catch(e) {
                        resolve('Error with parsing');
                    }
                }
            }
        };
    });
};
