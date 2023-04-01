import hero1 from '../images/hero-image-1.png'
import hero2 from '../images/hero-image-2.png'
import hero3 from '../images/hero-image-3.png'

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

menuBtn.addEventListener('click', btn)

h1.innerHTML = 'Welcome to the Green Oasis'
para.innerHTML = 'Where every dish is a celebration of life.'

img1.src = hero1;
img2.src = hero2;
img3.src = hero3;

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

function btn() {
    window.scrollTo(0, 1550);
  }
}

export default hero;