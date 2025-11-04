const btn = document.createElement('button');
btn.textContent = 'Klicka här'
document.body.appendChild(btn);

btn.addEventListener('click', () => {
    fetch('https://reqres.in/api/users')
    .then (res => {
        if(!res.ok) {
            console.log('Problem')
            return
        }

        return res.json();
    })
    .then(data => {

    })
})