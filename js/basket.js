export let basket = JSON.parse(localStorage.getItem('basket')) || []

export function showBasket() {
  const basketDiv = document.getElementById('basketDiv')
  basketDiv.innerHTML = ''
    basket.map(item => {
        if (basket.length === 0) {
            basketDiv.innerHTML +=`<p class="text-center text-gray-500">Səbət boşdur</p>`
            return
        }else {
            basketDiv.innerHTML += ` 
                        <div onclick="location.href='../pages/detail.htm?id=${item.id}'" class="bg-[#f9fafb]  p-2 my-2 hover:bg-gray-100 rounded-lg shadow-2xl flex justify-around items-center">
                            <div class="flex gap-2 items-center">
                                <img class="w-[20%]" src="${item.img}" alt="" />
                                <div class="flex flex-col gap-2 desk1:flex-row desk1:items-center text-gray-600">
                                    <p class="py-2 font-medium">${item.name}</p>
                                    <p>x1</p>
                                    <p class="py-2 px-4 text-orange-500 font-semibold">${item.price}₼</p>
                                    <i onclick="removeFromBasket('${item.id}', event)" class="fa-solid fa-trash text-gray-500"></i>
                                </div>
                            </div>
                        </div>`
        }
      })
    }      
window.removeFromBasket = (id, e) =>{
    e.stopPropagation()
    basket = basket.filter(elem => elem.id != id)
    showBasket()
    localStorage.setItem('basket', JSON.stringify(basket))
}