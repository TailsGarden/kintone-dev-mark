import style from 'github-fork-ribbon-css/gh-fork-ribbon.css'
style.use()

const $body = document.getElementsByTagName('body')[0]
$body.insertAdjacentHTML(
  'afterbegin',
  '<span class="github-fork-ribbon left-top" id="dev-ribbon" title="development"></span>'
)
const $devRibbon = document.getElementById('dev-ribbon')
$devRibbon.onclick = () => {
  $body.removeChild($devRibbon)
}
