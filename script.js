const modifyInputValue = (op, inputId) => {
    const input = document.getElementById(inputId)
    if (op === '+') {
        input.value++
    }
    else {
        input.value--
    }
}

const randomInt = () => {
    const from = Number(document.getElementById('from').value)
    const to = Number(document.getElementById('to').value)
    const amount = Number(document.getElementById('amount').value)
    const repeat = document.getElementById('repeat')
    const res = document.getElementById('random-generated')
    document.getElementById('random-generated').style.display = "flex"
    res.innerHTML = ''
    
    let randomNumbers = Array(amount)

    if(repeat.checked){
        for(let i = 0; i<amount; i++){
            randomNumbers.push(Math.floor(Math.random() * (to + 1 - from)) + from)
        }
    }
    else{
        for (let i = 0; i < amount; i++) {
            let number;
            do {
                number = Math.floor(Math.random() * (to + 1 - from)) + from;
            } while (randomNumbers.includes(number));
            randomNumbers[i] = number;
        }
    }

    for(let i = 0; i<randomNumbers.length; i++){
        res.innerHTML += `<span class="number">${randomNumbers[i]}</span>`
    }

}
