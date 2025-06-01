import { useSearh } from "../services/api.js"

const content = document.getElementById('content')
const url = new URLSearchParams(location.search)
const name = url.get('name')

useSearh(name).then(info => {
  showSearch(info.products)
})

function showSearch(res) {
  content.innerHTML = ''
  res.map(item => {
    content.innerHTML += `
              <div onclick="location.href='../pages/detail.htm?id=${item.id}'" class=" overflow-hidden rounded-[7px] bg-white shadow-2xl py-4 one1:w-[48%] desk:w-[30%] yanyana:w-[23%]">
                <div class="relative w-full h-full flex flex-col items-center gap-[15px]">
                    <img src="${item.img}" alt="" />
                    <h1 class="text-[#222] text-[10px] font-[600] uppercase">${item.name}</h1>
                    <h1 class="text-[#181818] text-[22px] font-[700]">${item.price}₼</h1>
                    <div class="flex flex-col gap-[10px] items-center">
                        <div class="flex items-center gap-[5px]">
                            <i onclick="changeAmount(${item.id}, -1, event)" class="fa-solid fa-minus text-or cursor-pointer"></i>
                            <p id="amount-${item.id}" class="text-[12px] font-bold px-2">1</p>
                            <i onclick="changeAmount(${item.id}, 1, event)" class="fa-solid fa-plus text-or cursor-pointer"></i>
                        </div>
                        <div>
                          <button onclick='addToBasket(${JSON.stringify(item)}, event)' class="cursor-pointer text-white hover:bg-[#de7200] bg-or px-[21px] h-[31px] rounded-[15px] transition-all duration-200 ease-in font-[600] text-[12px]">Səbətə at</button>
                          <i class="fa-regular fa-heart text-or hover:bg-or hover:text-white p-2 rounded-[50%]"></i>
                          <i class="fa-solid fa-rotate text-or hover:bg-or hover:text-white p-2 rounded-[50%]"></i>
                        </div>
                    </div>
                </div>
              </div>`
  })
}
