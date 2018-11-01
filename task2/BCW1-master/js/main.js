'use strict';
const validator_list = document.querySelectorAll('.validation');


const input_check = (form, input) =>{

  switch (form) {
    case 'email':
      const email_form =  /\S+@\S+\.\S+/;
      return email_form.test(input);


    case 'phone':
      const phone_form = /\+358[0-9]{9}/;
      return phone_form.test(input);



    default:
      console.log('default case');
      break;

  }
}





const validation = (event = this.event) => {
for(const e of validator_list)
{
  switch (e.id) {

    case 'first-name':
      if (e.value === '') {
        console.log('firstname is empty');
        alert('firstname is required.');
        event.preventDefault();
        return false;
      }
      break;

    case 'last-name':
      if (e.value === '') {
        console.log('lastname is empty');
        alert('lastname is required.');
        event.preventDefault();
        return false;
      }

      break;

    case 'email':
      if (e.value === '') {
        console.log('email is empty');
        alert('email is required.');
        event.preventDefault();
        return false;
      }else if (!input_check('email', e.value)){
        console.log('email is not valid.');
        alert('the given email is not valid.');
        event.preventDefault();
        return false;
      }
      break;

    case 'phone':
      if (!input_check('phone', e.value)) {
        console.log('number is not valid.');
        alert('the given phone number is not valid.');
        event.preventDefault();
        return false;
      }
      break;

    case 'zip':
      if(e.value.length > 0 && e.value.length !== 5)
      {
        console.log(`the zipcode is not 5 characters long`);
        alert('the given zip code has to be 5 characters long');
        event.preventDefault();
        return false;
      }
      break;

    case 'password':
      if(e.value.length < 6)
      {
        console.log(`the password is required and has to be atleast 6 characters long`);
        alert('password is required and has to be at least 6 characters long');
        event.preventDefault();
        return false;
      }
      break;

    default:
      console.log('default test case.');

  }
  }
};

const send_button = document.getElementById('submit').addEventListener('click', validation);