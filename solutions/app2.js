function sorterPromise(strings) {
    const returnPromis = new Promise((resolve, reject) => {
        if (strings.every(i => (typeof i === "string"))) {
            resolve(strings.sort())
        } else {
            reject("Error: Not all elements are string type!")
        }
    })
    return returnPromis;
}





export default sorterPromise;