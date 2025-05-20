import { useGetProdbyDisc, useGetProdbyPopular, useGetProducts } from "../services/api.js"

useGetProducts().then(info => {
  show('swiper1', info.products)
})
useGetProdbyDisc().then(info => {
  show('swiper2', info.products, true)
})
useGetProdbyPopular().then(info => {
    if (info.totalProducts == 0) {
        useGetProducts(20, 12).then(info => {
            show('swiper3', info.products)
          })
    } else {
        show('swiper3', info.products,)
    }
})

function show(id, data, discounted = false) {
    const elem = document.getElementById(id)
    if (elem) {
        elem.innerHTML = ''
        data.map(item => {
            elem.innerHTML += `
                      <div class="swiper-slide overflow-hidden rounded-[7px] bg-white py-2">
                          <div class="relative w-full h-full flex flex-col items-center justify-around gap-[15px] min-h-[375px]">
                              <i
                                  class="fa-regular fa-heart cursor-pointer text-or absolute right-[20px] top-[15px] z-[20]"></i>
                              <img class="h-[200px]" src="${item.img}" alt="" />
                              <h1 class="text-[#222] text-[10px] font-[600] uppercase">${item.name}</h1>
                              
                              ${discounted ? 
                                    `<div class="flex items-center gap-[10px]">
                                    <div
                                        class="yumru transition-all duration-200 ease-linear h-[36px] w-[36px] text-[#4e4e4e] rounded-full bg-[#ffd9c0] grid place-items-center">
                                        <span class=" text-[12px] font-[700]">-${item.discount}</span>
                                    </div>
                                    <div class="flex flex-col">
                                        <h2 class="text-[#999] text-[16px] font-[400] line-through">2.30₼</h2>
                                        <h1 class="text-[#181818] text-[22px] font-[700]">${item.totalPrice.toFixed(2)}₼</h1>
                                    </div>
                                </div>` :
                                `<h1 class="text-[#181818] text-[22px] font-[700]">${item.price}₼</h1>`
                            }
                              <div class="flex flex-col gap-[10px] items-center">
                                  <div class="flex items-center gap-[5px] ">
                                      <i class="fa-solid fa-minus text-[or] cursor-pointer"></i>
                                      <div class="flex items-center">
                                          <input id="miqInp" value="1" type="number"
                                              class="text-right h-[26px] p-[9px] w-[39px] text-[12px] text-[#3d3d3d] font-[700] outline-none" />
                                          <span class="text-[11px] text-[#000]">Ədəd</span>
                                      </div>
                                      <i class="fa-solid fa-plus text-or cursor-pointer"></i>
                                  </div>
                                  <button
                                      class="cursor-pointer text-white hover:bg-[#de7200] bg-or px-[21px] h-[31px] rounded-[15px] transition-all duration-200 ease-in font-[600] text-[12px]">Səbətə
                                      at</button>
                              </div>
                          </div>
                      </div>`
          })
    }
}