const kategoriya = document.getElementById('kategoriya')
const marka = document.getElementById('marka')
const qiymet = document.getElementById('qiymet')


function handleFiltre(filt) {
  if(filt === 'qiymet') {
    qiymet.classList.toggle('hidden')
  }
  if(filt === 'marka') {
    marka.classList.toggle('hidden')
  }
  if(filt === 'kategoriya') {
    kategoriya.classList.toggle('hidden')
  }
}