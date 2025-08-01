function changeMode(size, weight, transform, background, color) {
    return function () {
      document.body.style.fontSize = `${size}px`;
      document.body.style.fontWeight = weight;
      document.body.style.textTransform = transform;
      document.body.style.backgroundColor = background;
      document.body.style.color = color;
    };
  }
  
  function main() {
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
  
    // Create and append paragraph
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome Atlas!';
    document.body.appendChild(paragraph);
  
    // Create and append buttons
    const button1 = document.createElement('button');
    button1.textContent = 'Spooky';
    button1.addEventListener('click', spooky);
    document.body.appendChild(button1);
  
    const button2 = document.createElement('button');
    button2.textContent = 'Dark mode';
    button2.addEventListener('click', darkMode);
    document.body.appendChild(button2);
  
    const button3 = document.createElement('button');
    button3.textContent = 'Scream mode';
    button3.addEventListener('click', screamMode);
    document.body.appendChild(button3);
  }
  
  main();