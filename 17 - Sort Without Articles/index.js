const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog']
const bandList = document.getElementById("bands")

function strip(name) {
    return name.replace(/^(a |the |an )/i, '').trim()
}

const sortedBands = bands.sort((aBand, anotherBand) => strip(aBand) > strip(anotherBand) ? 1 : -1 )

bandList.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join("")