
const imageContainer = document.getElementById('image')
const infoText = `<p>Hover over an image below to display here.</p>`
imageContainer.innerHTML = infoText

/* ---ONMOUSEOVER--- */

function upDate(previewPic) {

 imageContainer.innerHTML = `<p class="character-name">${previewPic.alt}</p>`
 imageContainer.style.backgroundImage = `url('${previewPic.src}')`
}

/* ---ONMOUSEOUT--- */

function unDo() {

  imageContainer.innerHTML = infoText
  imageContainer.style.backgroundImage = "none"
}

/* ---ONFOCUS--- */

function focusFunction(previewPic) {

  imageContainer.innerHTML = `<p>${previewPic.alt}</p>`
  imageContainer.style.backgroundImage = `url('${previewPic.src}')`
}

/* ---ONBLUR--- */

function blurFunction() {
  
  imageContainer.innerHTML = infoText
  imageContainer.style.backgroundImage = "none"
}

/* ---ADDING TABFOCUS--- */

function addTabFocus() {
  let myImages = document.querySelectorAll("img")
  for (let i = 0; i < myImages.length; i++) {
    myImages[i].setAttribute("tabindex", "0")
  }
}