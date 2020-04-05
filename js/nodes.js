// Генерация тоста
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
// Система калькулирования и генерации кода
function generator(){
  var x = parseInt(document.getElementById("xgen").value);
  var y = parseInt(document.getElementById("ygen").value);
  var z = parseInt(document.getElementById("zgen").value);
  var name = document.getElementById("namegen").value;
  var number = parseInt(document.getElementById("numgen").value);
  var hand = parseInt(document.getElementById("handgen").value);
  var type = document.getElementById("typegen").value;
  var lcc1 = z / 50;
  var lcc2 = (x + 150) / 50;
  var lcc4 = (y - 150) / 100;
  var lcc3 = 1 - (lcc1 + lcc2 + lcc4);
  var plus = number + 1;
  var rez = document.getElementById("numgen").value = plus;
var chbox;
chbox=document.getElementById('checkbox-1');
if (chbox.checked) {
		  var rez = document.getElementById("rez").innerHTML += `<`+name+number+` Type="`+type+`"  X="`+x+`" Y="`+y+`" Z="`+z+`"  Mass=""  Fixed="0"  Visible="1"  NodesCount="4"  ChildNode1="Weapon-Node4_`+hand+`"  ChildNode2="Weapon-Node3_`+hand+`"  ChildNode3="Weapon-Node2_`+hand+`"  ChildNode4="Weapon-Node1_`+hand+`"  LCC1="`+lcc1.toFixed(2)+`" LCC2="`+lcc2.toFixed(2)+`" LCC3="`+lcc3.toFixed(2)+`" LCC4="`+lcc4.toFixed(2)+`" />\n`;
	}
	else {
		  var rez = document.getElementById("rez").innerHTML = `<`+name+number+` Type="`+type+`"  X="`+x+`" Y="`+y+`" Z="`+z+`"  Mass=""  Fixed="0"  Visible="1"  NodesCount="4"  ChildNode1="Weapon-Node4_`+hand+`"  ChildNode2="Weapon-Node3_`+hand+`"  ChildNode3="Weapon-Node2_`+hand+`"  ChildNode4="Weapon-Node1_`+hand+`"  LCC1="`+lcc1.toFixed(2)+`" LCC2="`+lcc2.toFixed(2)+`" LCC3="`+lcc3.toFixed(2)+`" LCC4="`+lcc4.toFixed(2)+`" />\n`;
	}
Toast.fire({
  icon: 'success',
  title: '<div class="sans">Generated!</div>'
})
}
document.getElementById("gen").onclick = function() {
  generator();
}

// Очистка кода из поля
function clear(){
var rez = document.getElementById("rez").innerHTML = ``;
Toast.fire({
  icon: 'success',
  title: '<div class="sans">Cleared!</div>'
})
}
document.getElementById("clear").onclick = function clickclear() {
  clear();
}

// Копирование кода из поля

function copy(){
   var copyText = document.getElementById("rez");
   copyText.select();
   document.execCommand("copy");
Toast.fire({
  icon: 'success',
  title: '<div class="sans">Copied__ !</div>'
})
}
document.getElementById("copy").onclick = function clickcopy() {
  copy();
}

// Создание отдельных компонентов отображаемых на сайте
	const drawer = mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
	const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(document.querySelector('.mdc-top-app-bar'));
	const listEl = document.querySelector('.mdc-drawer .mdc-list');
	topAppBar.listen('MDCTopAppBar:nav', () => {
	  drawer.open = !drawer.open;
	});
  const topAppBarElement = document.querySelector('.mdc-top-app-bar');
  mdc.textField.MDCTextField.attachTo(document.querySelector('.type-field'));
  mdc.textField.MDCTextField.attachTo(document.querySelector('.code-field'));
  mdc.textField.MDCTextField.attachTo(document.querySelector('.hand-field'));
  mdc.textField.MDCTextField.attachTo(document.querySelector('.num-field'));
  mdc.textField.MDCTextField.attachTo(document.querySelector('.name-field'));
  mdc.textField.MDCTextField.attachTo(document.querySelector('.z-field'));
  mdc.textField.MDCTextField.attachTo(document.querySelector('.y-field'));
  mdc.textField.MDCTextField.attachTo(document.querySelector('.mdc-text-field'));