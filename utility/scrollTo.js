 export function scrollTop(top, smooth = true) {
  scroll({
    top,
    behavior: smooth ? "smooth" : "auto"
  })
}