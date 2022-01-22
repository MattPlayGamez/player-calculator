const totalplayers = document.getElementById('totalplayers')
const totalteams = document.getElementById('totalteams')
const resultsolo = document.getElementById('resultsolo')
const resultduos = document.getElementById('resultduos')
const btn = document.getElementById('btn')



btn.addEventListener('click', (e) => {  
    e.preventDefault()
    setTimeout(() => {
        var playsolo = 0
        var startduo = 0
        const players = totalplayers.value;
        const teams = totalteams.value;
        startduo = teams
        const multiplication = Math.round(teams * 2)
        const fresult = Math.round(players - multiplication)
        const solos = Math.round(fresult / -1)
        playsolo = solos
        const duo = Math.round(solos * 2)
        const duos = Math.round(startduo - playsolo)
        const verify = Math.round(duos * 2)
        const secondverification = Math.round(verify + solos)
        if (!secondverification === totalplayers) return alert('The\'re was an error')
        var teamx = Math.round(teams * 2 )
        if (solos < 0) return alert(`You're calculation isn't possible`)
        if (teams < 0) return alert(`You're calculation isn't possible`)
        if (solos === 'NaN') return alert(`You're calculation isn't possible`)
        if (teams === 'NaN') return alert(`You're calculation isn't possible`)
        resultsolo.innerText = `The're are ${solos} solos`
        resultduos.innerText = `The're are ${duos} duos`
    }, 100);
})