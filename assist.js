function hello() {
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();
            
// This runs when the speech recognition service starts
recognition.onstart = function() {
  document.getElementById('result').innerHTML = "Listening...";
  document.getElementById('img1').src='circle2.png'
};

recognition.onspeechend = function() {
  
}
              
// This runs when the speech recognition service returns result
recognition.onresult = function(event) {
  var text = event.results[0][0].transcript;
  console.log(text);
  document.getElementById('result').innerHTML = text;
  document.getElementById('img1').src='circle.png'
 
  read(text);
};
              
// start recognition
recognition.start();
}

function read(text){
  setTimeout(clearResult, 8000);
  document.getElementById("showskill").src = "https://www.bing.com/search?q=" + text + "&qs=HS&sc=2-0&cvid=5790E035BDA84F518BFDE2AC9EE58276&FORM=QBLH&sp=1";
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
    if(text.includes('electronics and communication'))
    garden();
    else if(text.includes('computer science'))
    cse();
    else if(text.includes('mechanical'))
    mech();
    else if(text.includes('admin'))
    admin();
     else if(text.includes('cafeteria'))
    cafe();
    else if(text.includes('parking'))
    park();
    else if(text.includes('civil'))
    civil();
    else if(text.includes('structural'))
    structural();
    else if(text.includes('play'))
    play();
    else if(text.includes('covid-19'))
    covid() ;
    else if(text.includes('good morning'))
    responsiveVoice.speak("good morning . You made my morning feel good . What can i do for you?");
    else if(text.includes('how are you'))
    responsiveVoice.speak('I m good. Thanks for asking . How can i help for you')
    else if(text.includes('yourself'))
    responsiveVoice.speak('I m a two way mirror with electronic display behind me . I can show you details like time date weather and news update . And also I can guide you to the various blocks of our college.')
    else if(text.includes('communication lab'))
    responsiveVoice.speak("the communication skills lab . E .  N . 0 . 1 is in the left side of the first floor")
    else if(text.includes('electronics lab 1'))
    responsiveVoice.speak('electronics lab  . 1 . E . C . 0 . 7 is in the left side of the second floor. ')
    else if(text.includes('devices'))
    responsiveVoice.speak("electronics lab  . 1 . E . C . 0 . 7 is in the left side of the second floor.")
    else if(text.includes('VLSI lab'))
    responsiveVoice.speak('V . L . S . I .  lab    . E . C . 0 . 9 is in the right side of the second floor. ')
    else if(text.includes('microwave'))
    responsiveVoice.speak("microwave and optical fibre lab  .  E . C . 0 . 6 is in the right side of the first floor.")
    else if(text.includes('PG lab'))
    responsiveVoice.speak('E . C . P . G . V . L . S . I . 2 .  lab is in the right side of the first floor. ')
    else if(text.includes('Arif'))
    responsiveVoice.speak("radio frequency lab  .  E . C . 0 . 5  is in the right side of the first floor.")
    else if(text.includes('microprocessor'))
    responsiveVoice.speak("microprocessor and  microcontroller lab  .  E . C . 0 . 3 is in the left side of the first floor.")
    else if(text.includes('DSP'))
    responsiveVoice.speak('Digital signal processing lab .  E . C . 0 . 2 .  is in the left side of the first floor. ')
    else if(text.includes('lecture'))
    responsiveVoice.speak("lecture hall . E . C . L . 1 . 2 . 3 . is in the first floor , , , . and lecture hall . E . C . L . 4 . 5 . 6 . is in the second floor .")
    else if(text.includes('Microprocessor'))
    responsiveVoice.speak("microprocessor and  microcontroller lab  .  E . C . 0 . 3 is in the left side of the first floor.")
    else if(text.includes('HOD room'))
    responsiveVoice.speak('H . O . D cabin  .  E . C . S . 1 .  is in the first floor. ')
    else if(text.includes('ladies staff room'))
    responsiveVoice.speak("ladies staff room  . E . C . s . 2  . is in the left side of the first floor.")
    else if(text.includes('research centre'))
    responsiveVoice.speak("research centre is in the first floor.")
    else if(text.includes('Gents staff room'))
    responsiveVoice.speak("gents staff room  . E . C . s . 7  . is in the left side of the second floor.")
    else if(text.includes('research centre'))
    responsiveVoice.speak("research centre is in the first floor.")
    else if(text.includes('library'))
    responsiveVoice.speak("The department s library is in the left side of the second floor.")
    else if(text.includes('search'))
    search();
    else if(text.includes('triple '))
    garden();
    else if(text.includes('information technology'))
    cse();
    else if(text.includes('good afternoon'))
    responsiveVoice.speak("good afternoon . Did you had your lunch ? . What can i do for you?");
    else if(text.includes('good evening'))
    responsiveVoice.speak("good evening . look at the sunset and give me a smile. What can i do for you?");  
    else if(text.includes('hello'))
    responsiveVoice.speak("hello . It's so nice to see you again . what can i do for you?");
    else if(text.includes('hai'))
    responsiveVoice.speak("hai . What can i do for you?");
    else if(text.includes('hi'))
    responsiveVoice.speak("hi . What can i do for you?");
    else if(text.includes('color'))
    responsiveVoice.speak("My favourite color is white");
    


   // else
   // responsiveVoice.speak('sorry......i am not programmed to answer this question')

}


