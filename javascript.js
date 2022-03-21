// Funcion animacion de Titulo

function typeEffect(element, speed) {
    let text = element.innerHTML;
    element.innerHTML = "";
    
    let i = 0;
    let timer = setInterval(function() {
      if (i < text.length) {
        element.append(text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
  }
  
  let speed = 150;
  let h1 = document.querySelector('h1');
  let delay = h1.innerHTML.length * speed + speed;
  
  typeEffect(h1, speed);