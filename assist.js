
const btn = document.getElementById('btn');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function(){
    console.log('You can speak now!!!');
}

recognition.onresult = function(event){
    var text = event.results[0][0].transcript;
    console.log(text);
    document.getElementById('result').innerHTML = text;
    document.getElementById('img1').src='circle.png'
    read(text);
}

function read(text){
  setTimeout(clearResult, 8000);
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
    if(text.includes('playground'))
    garden();
    else if(text.includes('covid-19'))
    covid() ;
    else if(text.includes('good morning'))
    responsiveVoice.speak("good morning . You made my morning feel good . What can i do for you?",'US English Female');
    else if(text.includes('how are you'))
    responsiveVoice.speak('I m good . How can i help for you','US English Female')
    else if(text.includes('yourself'))
    responsiveVoice.speak('I m a two way mirror with electronic display behind me . I can show you details like time date weather and news update . And also I can guide you to the various blocks of our college.','US English Female' )
    
}

function garden() {  show('Page2','Page1')
     
var x = document.getElementById("myVideo"); 
  x.play(); 
     setTimeout(mainPage, 19128); 
}

function mainPage() {
 show('Page1','page2','Page2');
 document.getElementById("result").innerHTML = "";
}

function covid() {
show('Page3','Page1')
setTimeout(mainPage, 19128); 
} 

function clearResult() {
document.getElementById("result").innerHTML = "Goorac";
}






class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }
  
    type() {
      // Current index of word
      const current = this.wordIndex % this.words.length;
      // Get full text of current word
      const fullTxt = this.words[current];
  
      // Check if deleting
      if(this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
  
      // Insert txt into element
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
      // Initial Type Speed
      let typeSpeed = 300;
  
      if(this.isDeleting) {
        typeSpeed /= 2;
      }
  
      // If word is complete
      if(!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
      } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 500;
      }
  
      setTimeout(() => this.type(), typeSpeed);
    }
  }
  
  
  // Init On DOM Load
  document.addEventListener('DOMContentLoaded', init);
  
  // Init App
  function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
  }
  function speakText(){
    var text = document.getElementById('txt').value;
    responsiveVoice.speak(text);
    
}
