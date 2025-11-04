const btn = document.createElement('button');
btn.textContent = 'Klicka här';
document.body.appendChild(btn);

btn.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            if (!res.ok) throw new Error('Nätverksfel eller ogiltig förfrågan');
            return res.json();
        })
        .then(data => {
            const user = data[3]; // fjärde användaren i arrayen
            if (user) {
                console.log('Användare:', user.name); // använd "name" istället för first_name
            } else {
                console.log('Ingen användare på index 3');
            }
        })
        .catch(error => {
            console.error('Fel:', error.message);
        });
});
