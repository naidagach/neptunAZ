import { useGetAllMenu, useGetProducts } from "../services/api.js"

const firstbars = document.getElementById('firstbars')
const secondbars = document.getElementById('secondbars')
const meyvebar = document.getElementById('meyvebar')
const stickyNav = document.getElementById('stickyNav')
const menu = document.getElementById('menu')
const products = document.getElementById('swiper1')
const dataCat = []
const dataPro = []

 window.handleBars = (bar) => {
  if (bar === 'firstbars') {
    firstbars.classList.toggle('left-[-100%]')
    firstbars.classList.toggle('left-0')
    firstbars.classList.toggle('opacity-0')
    firstbars.classList.toggle('translate-x-full')
    document.body.classList.toggle('overflow-hidden');
  } else if(bar === 'secondbars') {
    console.log('salslas');
    secondbars.classList.toggle('left-[-100%]')
    secondbars.classList.toggle('left-0')
    secondbars.classList.toggle('hidden!')
    secondbars.classList.toggle('opacity-0')
    secondbars.classList.toggle('translate-x-full')
    document.body.classList.toggle('overflow-hidden');
  } else if (bar === 'meyvebar') {
    // meyvebar.classList.toggle('hidden')
    meyvebar.classList.toggle('left-[-100%]')
    meyvebar.classList.toggle('left-0')
  }
}
// function sticky() {
//   if (window.scrollY > 700) {
//     stickyNav.classList.add('sticky', 'top-0')
//   }
// }
// window.onscroll = sticky;

useGetAllMenu()
.then(info => {
dataCat.length = 0
dataCat.push(...info)
showCategories()
})

function showCategories() {
  menu.innerHTML = ''
  dataCat.map(item => {
    menu.innerHTML += `
              <li class="border-b border-[#ddd] relative px-1 py-2 cursor-pointer hover:bg-[#ff840069] group">
                ${item.categoryName}
                <div class="z-[999] absolute w-[200px] bg-white left-[109%] top-0 opacity-0 invisible transition-all duration-300 ease-in-out transform -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                  <ul>
                    ${item.subcategory.map(elem => {
                      return `<li class="px-1 py-2 cursor-pointer hover:text-or"><a href='../pages/meyve.htm'>${elem.categoryName}</a></li>`
                    }).join('')
                  }
                  </ul>
                </div>
              </li>
              `
  })
}

useGetProducts
.then(info => {
  dataPro.length = ''
  dataPro.push(...info)
  showProducts()
})

function showProducts() {
  products.innerHTML = ''
  dataPro.products.map(item => {
    products.innerHTML += `<div class="swiper-slide overflow-hidden rounded-[7px]">
    <div class="relative w-full h-full flex flex-col  items-center gap-[15px]">
        <i
            class="fa-regular fa-heart cursor-pointer text-or absolute right-[20px] top-[15px] z-[20]"></i>
        <img src="${item.img}" alt="" />
        <h1 class="text-[#222] text-[10px] font-[600] uppercase">${item.name}</h1>
        <h1 class="text-[#181818] text-[22px] font-[700]">${item.price}₼</h1>
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