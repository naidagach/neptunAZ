import { useGetProdbySubId } from "../services/api.js"
import { scrollTop } from "../utility/scrollTo.js"

const kategoriya = document.getElementById('kategoriya')
const select2 = document.getElementById('select2')
const url = new URLSearchParams(location.search)
const id = url.get('id')
const page = url.get('page') || 1
let limit = url.get('limit') || 12
let isLoad = false
const pagesArr = [12, 25, 50, 75, 100]
const data = []

useGetProdbySubId(id, limit, page).then(info => {
  data.length = 0
  data.push(...info.products)
  showSub(info.products)
  handlePriceFiltre()
  handlePagination(info.totalPages, 12)
})

window.handleFiltre = (filt) => {
  document.getElementById(filt).classList.toggle('hidden')
}

function showSub(res) {
  content.innerHTML = ''
  res.map(item => {
    content.innerHTML += `
              <div onclick="location.href='../pages/detail.htm?id=${item.id}'" class=" overflow-hidden rounded-[7px] bg-white shadow-2xl py-4 one1:w-[48%] desk:w-[30%] desk1:w-[23%]">
                <div class="relative w-full h-full flex flex-col items-center gap-[15px]">
                    <img src="${item.img}" alt="" />
                    <h1 class="text-[#222] text-[10px] font-[600] uppercase">${item.name}</h1>
                    <h1 class="text-[#181818] text-[22px] font-[700]">${item.price}₼</h1>
                    <div class="flex flex-col gap-[10px] items-center">
                        <div class="flex items-center gap-[5px]">
                            <i class="fa-solid fa-minus text-or cursor-pointer"></i>
                            <p class="text-[12px] font-bold px-2">1</p>
                            <i class="fa-solid fa-plus text-or cursor-pointer"></i>
                        </div>
                        <div>
                          <button class="cursor-pointer text-white hover:bg-[#de7200] bg-or px-[21px] h-[31px] rounded-[15px] transition-all duration-200 ease-in font-[600] text-[12px]">Səbətə at</button>
                          <i class="fa-regular fa-heart text-or hover:bg-or hover:text-white p-2 rounded-[50%]"></i>
                          <i class="fa-solid fa-rotate text-or hover:bg-or hover:text-white p-2 rounded-[50%]"></i>
                        </div>
                    </div>
                </div>
              </div>`
  })
}

function handlePagination(arg, lim) {
  $('#btns').pagination({
    dataSource: Array(arg).fill('').map((_, i) => i + 1),
    pageSize: 1,
    pageNumber: page,
    callback: function(x) {
      url.set('page', x[0])
      const query = location.pathname + '?' + url.toString()
      history.pushState(null, '', query)
      if (isLoad) {
        useGetProdbySubId(id, lim, x[0]).then(info => {
          showSub(info.products)
        })
      }
      isLoad = true;
      scrollTop(0)
    }
})
}
window.changePages = () => {
  select2.innerHTML = pagesArr.map(p => `<option>${p}</option>`).join('')
  select2.value = limit
}
changePages()


window.changeAmount = () => {
  limit = select2.value
  url.set('limit', limit)
  const query = location.pathname + '?' + url.toString()
  history.pushState(null, '', query)
    useGetProdbySubId(id, limit, page).then(info => {
      showSub(info.products)
      handlePagination(info.totalPages, lim)
    })
}

function handlePriceFiltre() {
  const sort =  data.sort((a, b) => a.price - b.price)
  const minMax = [sort[0].price, sort.at(-1).price]
  $('#minPrice').html(minMax[0])
  $('#maxPrice').html(minMax[1])
  $( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: minMax[0],
      max: minMax[1],
      values: minMax,
      step: 0.01,
      slide: function(_, ui ) {
        $('#minPrice').html(ui.values[0])
        $('#maxPrice').html(ui.values[1])
        const yeniArr = data.filter(item => 
          item.price > ui.values[0] &&
          item.price < ui.values[1]
          )
          showSub(yeniArr)
      }
    });
  })
}
