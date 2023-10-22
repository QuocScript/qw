let products = {
    data : [
        {
            productName : "S class Maybach",
            price : "$18",
            image : "https://www.mercedes-benz.com.vn/content/dam/hq/passengercars/cars/s-class/mercedes-maybach-s-class-z223-pi/modeloverview/10-2022/mercedes-maybach-s-class-z223-modeloverview-696x392-10-2022.png"
        },
        {
            productName : "Mustang",
            price : "$20",
            image : "https://imgd.aeplcdn.com/1280x720/cw/ec/23766/Ford-Mustang-Exterior-126883.jpg?wm=0&q=80"
        },
        {
            productName : "Challenger",
            price : "$200",
            image : "https://www.motortrend.com/uploads/sites/10/2023/05/2023-dodge-challenger-sxt-coupe-angular-front.png"
        }
    ]
}

for (let i of products.data) {

    let card = document.createElement("div")
    card.classList.add("card")

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("image-container")

    let image = document.createElement("img")
    image.setAttribute("src", i.image)
    imgContainer.appendChild(image)
    card.appendChild(imgContainer)

    let container = document.createElement("div")
    container.classList.add("container")

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerText =  i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);

}
document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value.toUpperCase()
    let cards = document.querySelectorAll(".card")
    let productsName = document.querySelectorAll(".product-name")
    let prices = document.querySelectorAll('h6')

    productsName.forEach((items, index) => {
        if (items.innerText.includes(searchInput)){
            cards[index].classList.remove("hide")
        } else{
            cards[index].classList.add("hide")
        }
    })
})
 
  
