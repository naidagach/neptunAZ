import { useProdById } from "../services/api.js"
import { basket, showBasket } from "./basket.js"

const content = document.getElementById('content')
const url = new URLSearchParams(location.search)
const id = url.get('id')
const dataDetail = []

useProdById(id).then(info =>{
	info.count = 1
  dataDetail.length = 0
  dataDetail.push(info)
  showDetail()
})
function showDetail() {
const item = dataDetail[0]
content.innerHTML = `
              <div class="flex flex-col items-center justify-center desk:flex-row desk:justify-start! px-4">
                <div class="flex flex-col gap-2">
                  <img class="rounded-2xl col-span-2 overflow-hidden w-[100%] desk:w-[50%]" src="${item.img[0]}" alt="" />
                  <div class="desk:flex items-center gap-4 hidden">
                    <img class="rounded-2xl overflow-hidden desk:w-[18%]" src="${item.img[0]}" alt="">
                    <img class="rounded-2xl overflow-hidden desk:w-[18%]" src="${item.img[0]}" alt="">
                  </div>
                </div>
                <div class="my-2 flex flex-col items-center desk:items-start justify-center gap-2">
                  <h2 class="font-bold text-[20px] mb-2">${item.name}</h2>
                  <div class="flex gap-2 items-center justify-center">
                    <svg viewBox="64 64 896 896" focusable="false" data-icon="star" width="1em" height="1em" fill="#fadb14" aria-hidden="true"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg>
                    <svg viewBox="64 64 896 896" focusable="false" data-icon="star" width="1em" height="1em" fill="#fadb14" aria-hidden="true"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg>
                    <svg viewBox="64 64 896 896" focusable="false" data-icon="star" width="1em" height="1em" fill="#fadb14" aria-hidden="true"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg>
                    <svg viewBox="64 64 896 896" focusable="false" data-icon="star" width="1em" height="1em" fill="#fadb14" aria-hidden="true"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg>
                    <svg viewBox="64 64 896 896" focusable="false" data-icon="star" width="1em" height="1em" fill="#fadb14" aria-hidden="true"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg>
                    <p class="text-[14px]">0 serh</p>
                    <p class="text-[14px]">| Serh yaz</p>
                  </div>
                  <p class="text-[14px] mb-1">Model: <span class="font-bold text-[#545e6d]">930201</span></p>
                  <p class="text-[14px] mb-4">Movcudluq: <span class="font-bold text-[#545e6d]">✓</span></p>
                  <h1 id="qiymet" class="text-[30px] text-or mb-4 font-bold">${(item.price * item.count).toFixed(2)}</h1>
                  <div class="flex items-center gap-2">
                    <p onclick="changeAmount(-1)" class="bg-[#e5e7eb] rounded-[50%] p-2 w-[32px] h-[32px] flex justify-center items-center font-bold text-xl cursor-pointer">-</p>
                    <p id="amount" class="text-[20px]">${item.count}</p>
                    <p onclick="changeAmount(1)" class="bg-[#e5e7eb] rounded-[50%] p-2 w-[32px] h-[32px] flex justify-center items-center font-bold text-xl cursor-pointer">+</p>
                    <p class="text-[20px]">Eded</p>
                  </div>
                  <div>
                    <button onclick='addToBasket(${JSON.stringify(item)}, event)' class="cursor-pointer text-white hover:bg-[#de7200] bg-or px-[21px] h-[31px] rounded-[15px] transition-all duration-200 ease-in font-[600] text-[12px]">Səbətə at</button>
                    <i class="fa-regular fa-heart text-or hover:bg-or hover:text-white p-2 rounded-[50%]"></i>
                    <i class="fa-solid fa-rotate text-or hover:bg-or hover:text-white p-2 rounded-[50%]"></i> 
                  </div>
                </div>
              </div>`
}

window.changeAmount = (x) =>{
	const amount = document.getElementById('amount')
	const qiymet = document.getElementById('qiymet')
	const item = dataDetail[0]
  if (item.count + x > 0) {
    item.count = item.count + x
    amount.innerHTML = item.count 
    qiymet.innerHTML = (item.price * item.count).toFixed(2) + '₼'
  }
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
