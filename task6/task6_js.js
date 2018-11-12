

// - - - - 1 - - - - - -
/*
const strawBerry = document.getElementById('berry');
console.log(strawBerry);
console.log(strawBerry.innerHTML);
*/


// - - - - 2 - - - - - -
/*
const orange = document.querySelector("li[data-foodtype]").style.backgroundColor='orange';
console.log(orange.innerHTML);
*/

// - - - - 3 - - - - - -

const elements = document.getElementsByTagName('li');
console.log(elements);

for(let i= 0; i < elements.length; i++)
{
  console.log(elements[i].innerHTML);
  elements[i].style.listStyleType = 'none';
  elements[i].style.width = "100px";
  if(elements[i].innerHTML === 'Pear')
  {
    elements[i].style.backgroundColor = 'green';
  }
}

// - - - - 4 - - - - - -
const le = document.querySelectorAll("li");
console.log(le);
le.forEach((x) =>{
  console.log(x.innerHTML);
  x.style.border = 'solid';
});


















