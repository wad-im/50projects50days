const progressBar = document.querySelector('.progress-bar')
const progressSteps = document.querySelectorAll('.progress-step')
const prev = document.getElementById('prev')
const next = document.getElementById('next')

let currentActive = 1

next.addEventListener('click', ()=>{
    currentActive++
    if (currentActive > progressSteps.length){
        currentActive = progressSteps.length
    }
    update()
})
prev.addEventListener('click', ()=>{
    currentActive--
    if (currentActive < 1){
        currentActive = 1
    }
    update()
})

function update () {
    progressSteps.forEach((step, idx)=>{
        if (idx < currentActive){
            step.classList.add('active')
        } else {
            step.classList.remove('active')
        }
    })

    const activeSteps = document.querySelectorAll('.active')
    progressBar.style.width = ((activeSteps.length - 1)/(progressSteps.length - 1) * 100) + '%'

    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === progressSteps.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }

}

