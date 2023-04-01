const hero = function() {
    const hero = document.createElement('div')
const tagline = document.createElement('div')
const h1 = document.createElement('h1')
const para = document.createElement('p')

const restoImg = document.createElement('div')
const img1 = document.createElement('img')
const img2 = document.createElement('img')
const img3 = document.createElement('img')

const menuBtn = document.createElement('button')

h1.innerHTML = 'Welcome to the Green Oasis'
para.innerHTML = 'Where every dish is a celebration of life.'

img1.src = './src/images/hero-image-1.png'
img2.src = './src/images/hero-image-2.png'
img3.src = './src/images/hero-image-3.png'

menuBtn.innerHTML = 'MENU'

tagline.appendChild(h1)
tagline.appendChild(para)

restoImg.appendChild(img1)
restoImg.appendChild(img2)
restoImg.appendChild(img3)

hero.appendChild(tagline)
hero.appendChild(restoImg)
hero.appendChild(menuBtn)

content.appendChild(hero)

hero.classList = ' hero-section'
restoImg.classList = ' resto-img'

menuBtn.classList = 'menu-btn'
}

export default hero;