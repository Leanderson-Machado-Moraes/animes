const som1 = document.getElementById('a1')
const som2 = document.getElementById('a2')
const som3 = document.getElementById('a3')
const som4 = document.getElementById('a4')
const som5 = document.getElementById('a5')
const som6 = document.getElementById('a6')
const im1 = document.getElementById('img1')
const im2 = document.getElementById('img2')
const im3 = document.getElementById('img3')
const im4 = document.getElementById('img4')
const im5 = document.getElementById('img5')
const im6 = document.getElementById('img6')

im1.addEventListener('click', () => {
    som1.src = "./soundtrack/BLEACHAUDIO.mpeg"
    som1.play()
})
im2.addEventListener('click', () => {
    som2.src = "./soundtrack/DBAUDIO.mpeg"
    som2.play()
})
im3.addEventListener('click', () => {
    som3.src = "./soundtrack/EVANGELIONAUDIO.mpeg"
    som3.play()
})
im4.addEventListener('click', () => {
    som4.src = "./soundtrack/NARUTOAUDIO.mpeg"
    som4.play()
})
im5.addEventListener('click', () => {
    som5.src = "./soundtrack/OPAUDIO.mpeg"
    som5.play()
})
im6.addEventListener('click', () => {
    som6.src = "./soundtrack/BNPAUDIO.mpeg"
    som6.play()
})
im1.addEventListener('dbclick', () => {
    som1.pause()
})
im2.addEventListener('dbclick', () => {
    som2.pause()
})
im3.addEventListener('dbclick', () => {
    som3.pause()
})
im4.addEventListener('dbclick', () => {
    som4.pause()
})
im5.addEventListener('dbclick', () => {
    som5.pause()
})
im6.addEventListener('dbclick', () => {
    som6.pause()
})