/*
 * @Description:wut快速评教
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-09 20:46:46
 */
const a = document.querySelectorAll('.unit')
for (let i = 0; i < 9; i++) {
  a[i].firstElementChild.click()
}
const b = document.querySelectorAll('.buttonActive')
b[3].lastElementChild.firstChild.click()

// for (let i = 9; i < a.length; i++) {
//   a[i].children[2].checked = true
// }
// hiddenWj()
