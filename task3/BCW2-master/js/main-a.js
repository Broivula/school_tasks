// Create function 'showImages' which
// adds the loaded HTML content to <ul> element
'use strict';
const showImages =  (html) => {
  document.querySelector('ul').innerHTML = html;
};

fetch('images.html').then((response) => {
  return response.text();
}).then((html) => {
    showImages(html);
});