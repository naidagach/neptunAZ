import { useGetAllMenu } from "../services/api.js"

const firstbars = document.getElementById('firstbars')
const secondbars = document.getElementById('secondbars')
const meyvebar = document.getElementById('meyvebar')
const stickyNav = document.getElementById('stickyNav')
const menu = document.getElementById('menu')
const dataCat = []

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
              <li class="border-b border-[#ddd] px-4 py-2 cursor-pointer hover:bg-[#ff840069] group relative">
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
              `
  })
}

