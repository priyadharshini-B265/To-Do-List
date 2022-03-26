var btnAdd = document.getElementById('btn');
var list = document.getElementById('list');
var text = document.getElementById('text');
var btnupdate = document.getElementById('update-item');
var btnremove = document.getElementById('remove-item');
var remove = document.querySelectorAll('i');
var remove = document.getElementById('r');
var check = document.getElementById('c');




//To add new task

text.addEventListener('keyup',function(e){
      if(e.keyCode===13){
        addEvent();
      }
});

var currentInputValue='';
text.addEventListener('input',function(e){
  currentInputValue=e.target.value;
})




function createNewNode(){
         var newListElement = document.createElement('li')
         var icon = document.createElement('i');
         icon.classList.add('fas', 'fa-trash' ,'img');
         var tick = document.createElement('i')
         tick.classList.add('fas','fa-check','tick');
         var textNode = document.createTextNode(currentInputValue)
         newListElement.appendChild(textNode); 
         newListElement.appendChild(icon);
         newListElement.appendChild(tick);
         icon.onclick = removeIcon;
         tick.onclick=tickIcon;

         newListElement.id="text " + (list.childElementCount + 1);

         return newListElement;
}

function addEvent(){
         if(currentInputValue!==undefined && currentInputValue!=="" && currentInputValue!==null){
          var newListElement=createNewNode();
          list.append(newListElement);
          console.log(newListElement);

         text.value =''
         }
         else {
              alert('Please enter a valid TODO item');
         }
         
     }

  btnAdd.addEventListener('click',addEvent);



remove.forEach(item => {
   item.addEventListener('click',removeIcon); 
 });
 function removeIcon(){
   this.parentNode.remove();
  };


remove.forEach(item => {
  item.addEventListener('click',tickIcon);
});

function tickIcon(){
     this.parentNode.classList.add('strick');
}




 




