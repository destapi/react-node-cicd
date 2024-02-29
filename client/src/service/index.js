export async function fetchTodos(){
    return await fetch('http://localhost:3000/todos')
    .then(res => res.json())
    .then(json => {
        return json;
    })
}