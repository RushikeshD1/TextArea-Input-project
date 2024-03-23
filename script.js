document.getElementById('text').addEventListener('input', textAreaInput)

let textarea = document.getElementById('text');

function textAreaInput(){
    // let textarea = document.getElementById('text');
    localStorage.setItem('savedText', textarea.value)
    console.log('savedText')
}



if(localStorage.getItem('savedText')){
    textarea.value = localStorage.getItem('savedText')
}
