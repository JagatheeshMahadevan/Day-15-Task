let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {

        switch(e.target.innerText){
            case 'Del':
                display.innerText = '';
                break;

            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case 'clr':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    
    });
});function countdown(num, callback) {
  var interval = setInterval(function() {
      num--;
      if (num === 0) {
          clearInterval(interval);
          callback();
      }
      document.getElementById('countdown-number').innerHTML = num;
  }, 1000);
}

countdown(10, function() {
  document.getElementById('countdown').style.display = 'none';
  document.getElementById('message').style.display = 'block';
  document.getElementById('message').innerHTML = 'Happy Independence Day';
});
