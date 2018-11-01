'use strict';
const v = document.getElementById('test');
v.innerHTML = 'Something <strong>else.</strong>';
console.log(v.textContent);

const changeColor = (e) =>{
  console.log(e.currentTarget);
  e.currentTarget.setAttribute('style', 'background: purple');
};

const exampleElements = document.querySelectorAll('.example');
console.log(exampleElements);

for(let i = 0; i < exampleElements.length; i++){
  console.log(exampleElements[i]);
  exampleElements[i].setAttribute('style', 'color:green');
  exampleElements[i].addEventListener('click', changeColor);
}

for (const v of exampleElements){
  v.innerHTML = 'Modified';
}

exampleElements.forEach(element => {
  element.innerHTML = 'Modified again';
});



