window.onscroll = () => {
  const nav = document.querySelector('.navbar-container');
  if(this.scrollY <= 10){
    nav.classList.remove('navbar-container-not-at-top'); 
  } 
  else {
    nav.classList.add('navbar-container-not-at-top');
  }
};


const notificationBtn = document.querySelector('.notification-btn')
const notification = document.querySelector('.notification-container')
notificationBtn.onclick = function (){
  notification.className = 'close';
}

// const toggleBtn = document.querySelector('.toggle_btn')
// const toggleBtnIcon = document.querySelector('.toggle_btn i')
// toggleBtn.onclick = function (){
//   toggleBtnIcon.classList = isOpen
//             ? 'fa-solid fa-xmark'
//             : 'fa-solid fa-bars'
// }

// $("#mobile_code").intlTelInput({
// 	initialCountry: "in",
// 	separateDialCode: true,
// });