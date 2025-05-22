const BASE_URL = 'https://neptunbk.vercel.app'

async function useGetAllMenu() {
  const res = await fetch(`${BASE_URL}/categories`)
  return await res.json()
}
async function useGetProducts(limit=10, page=1) {
  const res = await fetch(`${BASE_URL}/products?limit=${limit}&page=${page}`)
  return await res.json()
}
async function useGetProdbyDisc() {
  const res = await fetch(`${BASE_URL}/products/discounted`)
  return await res.json()
}
async function useGetProdbyPopular() {
  const res = await fetch(`${BASE_URL}/products/populyar`)
  return await res.json()
}
async function useGetProdbySubId(id, limit=12, page=1) {
  const res = await fetch(`${BASE_URL}/products/subcategory/${id}?limit=${limit}&page=${page}`)
  return await res.json()
}


export {useGetAllMenu, useGetProducts, useGetProdbyDisc, useGetProdbyPopular, useGetProdbySubId}