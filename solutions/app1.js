function converterPromise(strings) {
    const returnPromis = new Promise((resolve, reject) => {
        if (strings.every(i => (typeof i === "string"))) {
            resolve(strings.map(string => string.toUpperCase()))
        } else {
            reject("Error: Not all elements are string type!")
        }
    })
    return returnPromis;
}


export default converterPromise;