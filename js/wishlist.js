const wishlist = document.getElementById('wishlist')
let likes = JSON.parse(localStorage.getItem('likes')) || []

function showLikes() {
    wishlist.innerHTML = ''
    likes.map(item => {
        wishlist.innerHTML += 
                        `<div class="bg-[#f9fafb] h-[100px] p-2 my-2 hover:bg-gray-100 rounded-lg shadow-2xl flex justify-around items-center">
                            <div class="flex gap-2 items-center">
                                <img class="w-[20%]" src="${item.img}" alt="" />
                                <div class="flex flex-col gap-2 desk1:flex-row">
                                <p class="py-2 px-4  font-medium">${item.name}</p>
                                <p class="py-2 px-4 text-orange-500 font-semibold">${item.price}</p>
                                </div>
                            </div>
                            <div class=" px-4 mt-2 sm:mt-0">
                                <button class="bg-orange-400 hover:bg-orange-500 text-white px-3 py-1 rounded-full cursor-pointer">🛒</button>
                                <button class="bg-white hover:bg-red-500 px-3 py-1 rounded-full transition cursor-pointer">❌</button>
                            </div>
                        </div>`

    })
}

function addToWishlist(item) {
    const yoxla = likes.find(elem => elem.id == item.id)
    console.log(likes);
    if (!yoxla) {
        item.count = 1
        likes.push(item)
        showLikes()
        localStorage.setItem('likes', JSON.stringify(likes))
    }
}