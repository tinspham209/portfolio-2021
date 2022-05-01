export const disableScroll = () => {
  document.addEventListener('wheel', preventDefault, {
    passive: false
  })
}

export const enableScroll = () => {
  document.removeEventListener('wheel', preventDefault, false)
}

export const preventDefault = e => {
  e = e || window.event
  if (e.preventDefault) {
    e.preventDefault()
  }
  e.returnValue = false
}
