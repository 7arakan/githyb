const getData = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}

const postData = async (u, o) => {
    const res = await fetch(u, {
        method: 'POST',
        body: JSON.stringify(o),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
    return res.json()
}

const URL = "http://localhost:3000/USERS"
const butP = document.querySelector('.setBtn')
const butG = document.querySelector('.getBtn')
const users = document.querySelector('.users')

butP.addEventListener('click', async (caca) => {
    caca.preventDefault();
    const id = document.querySelector('input.id').value
    const name = document.querySelector('input.name').value
    const age = document.querySelector('input.age').value
    const gender = document.querySelector('input.gender').value

    let o = {
        "id": id,
        "name": name,
        "age": age,
        "gender": gender
    }

    await postData(URL, o)
})

butG.addEventListener('click', async (caca) => {
    caca.preventDefault()

    const data = await getData(URL)

    data.forEach(el => {
        users.insertAdjacentHTML(`beforeend`, `
            <div class="user">
                <p class="id">${el.id}</p>
                <p class="name">${el.name}</p>
                <p class="age">${el.age}</p>
                <p class="gender">${el.gender}</p>
            </div>
        `)
    })
})
