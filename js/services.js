const tabs = document.getElementsByClassName('services_tab');
const tabsContainer = document.getElementById('tabs-container');
const contents = document.getElementsByClassName('services_item');

tabsContainer.addEventListener('click', event => {
    const target = event.target;
    const targetClassList = target.classList;
    
    if (targetClassList.contains('services_tab')) {
        for (let i = 0; i < contents.length; i++) {
            let tabItem = tabs[i];
            let servicesItem = contents[i];
            
            //(servicesItem.dataset.content === target.dataset.tab) ? servicesItem.classList.add('opened') : servicesItem.classList.remove('opened');

            if (servicesItem.dataset.content === target.dataset.tab) {
                tabItem.classList.add('opened');
                servicesItem.classList.add('opened');
            } else {
                tabItem.classList.remove('opened');
                servicesItem.classList.remove('opened');
            }
        }
    }
});
