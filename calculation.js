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
        if (!secondverification === totalplayers) return alert('The\'re was an error without positive numbers ')
        var teamx = Math.round(teams * 2 )
        //console.log(teams)
        if (solos < 0) return alert(`You're calculation isn't possible without positive numbers`)
        //console.log(solos)
        if (duos < 0) return alert(`You're calculation isn't possible without positive numbers`)
        //console.log(duos)
        resultsolo.innerText = `The're are ${solos} solos`
        resultduos.innerText = `The're are ${duos} duos`
    }, 100);
})