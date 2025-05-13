const firstbars = document.getElementById('firstbars')
const secondbars = document.getElementById('secondbars')

function handleFirstBars() {
  firstbars.classList.toggle('left-[-100%]')
  firstbars.classList.toggle('left-0')
  firstbars.classList.toggle('opacity-0')
  firstbars.classList.toggle('translate-x-full')
  document.body.classList.toggle('overflow-hidden');
  // document.body.classList.toggle('pr-[10px]');
}
function handleSecondBars() {
  secondbars.classList.toggle('left-[-100%]')
  secondbars.classList.toggle('left-0')
  secondbars.classList.toggle('opacity-0')
  secondbars.classList.toggle('translate-x-full')
  document.body.classList.toggle('overflow-hidden');
  // document.body.classList.toggle('pr-[10px]');
}
