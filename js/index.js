import { useGetProdbyDisc, useGetProdbyPopular, useGetProducts } from "../services/api.js"
import { basket, showBasket } from "./basket.js"
import { likes, showLikes } from "./wishlist.js"

export let products = []

useGetProducts().then(info => {
    allProd(info.products)
    show('swiper1', info.products)
})
useGetProdbyDisc().then(info => {
    allProd(info.products)
  show('swiper2', info.products, true)
})
useGetProdbyPopular().then(info => {
    if (info.totalProducts == 0) {
        useGetProducts(20, 12).then(info => {
            allProd(info.products)
            show('swiper3', info.products)
          })
    } else {
        show('swiper3', info.products,)
    }
})

export function allProd(res) {
    res.map(item => {
        const yeniArr = products.find(elem => elem.id === item.id)
        if (!yeniArr) {
            products.push({...item, count: 1})
        }
    })
}

function show(id, data, discounted = false) {
    const elem = document.getElementById(id)
    if (elem) {
        elem.innerHTML = ''
        data.map(item => {
            const count = (products.find(elem => elem.id === item.id)).count || 1
            elem.innerHTML += `
                      <div onclick="location.href='../pages/detail.htm?id=${item.id}'" class="swiper-slide overflow-hidden rounded-[7px] bg-white py-2 flex justify-between items-center cursor-pointer">
                          <div class="relative w-full flex flex-col items-center  gap-[15px]">
                              <i onclick='addToWishlist(${JSON.stringify(item)}, event)' class="fa-regular fa-heart cursor-pointer text-or absolute right-[20px] top-[15px]"></i>
                              <img class="h-[200px]" src="${item.img}" alt="" />
                              <h1 class="text-[#222] text-[10px] font-[600] uppercase min-h-[30px]!">${item.name}</h1>
                              ${discounted ? 
                                    `<div class="flex items-center gap-[10px]">
                                    <div
                                        class="yumru transition-all duration-200 ease-linear h-[36px] w-[36px] text-[#4e4e4e] rounded-full bg-[#ffd9c0] grid place-items-center">
                                        <span class="text-[12px] font-[700]">-${item.discount}%</span>
                                    </div>
                                    <div class="flex flex-col">
                                        <h2 class="text-[#999] text-[16px] font-[400] line-through">${item.price}₼</h2>
                                        <h1 class="text-[#181818] text-[22px] font-[700]">${item.totalPrice.toFixed(2)}₼</h1>
                                    </div>
                                </div>` :
                                `<h1 class="text-[#181818] text-[22px] font-[700]">${item.price}₼</h1>`
                            }
                              <div class="flex flex-col gap-[10px] items-center">
                                  <div class="flex items-center gap-[5px]">
                                      <i onclick="changeAmount(${item.id}, -1, event)" class="fa-solid fa-minus text-[or] cursor-pointer"></i>
                                      <div class="flex items-center">
                                          <p id="amount-${item.id}" class="text-right px-2 text-[#3d3d3d] font-[700] outline-none">${count}</p>
                                          <span class="text-[11px] text-[#000]">Ədəd</span>
                                      </div>
                                      <i onclick="changeAmount(${item.id}, 1, event)" class="fa-solid fa-plus text-or cursor-pointer"></i>
                                  </div>
                                  <button onclick='addToBasket(${JSON.stringify(item)}, event)' class="cursor-pointer text-white hover:bg-[#de7200] bg-or px-[21px] h-[31px] rounded-[15px] transition-all duration-200 ease-in font-[600] text-[12px]">Səbətə at</button>
                              </div>
                              <div class="max-yanyana:hidden cursor-pointer absolute top-[20%] transition-all duration-400 ease-in-out opacity-0 translate-y-[-140%] group-hover:opacity-[100%] group-hover:translate-y-0 bg-or h-[30px] w-[30px] rounded-full grid place-items-center">
                                <div onmouseenter="this.querySelector('div').style.opacity='1'" onmouseleave="this.querySelector('div').style.opacity='0'" class=" relative grid place-items-center">
                                    <i class="fa-solid fa-magnifying-glass text-white text-[14px]"></i>
                                    <div class="opacity-0 transition-all pointer-events-none duration-400 ease-in-out absolute top-[-280%] bg-[#000] rounded-[2px] " style="opacity: 0;">
                                        <div class="relative px-[15px] py-[3px] grid place-items-center">
                                            <span class="text-[11px] font-[500] text-nowrap text-white">Sürətli baxış</span>
                                            <span class="absolute top-[45%]">⏷</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          </div>
                      </div>`
          })
    }
}

window.addToWishlist = (item, e) => {
    e.stopPropagation()
    const yoxla = likes.find(elem => elem.id == item.id)
    console.log(likes);
    if (!yoxla) {
        item.count = 1
        likes.push(item)
        showLikes()
        localStorage.setItem('likes', JSON.stringify(likes))
    }
}

window.changeAmount = (id, x, e) =>{
    e.stopPropagation()
    const item = products.find(elem => elem.id == id)
    const amount = document.getElementById(`amount-${id}`)
    if (item.count + x > 0) {
        item.count += x
        amount.innerHTML = item.count
    } else return
}

window.addToBasket = (item, e) => {
    e.stopPropagation()
    const check = basket.find(elem => elem.id == item.id) 
    if(!check) {
        basket.push(item)
    } else{
        check.count += item.count
    }
    showBasket()
    localStorage.setItem('basket', JSON.stringify(basket))
}
showBasket()
