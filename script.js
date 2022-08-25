const currentTime = () => {
    const el = document.querySelector('h1')


    let date = new Date()
    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()
    let session = hh >= 12 ? 'PM':'AM'

    hh = hh < 10 ? `0${hh}` : hh
    mm = mm < 10 ? `0${mm}` : mm
    ss = ss < 10 ? `0${ss}` : ss
    
    let time = `${hh} : ${mm} : ${ss} ${session}`
    el.innerHTML = time

}

currentTime();
setInterval(currentTime, 1000)

const lightBtn = document.getElementById("Light")

lightBtn.addEventListener('click', function(){
    let element = document.body
    element.classList.toggle('light-mode')
})




