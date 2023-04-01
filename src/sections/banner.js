import bannerImg from '../images/banner.png'

const banner = function() {
    const divImg = document.createElement('div')
const banner = document.createElement('img')

banner.src = bannerImg;

divImg.classList = " banner"

divImg.appendChild(banner)
content.appendChild(divImg)
}

export default banner;