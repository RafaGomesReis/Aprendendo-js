
function soltou(e) {
    console.log(e.shiftKey);
    console.log('Shift' + e.shiftKey);

}
const input = document.querySelector('input');
input.addEventListener('keyup', soltou);