import { menuArray } from '/data.js'

/* LISTENERS */
/* GENERATE */
function buildMenuListItemsHtml(menuItems) {
    return menuItems.map(item => {
        const { name, ingredients, emoji, price } = item;
        return ` 
            <li class="menu-item-row split-row">
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

function renderMenu(menuItems) {
    const html = buildMenuListItemsHtml(menuItems)
    document.getElementById('menu-list').innerHTML = html
}

/* INIT */
renderMenu(menuArray)