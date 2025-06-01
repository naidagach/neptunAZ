import { useGetAllMenu, useSearh } from "../services/api.js"

const firstbars = document.getElementById('firstbars')
const secondbars = document.getElementById('secondbars')
const meyvebar = document.getElementById('meyvebar')
const stickyNav = document.getElementById('stickyNav')
const menu = document.getElementById('menu')
const searchInp = document.getElementById('searchInp')
const searchDiv = document.getElementById('searchDiv')
const basketDiv = document.getElementById('basketDiv')
const dataCat = []
const dataImg = [ '1meyvə.svg', '2ət.svg', '3Qastronom.svg', '4ərzaq.svg',
                  '5Şirniyyat.svg', '6İçkilər.svg', '7Süd.svg', '8Uşaq.svg', 
                  '9Yuyucu.svg', '10Kosmetik.svg','11Məişət.svg', '12Konselyariya.svg', 
                  '13Heyvan-.svg', '14neptun-icon.svg', '15neptun-icon.svg', '16elektronika.svg']

 window.handleBars = (bar) => {
  if (bar === 'firstbars') {
    firstbars.classList.toggle('opacity-0')
    firstbars.classList.toggle('left-[-200%]')
    firstbars.classList.toggle('translate-x-full')
    firstbars.classList.toggle('left-0')
  } else if(bar === 'secondbars') {
    secondbars.classList.toggle('hidden')
  } else if (bar === 'meyvebar') {
    meyvebar.classList.toggle('hidden')
  }
  document.body.onclick = (e) => {
    if (
      !firstbars.contains(e.target) &&
      !secondbars.contains(e.target) &&
      !meyvebar.contains(e.target) &&
      !e.target.closest('[onclick*="handleBars"]')
    ) {
      firstbars.classList.add('opacity-0', 'translate-x-full', 'left-[-200%]');
      firstbars.classList.remove('left-0');
      secondbars.classList.add('hidden');
      secondbars.classList.remove('left-0');
      meyvebar.classList.add('hidden')

      document.body.onclick = null;
    }
  }
}
window.openBasket = () => {
  basketDiv.classList.toggle('hidden')
  if (!basketDiv.classList.contains('hidden')) {
  }
}
basketDiv.onclick = function (e) {
  e.stopPropagation()
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
  dataCat.map((item, i) => {
    menu.innerHTML += `
                  <div class="flex gap-2 items-center border-b border-[#ddd] relative hover:bg-[#ff840069]">
                    <img class="pl-2" src="/img/${dataImg[i]}"/>
                    <li class=" px-4 py-2 cursor-pointer group">
                      ${item.categoryName}
                      <div class="z-[9999] absolute w-[200px] border-l-2 border-or max-h-[210px] shadow-2xl overflow-y-scroll scroll-auto bg-white left-[100%] top-0 opacity-0 invisible transition-all duration-300 ease-in-out transform -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                        <ul>
                          ${item.subcategory.map(elem => {
                            return `<li class="px-1 py-2 cursor-pointer hover:text-or"><a href='../pages/category.htm?id=${elem.id}'>${elem.categoryName}</a></li>`
                          }).join('')
                        }
                        </ul>
                      </div>
                    </li>
                  </div>`
        })
}

function showSearch(data) {
  searchDiv.innerHTML = ''
  data.slice(0, 5).map(item => {
    searchDiv.innerHTML +=
              `<a href="../pages/detail.htm?id=${item.id}" class="flex justify-start items-center gap-4 border-b-[1px] border-[#ddd] p-2 hover:bg-[#ddd]">
                <img class="w-[25%]" src="${item.img}" alt="" />
                <div class="flex flex-col gap-2">
                    <p class="text-[12px]">${item.name}</p>
                    <p class="text-[23px] font-bold">${item.totalPrice.toFixed(2)}₼</p>
                </div>
              </a>`
  })
}

window.search = () => {
  const name = searchInp.value
  if ( name.trim().length >= 2) {
      searchDiv.classList.remove('hidden')
      useSearh(name).then(res => {
        console.log(res);
        showSearch(res.products)
      })
    } else if(name.trim().length < 2) {
      searchDiv.classList.add('hidden')
    }
    document.body.onclick = function(e) {
      if (!searchDiv.contains(e.target) && !searchInp.contains(e.target)) {
        searchDiv.classList.add('hidden')
      }
    }
}

window.enterEle = (e) => {
  if((e.keyCode == 13 || !e.keyCode) && searchInp.value.trim().length >= 2) {
    return location.href = '/pages/search.htm?search/' + searchInp.value
  } 
}