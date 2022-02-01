// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () =>{
  const hearts = document.querySelectorAll('.like-glyph')

  hearts.forEach(heart => heart.addEventListener('click', handleLike));

  function handleLike(heart){
    mimicServerCall()
    .then (() => {
      if (heart.target.innerText === EMPTY_HEART){
        heart.target.setAttribute('class', 'activated-heart')
        heart.target.innerText = FULL_HEART 
      } else if (heart.target.innerText === FULL_HEART){
          heart.target.setAttribute('class', 'like-glyph')
          heart.target.innerText = EMPTY_HEART
        }
    })
    .catch (() => {
      document.getElementById('modal').setAttribute('class', '')
      setTimeout(() => {
        document.getElementById('modal').setAttribute('class', 'hidden')
      }, 3000)
    })

    
  }

});






//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
