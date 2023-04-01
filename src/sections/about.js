const aboutPage = document.createElement('div')
const aboutH2 = document.createElement('h2')
const aboutPara = document.createElement('p')

aboutH2.innerHTML = 'Our Story'
aboutPara.innerHTML = 'Our vegan restaurant is all about celebrating plant-based cuisine in a modern, vibrant setting. We aim to create a welcoming space where people can come together to enjoy delicious, healthy and cruelty-free food.'

aboutPage.appendChild(aboutH2)
aboutPage.appendChild(aboutPara)
aboutPage.classList = ' about'
content.appendChild(aboutPage)