
// api

// for leader
const overlay = document.getElementById('overlay')
const API = 'https://randomuser.me/api/?results=9'

const getdata = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                resolve(request.responseText)
            } else if (request.readyState === 4) {
                reject('error')
            }
        })

        request.open('GET', resource)
        request.send()
    })
}

getdata(API)
    .then(data => {
        console.log(JSON.parse(data))
    })
    .catch(err => {
        console.log(err)
    })