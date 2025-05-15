const BASE_URL = 'https://neptunbk.vercel.app'

async function useGetAllMenu() {
  const res = await fetch(`${BASE_URL}/categories`)
  return await res.json()
}
async function useGetProducts() {
  const res = await fetch(`${BASE_URL}/products`)
  return await res.json()
}


export {useGetAllMenu, useGetProducts}