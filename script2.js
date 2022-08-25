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

const darkBtn = document.getElementById('Dark')
const lightBtn = document.getElementById('Light')
const rootElement = document.documentElement



const initialColors = {
    '--bg' : '#0000',
    '--color-text': '#fff'
}

const LightMode = {
    '--bg': '#ffff',
    '--colo-Text': '#0000',
}

darkBtn.addEventListener('click', changeTheme(LightMode))

lightBtn.addEventListener('click', changeTheme(LightMode)) 

function changeTheme (theme) {
    for(let prop in theme){
        changeProperty(prop, theme[prop])

    }
}

function changeProperty(property, value) {
    rootElement.style.setProperty(property,value)
}


