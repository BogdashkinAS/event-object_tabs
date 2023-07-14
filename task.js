const tabArray = Array.from(document.querySelectorAll('.tab'))
const tabContent = Array.from(document.querySelectorAll('.tab__content'))

tabArray.forEach((tabNew) => {
    tabNew.addEventListener('click', (event) => {
        const activeTab = document.querySelector('.tab_active')
        const activeContent = document.querySelector('.tab__content_active')
        activeTab.classList.remove('tab_active')
        activeContent.classList.remove('tab__content_active')
        tabNew.classList.add('tab_active')
        let activeTabNew = tabArray.indexOf(tabNew)
        tabContent[activeTabNew].classList.add('tab__content_active')
        event.preventDefault()
    })
})