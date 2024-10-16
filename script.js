const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0
let timesClicked = 0

loveMe.addEventListener('click', (e) => {
    if(clickTime === 0) {
        clickTime = new Date().getTime()
    } else {
        if((new Date().getTime() - clickTime) < 800) {//If the user clicks again within 800 milliseconds of the first click ((new Date().getTime() - clickTime) < 800), it's considered a double-click.
            createHeart(e)
            clickTime = 0
        } else {
            clickTime = new Date().getTime()
        }
    }
})

const createHeart = (e) => {
    const heart = document.createElement('i')//Creates a new <i> element, which is typically used for icons.
    heart.classList.add('fas')
    heart.classList.add('fa-heart')
    //e.clientX and e.clientY: Capture the X and Y coordinates of the mouse pointer relative to the viewport when the click event occurred.

    const x = e.clientX
    const y = e.clientY

    //Get the position of the .loveMe element relative to its offset parent (usually the nearest positioned ancestor).

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    loveMe.appendChild(heart)//loveMe.appendChild(heart): Adds the newly created and positioned heart element to the .loveMe container, making it visible on the screen

    times.innerHTML = ++timesClicked

    setTimeout(() => heart.remove(), 1000)
}