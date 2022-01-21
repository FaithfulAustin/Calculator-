var outp = document.getElementById("outpute")
var firstOpra = document.getElementById('firstoparand')
var secOpra = document.getElementById('secoparand')
var opra = document.getElementById('oprator')

function writeOne() {
     var num = 1
     var play = document.querySelector(".sou")
     play.innerHTML = '<audio id="audio" autoplay src="click.mp3"></audio>'


     if (outp.value !== "") {
          return outp.value = outp.value + '1'
     }
     else {
          return outp.value = num
     }
}
function writetwo() {
     var num = 2
     var play = document.querySelector(".sou")
     play.innerHTML = '<audio autoplay src="click.mp3"></audio>'

     if (outp.value !== "") {
          return outp.value = outp.value + '2'
     }
     else {
          return outp.value = num
     }

}
function writethree() {
     var num = 3
     var play = document.querySelector(".sou")
     play.innerHTML = '<audio autoplay src="click.mp3"></audio>'
     if (outp.value !== "") {
          return outp.value = outp.value + '3'
     }
     else {
          return outp.value = num
     }

}
function writefour() {
     var num = 4
     var play = document.querySelector(".sou")
     play.innerHTML = '<audio autoplay src="click.mp3"></audio>'
     if (outp.value !== "") {
          return outp.value = outp.value + '4'
     }
     else {
          return outp.value = num
     }

}
function writefive() {
     var num = 5
     var play = document.querySelector(".sou")
     play.innerHTML = '<audio autoplay src="click.mp3"></audio>'
     if (outp.value !== "") {
          return outp.value = outp.value + '5'
     }
     else {
          return outp.value = num
     }

}
function writesix() {
     var num = 6
     var play = document.querySelector(".sou")
     play.innerHTML = '<audio autoplay src="click.mp3"></audio>'
     if (outp.value !== "") {
          return outp.value = outp.value + '6'
     }
     else {
          return outp.value = num
     }

}
function writeseven() {
     var num = 7
     var play = document.querySelector(".sou")
     play.innerHTML = '<audio autoplay src="click.mp3"></audio>'
     if (outp.value !== "") {
          return outp.value = outp.value + '7'
     }
     else {
          return outp.value = num
     }

}
function write8() {
     var num = 8
     var play = document.querySelector(".sou")
     play.innerHTML = '<audio autoplay src="click.mp3"></audio>'
     if (outp.value !== "") {
          return outp.value = outp.value + '8'
     }
     else {
          return outp.value = num
     }

}
function write9() {
     var num = 9
     var play = document.querySelector(".sou")
     play.innerHTML = '<audio autoplay src="click.mp3"></audio>'
     if (outp.value !== "") {
          return outp.value = outp.value + '9'
     }
     else {
          return outp.value = num
     }

}
function write0() {
     var num = 0
     var play = document.querySelector(".sou")
     play.innerHTML = '<audio autoplay src="click.mp3"></audio>'
     if (outp.value !== "") {
          return outp.value = outp.value + '0'
     }
     else {
          return outp.value = num
     }

}

function write0() {
     var num = 0

     if (outp.value !== "") {
          return outp.value = outp.value + '0'
     }
     else {
          return outp.value = num
     }

}

function writedot() {
     var num = "."
     var play = document.querySelector(".sou")
     play.innerHTML = '<audio autoplay src="click.mp3"></audio>'
     if (outp.value !== "") {
          return outp.value = outp.value + '.'
     }
}
function divide() {
     var play = document.querySelector(".sou")
     play.innerHTML = '<audio autoplay src="click.mp3"></audio>'
     if (outp.value !== "") {
          firstOpra.value = outp.value
          opra.value = '/'
          outp.value = ' '
     }

}
function add() {
     var play = document.querySelector(".sou")
     play.innerHTML = '<audio autoplay src="click.mp3"></audio>'
     var outp = document.getElementById("outpute")
     var firstOpra = document.getElementById('firstoparand')
     var secOpra = document.getElementById('secoparand')
     var opra = document.getElementById('oprator')
     if (outp.value !== "") {
          firstOpra.value = outp.value
          opra.value = '+'
          outp.value = ' '
     }
}
function subtract() {
     var play = document.querySelector(".sou")
     play.innerHTML = '<audio autoplay src="click.mp3"></audio>'
     var outp = document.getElementById("outpute")
     var firstOpra = document.getElementById('firstoparand')
     var secOpra = document.getElementById('secoparand')
     var opra = document.getElementById('oprator')
     if (outp.value !== "") {
          firstOpra.value = outp.value
          opra.value = '-'
          outp.value = ' '
     }
}
function multiply() {
     var play = document.querySelector(".sou")
     play.innerHTML = '<audio autoplay src="click.mp3"></audio>'
     var outp = document.getElementById("outpute")
     var firstOpra = document.getElementById('firstoparand')
     var secOpra = document.getElementById('secoparand')
     var opra = document.getElementById('oprator')
     if (outp.value !== "") {
          firstOpra.value = outp.value
          opra.value = '*'
          outp.value = ' '
     }
}

function equalto() {
     var play = document.querySelector(".sou")
     play.innerHTML = '<audio autoplay src="click.mp3"></audio>'
     if (firstOpra.value !== "" && outp.value !== '') {
          secOpra.value = outp.value
     }
     //division
     if (firstOpra.value !== "" && secOpra.value !== "" && opra.value === '/') {
          outp.value = parseInt(firstOpra.value) / parseInt(secOpra.value)

          return outp.value
     }

     //add
     else if (firstOpra.value !== "" && secOpra.value !== "" && opra.value === '+') {
          outp.value = parseInt(firstOpra.value) + parseInt(secOpra.value)

          return outp.value
     }
     //subtract
     else if (firstOpra.value !== "" && secOpra.value !== "" && opra.value === '-') {
          outp.value = parseInt(firstOpra.value) - parseInt(secOpra.value)

          return outp.value
     }

     //multiply
     else if (firstOpra.value !== "" && secOpra.value !== "" && opra.value === '*') {
          outp.value = parseInt(firstOpra.value) * parseInt(secOpra.value)

          return outp.value
     }

}

function clear_all() {
     var play = document.querySelector(".sou")
     play.innerHTML = '<audio autoplay src="click.mp3"></audio>'
     outp.value = ' '
     firstOpra.value = ' '
     secOpra.value = ' '
     opra.value = ' '
}