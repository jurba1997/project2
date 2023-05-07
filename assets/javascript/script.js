window.addEventListener('load', () =>{
    const form = document.querySelector('#task-form')
    const input = document.querySelector('#task-input')
    const list_el = document.querySelector('#tasks')

    form.addEventListener('submit', (e) =>{
        e.preventDefault()

    const task = input.value

    if(!task){
        alert("Please fill out the field.");
        return;
    }
    })
})