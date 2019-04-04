

document.getElementById('count').textContent = document.
getElementsByClassName('row').length;



for(let i = 0; i < document.getElementsByClassName('trash').length; i++)
// on veut écouter les clicks de chaque élément
 {
 document.getElementsByClassName('trash')[i].addEventListener("click",
 function (){

 this.parentNode.remove()

 document.getElementById('count').textContent = document.
 getElementsByClassName('row').length;

})
}
// dans l'élément "trash", quand on "click" on appelle la fonction remove
