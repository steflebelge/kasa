function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

function fetchUrl(url){
    return fetch(url)
        .then(retourPromesseFetch => {
            return retourPromesseFetch.json()
                .then(retourPromesseJson => {
                    return retourPromesseJson;
                })
                .catch(err => {
                    console.log("erreur : " + err.toString());
                    throw err;
                })
        })
        .catch(err => {
            console.log("erreur : " + err.toString());
            throw err;
        });
}


export {sleep, fetchUrl};
