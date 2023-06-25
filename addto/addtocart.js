const product = [
    {
        id: 0,
        image: 'flippps.jpg',
        title: 'Samsung Galaxy Z Fold4 5G 256 GB, 12 GB RAM, Beige, Mobile Phone   ',

        price: 40000
    },
    {
        id: 1,
        image: 'mbp-silver-select-202206.jfif',
        title: 'Customise your 13‑inch MacBook Pro - Silver <br>',
        price: 129900
    },
    {
        id: 2,
        image: 'shopping.webp',
        title: 'Nikon D5600 DSLR with 18-140mm Lens Kit',
        price: 1200
    },
    {
        id: 3,
        image: 'shopping (1).webp',
        title: 'Realme Pad 4 Gb Ram 64 Gb Rom 10.4 Inch With Wi-fi+4g Tablet Gold',
        price: 17999
    },
    {
        id: 4,
        image: 'MV7N2.jfif',
        title: 'AirPods (2nd generation)--Engrave a mix of emoji, text and numbers to make AirPods unmistakably yours.',
        price: 14900
    },
    {
        id: 5,
        image: 'shopping (2).webp',
        title: 'G.SKILL Trident Z RGB 16GB(2x8GB) DDR4 RAM 3200MHz Desktop Memory',
        price: 7499
    }
];
const categories = [...new Set(product.map((items) => { return items }))]
let i = 0;
document.getElementById('root').innerHTML = categories.map((items) => {
    var { image, title, price } = items;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src='${image}'</img>
                
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2><i class="fa-solid fa-indian-rupee-sign"></i> ${price}.00</h2>` +
        "<button onclick='addtocart(" + (i++) + ")'>Add to Cart</button>" +
        `</div>
        </div>`



    )
}).join('')

var cart = [];

function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}


function displaycart(a) {
    let j = 0, total = 0;
    document.getElementById('count').innerHTML = cart.length;
    document.getElementById('total').innerHTML = "&#x20B9;" + +".00";
    if (cart.length == 0) {
        document.getElementById('cardItem').innerHTML = 'Your Cart Is Empty';
    }
    else {
        document.getElementById('cardItem').innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total = total + price;
            document.getElementById('total').innerHTML = "&#x20B9;" + total + " .00"
            return (
                `<div class='card-item'>
                    <div class="row-img">
                        <img class='rowimg' src='${image}'>
                    </div>
                    <p style="font-size:15px;">${title}</p>
                    <h2 style="font-size:15px;"><i class="fa-solid fa-indian-rupee-sign"></i>${price}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            );
            
        }).join('');
    }
}