function search() { 
   show('Page4','Page1');

   setTimeout(mainPage, 19128); 
}

function garden() {  show('Page5','Page1')
responsiveVoice.speak('Go straight and cross the statue . take few more steps .turn right.you can see the .E.C.E. and triple . E . block');
document.getElementById("css").src = "ece.png"
     setTimeout(mainPage, 10000); 
}

function cse() {  show('Page5','Page1')
responsiveVoice.speak('Go straight and cross the statue . take few more steps .cross the cafeteria.after taking few steps , turn right .  you can see the c.s.E. and i.t. block');
    document.getElementById("css").src = "cse.png"
     setTimeout(mainPage, 15000); 
}

function mech() {  show('Page5','Page1')
responsiveVoice.speak('Go straight and turn left . go till the end . you can see the mechanical block');
document.getElementById("css").src = "mech.png"
     setTimeout(mainPage, 15000); 
}

function cafe() {  show('Page5','Page1')
responsiveVoice.speak('Go straight and cross the statue . cross the electrical sciences block .after taking few steps ,  you can see the cafeteria at your left side. Enjoy your food');
document.getElementById("css").src = "cafe.png"
     setTimeout(mainPage, 15000); 
}

function park() {  show('Page5','Page1')
responsiveVoice.speak('At few steps from gate . turn right . you can park your vehicle here');
document.getElementById("css").src = "park.png"
     setTimeout(mainPage, 15000); 
}
function civil() {  show('Page5','Page1')
responsiveVoice.speak('Go straight and turn left . walk few steps . At the right side you can see the civil block');
document.getElementById("css").src = "civil.png"
     setTimeout(mainPage, 15000); 
}
function structural() {  show('Page5','Page1')
responsiveVoice.speak('Go straight and turn left . walk few steps . After civil block , turn right . You can see structural block');
document.getElementById("css").src = "structural.png"
     setTimeout(mainPage, 15000); 
}

function play() {  show('Page5','Page1')
responsiveVoice.speak('Go straight and turn left . walk few steps . at the left side you can find play ground');
document.getElementById("css").src = "play.png"
     setTimeout(mainPage, 15000); 
}
function admin() {  show('Page5','Page1')
responsiveVoice.speak('Go straight and cross the statue . turn left . take few steps . turn right . welcome to admin block');
document.getElementById("css").src ="admin.png"
     setTimeout(mainPage, 15000); 
}
function mainPage() {
 show('Page1','page2','Page2');
 div();
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




function goorac(){
setInterval(function(){ hello(); }, 5000);
}
