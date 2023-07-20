// function to handle the scroll effect on navbar
window.onscroll = () => {
  const nav = document.querySelector('.navbar-container');
  if(this.scrollY <= 10){
    nav.classList.remove('navbar-container-not-at-top'); 
  } 
  else {
    nav.classList.add('navbar-container-not-at-top');
  }
};

// on click on the cross icon, close the notification bar, flex will handle the alignment
const notificationBtn = document.querySelector('.notification-btn')
const notification = document.querySelector('.notification-container')
notificationBtn.onclick = function (){
  notification.className = 'close';
}


// toggle of the menu
const toggleBtn = document.querySelector('.navbar-toggle')
const toggleMenu = document.querySelector('.toggle-navbar-menu')
toggleBtn.onclick = function (){
  toggleBtn.innerHTML = "";
  // console.log(toggleBtn.innerHTML);
  if(toggleMenu.classList.length > 1) {
    toggleMenu.classList.remove("close-mobile-view");
    toggleBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 14" width="16" height="16" role="img" style="font-weight: 700;"><path class="ic-m-cross_svg__ic_m_cross" d="M2.828 2.516a.922.922 0 0 0-.31.311.372.372 0 0 0 .004.353c.033.066.654.704 1.908 1.959L6.288 7 4.43 8.861c-1.254 1.255-1.875 1.893-1.908 1.959-.09.181-.049.348.13.529.172.173.351.217.528.129.066-.033.704-.654 1.959-1.908L7 7.712 8.861 9.57c1.255 1.254 1.893 1.875 1.959 1.908.177.088.355.044.529-.129.173-.174.217-.352.129-.529-.033-.066-.654-.704-1.908-1.959L7.712 7 9.57 5.139c1.254-1.255 1.875-1.893 1.908-1.959.088-.177.044-.356-.129-.528-.181-.179-.348-.22-.529-.13-.066.033-.704.654-1.959 1.908L7 6.288 5.139 4.43C3.884 3.176 3.246 2.555 3.18 2.522a.384.384 0 0 0-.352-.006" fill-rule="evenodd"></path></svg>';
  }
  else {
    toggleMenu.classList.add("close-mobile-view");
    toggleBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 14" width="16" height="16" role="img"><path class="ic-m-overflow_line_svg__ic_m_overflow_line" d="M1.794 1.782a.804.804 0 0 0-.513.513.899.899 0 0 0 .055.54.828.828 0 0 0 .344.342l.105.055h10.43l.1-.054a.877.877 0 0 0 .351-.342c.055-.103.062-.144.062-.339 0-.203-.006-.233-.069-.347a.818.818 0 0 0-.361-.336l-.106-.052-5.145-.005c-4.055-.003-5.168.002-5.253.025m-.039 4.515a.724.724 0 0 0-.372.293c-.1.146-.13.27-.118.468a.716.716 0 0 0 .411.612l.132.065h10.384l.132-.065a.813.813 0 0 0 .351-.348c.045-.084.053-.136.053-.322s-.008-.238-.053-.322a.813.813 0 0 0-.351-.348l-.132-.065-5.157-.005c-4.948-.005-5.162-.004-5.28.037m.042 4.481a.82.82 0 0 0-.47.399c-.047.088-.055.139-.055.326 0 .203.006.233.069.347a.818.818 0 0 0 .361.336l.106.052h10.384l.116-.057a.803.803 0 0 0 .384-.411.609.609 0 0 0 .042-.313.733.733 0 0 0-.414-.634l-.105-.055-5.18-.004c-2.849-.002-5.206.005-5.238.014" fill-rule="evenodd"></path></svg>';
  }
}

// $("#mobile_code").intlTelInput({
// 	initialCountry: "in",
// 	separateDialCode: true,
// });