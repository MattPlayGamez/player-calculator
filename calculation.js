const totalplayers = document.getElementById('totalplayers')
const totalteams = document.getElementById('totalteams')
const resultsolo = document.getElementById('resultsolo')
const resultduos = document.getElementById('resultduos')
const btn = document.getElementById('btn')
const advancedbtn = document.getElementById('advancedbtn')



btn.addEventListener('click', (e) => {  
    e.preventDefault()
    setTimeout(() => {
        const calculatorplayers = document.getElementById('number1').value
        const calculatorteams = document.getElementById('number2').value
        var playsolo = 0
        var startduo = 0
        const players = totalplayers.value;
        const teams = totalteams.value;
        startduo = teams
        const multiplication = Math.round(teams * calculatorteams)
        const fresult = Math.round(players - multiplication)
        console.log(fresult)
        const solos = Math.round(fresult / -calculatorplayers)
        playsolo = solos
        const duo = Math.round(solos * calculatorteams)
        const duos = Math.round(startduo - playsolo)
        const verify = Math.round(duos * calculatorteams)
        const secondverification = Math.round(verify + solos)
        if (!secondverification === totalplayers) return alert('The\'re was an error without positive numbers ')
        var teamx = Math.round(teams * calculatorteams )
        //console.log(teams)
        if (solos < 0) return alert(`You're calculation isn't possible without positive numbers`)
        //console.log(solos)
        if (duos < 0) return alert(`You're calculation isn't possible without positive numbers`)
        //console.log(duos)
        resultsolo.innerText = `There are  ${solos} solos`
        resultduos.innerText = `There are ${duos} duos`
    }, 100);
})

advancedbtn.addEventListener('click', (e) => {
    e.preventDefault()
    const hider = document.getElementById('hider')
    if(hider.classList.value === "visible") return hider.className = "hidden"
    if(hider.classList.value === "hidden") return hider.className = "visible"
})
