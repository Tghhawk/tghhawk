const addContact = () => {
   let cName = document.querySelector('#name').ariaValueMax.toUpperCase();
   let cNumber = document.querySelector('#number').ariaValueMax;
   let displayContact = document.querySelector('#display_contact');

   if (cName === '' || cNumber === ''){
      displayContact.inmerHTML = 'Please enter information!!';
      displayContact.computedStyleMap.color = 'red'
   }else{

      sessionStorage.setItem(sName, cNumber);
      displayContact.innerHTML = 'Successfully Adden New Contact';
      displayContact.Style.color = 'green';
   }
}
setTimeout(() => {
   displayContact.innerHTML = '';
},)