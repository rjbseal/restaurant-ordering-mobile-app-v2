import { menuArray } from '/data.js'

const orderIdsArray = [1, 1, 2, 1, 3, 3];
const orderIdQuantities = {
    1: 3,
    2: 2,
    3: 1
}

/* LISTENERS */
/* GENERATE */
function buildMenuListItemsHtml(menuItems) {
    return menuItems.map(item => {
        const { id, name, ingredients, emoji, price } = item;
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
                <button class="add-item-btn" data-id="${id}">+</button>
            </li>
        `
    }).join(' ')
}

// builds a li each time menu item added
function buildOrderItemHtml({ id, qty }) {

    const orderItem = menuArray.find(item => item.id === id)

    if (!orderItem) return '';

    const { name, price } = orderItem;
    const orderItemPrice = price * qty;

    return `
        <li class="order-item-row split-row">
            <div class="left-group">
                <h3 class="item-name">${name}</h3>
                 <div>
                    <span class="order-quantity">x${quantity}</span>
                    <button class="remove-item-btn">Remove</button>
                </div>
            </div>
            <span class="item-price">£${orderItemPrice}</span>
        </li>`
}

function buildOrderList(orderIdQuantities) {
    let html = '';
    for (const [id, qty] of Object.entries(orderIdQuantities)) {
        // console.log(`Item id: ${id} Qty: ${qty}`);
        html += `<li>id: ${id} Qty: ${qty}</li>`
    }
    return html
}

console.log(buildOrderList(orderIdQuantities))


/* RENDER */

function renderMenu(menuItems) {
    const html = buildMenuListItemsHtml(menuItems)
    document.getElementById('menu-list').innerHTML = html
}

function renderOrderList(listItems) {
    const orderListEl = document.getElementById('orders-list')

    const listHtml = buildOrderList(listItems)
    orderListEl.innerHTML = listHtml
}

/* INIT */
renderMenu(menuArray)
// renderOrderList(orderIdsArray)