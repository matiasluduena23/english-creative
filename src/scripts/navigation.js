const hamburger = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation')

hamburger.addEventListener('click', (e) => {
    navigation.classList.toggle('expanded');
    
})

const items = navigation.querySelectorAll('a');
items.forEach((item) => {
    item.addEventListener('click', () => {
        navigation.classList.remove('expanded');
    })
})