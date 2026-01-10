import { menuArray } from '/data.js'

/* LISTENERS */
/* GENERATE */
function generateListItemsHtml(menuItems) {
    return menuItems.map(item => {
        const { name, ingredients, emoji, price } = item;
        return ` 
            <li class="menu-item">
                <div class="left-group">
                    <span class="item-emoji">${emoji}</span>
                    <div class="menu-item-info">
                        <h3 class="item-name">${name}</h3>
                        <p class="item-ingredients">${ingredients.join(', ')}</p>
                        <p class="item-price">£${price}</p>
                    </div>
                </div>
                <button class="add-item-btn">+</button>
            </li>
        `
    }).join(' ')
}
/* RENDER */
// coupled version
/*function renderMenuHtml() {
    document.getElementById('menu-list').innerHTML = generateListItemsHtml(menuArray)
}*/

// decoupled version
function renderMenu(menuItems) {
    const html = generateListItemsHtml(menuItems)
    document.getElementById('menu-list').innerHTML = html
}



/* INIT */
renderMenu(menuArray)