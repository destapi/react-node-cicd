export async function getUsers(){
    return await fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(json => {
        return json;
    })
}