const list_items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
    "Item 11",
    "Item 12",
    "Item 13",
    "Item 14",
    "Item 15",
    "Item 16",
    "Item 17",
    "Item 18",
    "Item 19",
    "Item 20",
    "Item 21",
    "Item 22",
];

const list_element = document.getElementById('list');
const pagination_element = document.getElementById('pagenation');


let current_page = 1 
let rows = 5;

function DisplayList(items, wrapper, rows_per_page, page) {
    wrapper.innerHTML = ""
    console.log({page});
    page--;

    let start = rows_per_page * page
    let end = start + rows_per_page
    console.log({start});
    let paginatedItems = items.slice(start, end)
    console.log({paginatedItems});
    for (let i = 0; i < paginatedItems.length; i++) {
        let item = paginatedItems[i]

        let item_element = document.createElement('div')
        item_element.classList.add('item')
        item_element.innerHTML = item

        wrapper.appendChild(item_element)
    }
}

function SetupPagination (items, wrapper, rows_per_page) {
    wrapper.innerHTML = ''

    let page_count = Math.ceil(items.length / rows_per_page)
    for (let index = 1; index < page_count + 1; index++) {
        let btn = PaginationButton(index, items)
        wrapper.appendChild(btn)
    }
    console.log({page_count});
}

function PaginationButton (page, items) {
    let button = document.createElement('button')
    button.innerText = page;

    if ( current_page === page) {
        button.classList.add('active')
    }

    button.addEventListener('click', function(){
        current_page = page
        DisplayList(items, list_element, rows, current_page)

        current_button = document.querySelector('.pagenumbers button.active')
        current_button.classList.remove('active')

        button.classList.add('active')
    })

    return button
}

DisplayList(list_items, list_element, rows, current_page)
SetupPagination(list_items, pagination_element, rows)