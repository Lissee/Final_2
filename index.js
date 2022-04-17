const requestClientPath = 'img.json';
let container = document.querySelector('.images');
let albums;

function sendRequest (method, url, body = null) {
    return new Promise((resolve, reject) =>
    {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)

        xhr.responseType = 'json'
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else
                resolve(xhr.response)
        }

        xhr.onerror = () => {
            reject(xhr.response)
        }

        xhr.send(JSON.stringify(body))
    })
}

sendRequest('GET', requestClientPath)
    .then(data => {
        // data - объект, к элементам которого можно обращаться как к массиву
        // альбомов data[data.length-1]['albumId']
        // фото в альбоме - data[data.length-1]['id']

        console.log(data)

        createContainer (data[data.length-1]['albumId'], data[data.length-1]['id'], data);
        albums = document.querySelectorAll('div.album');
    })
    .catch(err => console.log(err))

function createContainer (album, photos, json) {
    let j = 0;
    let counter = 0;
    for (let i = 0; i < album; i++) {
        j = 0;
        let albumHTML = document.createElement("div");
        let name = document.createElement("p");
        albumHTML.setAttribute("value", '' + i);
        albumHTML.classList.add('album');
        name.textContent = json[counter]['name'];
        albumHTML.appendChild(name);
        container.appendChild(albumHTML);

        while (counter !== photos && json[counter]['albumId'] === i+1) {
            let photoHTML = document.createElement("div");
            photoHTML.setAttribute("value-i", '' + i);
            photoHTML.setAttribute("value-j", '' + j);
            let photo = document.createElement("img");
            photo.src = json[counter]['url'];
            photoHTML.appendChild(photo);

            photoHTML.classList.add('photo');
            albumHTML.appendChild(photoHTML);
            j += 1;
            counter += 1;
        }
    }
}

// обрабатываем нажатия на обложку альбома и название
window.addEventListener("click", (e) => {
    let parent = e.target.parentNode.parentNode;
    if (albums[parent.getAttribute('value')] && !albums[parent.getAttribute('value')].classList.contains('modal')) {
        albums[e.target.parentNode.getAttribute('value-i')].classList.add('modal')
        document.body.style.overflow = 'hidden';

        // добавляем крестик, как выход из альбома
        let x = document.createElement("div");
        x.classList.add('cross');
        x.textContent = 'x';
        albums[e.target.parentNode.getAttribute('value-i')].appendChild(x);

        x.addEventListener("click", () => {
            document.querySelector('.modal').classList.remove('modal')
            document.body.style.overflow = 'auto';
            albums[e.target.parentNode.getAttribute('value-i')]
                .removeChild(albums[e.target.parentNode
                    .getAttribute('value-i')].lastChild);
        })
    }
}, false)

