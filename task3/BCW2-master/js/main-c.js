// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array: 
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
// Make the above HTML by using DOM methods.
// Create elements with createElement()
// Add attributes with setAttribute()
// Add elements with appendChild
// When the above HTML is ready append it to the <ul> element
/*
  `<li>
    <figure>
        <a href="/img/original/${image.mediaUrl}"><img src="img/thumbs/${image.mediaThumb}"></a>
        <figcaption>
            <h3>${image.mediaTitle}</h3>
        </figcaption>
    </figure>
</li>`;
*/

const showImages =  (images) => {
  images.forEach((image) =>{
    const li =  document.createElement('li');
    const figure = document.createElement('figure');
    const a = document.createElement('a');
    const figCap = document.createElement('figcaption');
    const h3 = document.createElement('h3');
    const img = document.createElement('img');

    h3.innerText = image.mediaTitle;
    a.setAttribute(`href`, `img/original/${image.mediaUrl}`);
    img.setAttribute(`src`, `img/thumbs/${image.mediaThumb}`);
    a.appendChild(img);
    figCap.appendChild(h3);
    figure.appendChild(a);
    figure.appendChild(figCap);
    li.appendChild(figure);

    const currentDiv  = document.querySelector('ul');
    currentDiv.appendChild(li);
    //console.log(currentDiv.innerHTML);

  });

  const currentDiv  = document.querySelector('ul');
  console.log(currentDiv.innerHTML);
  document.querySelector('ul').innerHTML = currentDiv.innerHTML;
};

fetch('images.json').then((response) => {
  return response.json();
}).then((json) => {
  console.log(json);
  showImages(json);
});