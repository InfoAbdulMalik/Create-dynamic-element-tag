function createElementTag(e){
    e.preventDefault();
    var form= document.forms.elementCreator;
    var elementName= form.elements.element.value;
    var text =form.elements.text.value;
    var tag=document.createElement(elementName);
    tag.innerHTML=text;
    var createElementFile = document.getElementById('createElementFile');
    createElementFile.append(tag);
    tag.className='element';
    var elementWithClass=document.getElementsByClassName('element');
    var animationCard= document.getElementById('animation-card');
    for(i = 0; i<elementWithClass.length; i++){
    elementWithClass[i].onclick= function (){
            var currentTag= this;
             animationCard.style.display='flex';
        var selectElement=document.getElementById('animator')
           selectElement.onchange= function(){
              var showValue= this.value;
              currentTag.className= showValue;
           }
        }
    }
    
}