<<<<<<< HEAD

/* ---ONMOUSEOVER--- */

function upDate(previewPic) {

  document.getElementById('image').innerHTML = previewPic.alt;
  document.getElementById('image').style.backgroundImage = `url('${previewPic.src}')`
}

/* ---ONMOUSEOUT--- */

function unDo() {

  document.getElementById('image').innerHTML = "Hover over an image below to display here."
  document.getElementById('image').style.backgroundImage = "none"
}

/* ---ONFOCUS--- */

function focusFunction(previewPic) {

  document.getElementById('image').innerHTML = previewPic.alt;
  document.getElementById('image').style.backgroundImage = `url('${previewPic.src}')`
}

/* ---ONBLUR--- */

function blurFunction() {
  
  document.getElementById('image').innerHTML = "Hover over an image below to display here."
  document.getElementById('image').style.backgroundImage = "none"
}

/* ---ADDING TABFOCUS--- */

function addTabFocus() {
  let myImages = document.querySelectorAll("img")
  for (let i = 0; i < myImages.length; i++) {
    myImages[i].setAttribute("tabindex", "0")
  }
=======

/* ---ONMOUSEOVER--- */

function upDate(previewPic) {

  document.getElementById('image').innerHTML = previewPic.alt;
  document.getElementById('image').style.backgroundImage = `url('${previewPic.src}')`
}

/* ---ONMOUSEOUT--- */

function unDo() {

  document.getElementById('image').innerHTML = "Hover over an image below to display here."
  document.getElementById('image').style.backgroundImage = "none"
}

/* ---ONFOCUS--- */

function focusFunction(previewPic) {

  document.getElementById('image').innerHTML = previewPic.alt;
  document.getElementById('image').style.backgroundImage = `url('${previewPic.src}')`
}

/* ---ONBLUR--- */

function blurFunction() {
  
  document.getElementById('image').innerHTML = "Hover over an image below to display here."
  document.getElementById('image').style.backgroundImage = "none"
}

/* ---ADDING TABFOCUS--- */

function addTabFocus() {
  let myImages = document.querySelectorAll("img")
  for (let i = 0; i < myImages.length; i++) {
    myImages[i].setAttribute("tabindex", "0")
  }
>>>>>>> dfc6e14b1290c8dc94d94e38cd3b8632ff242c55
}