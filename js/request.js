
// api


// for leader
const overlay = document.getElementById('overlay')
const API = 'https://randomuser.me/api/?results=9'



const loaderoverfly = (toggle) => {
    if (toggle) {
        overlay.classList.remove('hidden')
    } else {
        overlay.classList.add('hidden')

    }
}


const getdata = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()

        request.addEventListener('readystatechange', () => {
            if (request.readyState < 4) {
                // console.log('loading...');
                loaderoverfly(true)

            } else if (request.readyState === 4 && request.status == 200) {
                const data = JSON.parse(request.responseText)
                resolve(data.results);

                loaderoverfly(false)
            } else if (request.request == 4) {
                reject('Eror');
                loaderoverfly(false)

            }
        })

        request.open('GET', resource)
        request.send()
    })
}


const reload = () => {
    getdata(API)
        .then((data) => {
           updateUi(data);

        }).catch((err) => {
            console.log(err);

        })

}

document.addEventListener('DOMContentLoaded', reload)