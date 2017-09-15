(function (win) {
  var h
  var docEl = document.documentElement

  function setUnitA () {
    var winWidth = docEl.getBoundingClientRect().width > 1242 ? 1242 : docEl.getBoundingClientRect().width
    win.rem = winWidth / 12.42
    docEl.style.fontSize = win.rem + 'px'
  }

  win.addEventListener('resize', function () {
    clearTimeout(h)
    h = setTimeout(setUnitA, 300)
  }, false)
  win.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      clearTimeout(h)
      h = setTimeout(setUnitA, 300)
    }
  }, false)

  setUnitA()
})(window)


// /*禁止浏览器整个页面滑动*/
// var overscroll = function (el) {
//   el.addEventListener('touchstart', function () {
//     var top = el.scrollTop,
//       totalScroll = el.scrollHeight,
//       currentScroll = top + el.offsetHeight
//     //If we're at the top or the bottom of the containers
//     //scroll, push up or down one pixel.
//     //
//     //this prevents the scroll from "passing through" to
//     //the body.
//     if (top === 0) {
//       el.scrollTop = 1
//     } else if (currentScroll === totalScroll) {
//       el.scrollTop = top - 1
//     }
//   })
//   el.addEventListener('touchmove', function (evt) {
//     // if the content is actually scrollable, i.e. the content is long enough
//     // that scrolling can occur
//     if (el.offsetHeight < el.scrollHeight)
//     { evt._isScroller = true; }
//   })
// }
// var scrollEle = document.querySelector('.scroll')
// if (scrollEle != null) {
//   overscroll(scrollEle)
// }

// document.body.addEventListener('touchmove', function (evt) {
//   // In this case, the default behavior is scrolling the body, which
//   // would result in an overflow.  Since we don't want that, we preventDefault.
//   if (!evt._isScroller) {
//     evt.preventDefault()
//   }
// })

