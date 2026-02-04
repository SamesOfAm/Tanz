if(document.querySelector('.top-navigation')) {
  const topNavigation = document.querySelector('.top-navigation')
  window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
      topNavigation.classList.add('fixed')
    } else {
      topNavigation.classList.remove('fixed')
    }
  })
}
