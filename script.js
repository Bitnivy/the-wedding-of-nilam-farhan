document.addEventListener('click', function() {
        let audio = document.querySelector("audio");
        audio.muted = false;
        audio.play();
    });

let opn = document.getElementById('opn');
let navi = document.getElementById('navi');
let nav_a = document.getElementById('nav_a');
let nav_b = document.getElementById('nav_b');
let nav_c = document.getElementById('nav_c');
let nav_d = document.getElementById('nav_d');
let nav_e = document.getElementById('nav_e');
let nav_f = document.getElementById('nav_f');
let a = document.getElementById('a');
let b = document.getElementById('b');
let c = document.getElementById('c');
let d = document.getElementById('d');
let e = document.getElementById('e');
let f = document.getElementById('f');
let g = document.getElementById('g');

opn.addEventListener('click', function() {
  navi.style.display = 'block';
  a.style.display = 'none';
  b.style.display = 'block';
  c.style.display = 'none';
  d.style.display = 'none';
  e.style.display = 'none';
  f.style.display = 'none';
  g.style.display = 'none';
  b.classList.add('animate-bounce'); 
  setTimeout(function() {
    b.classList.remove('animate-bounce');
  }, 800);
});

nav_a.addEventListener('click', function() {
  a.style.display = 'none';
  b.style.display = 'block';
  c.style.display = 'none';
  d.style.display = 'none';
  e.style.display = 'none';
  f.style.display = 'none';
  g.style.display = 'none';
  b.classList.add('animate-bounce'); 
  setTimeout(function() {
    b.classList.remove('animate-bounce');
  }, 800);
});

nav_b.addEventListener('click', function() {
  a.style.display = 'none';
  b.style.display = 'none';
  c.style.display = 'block';
  d.style.display = 'none';
  e.style.display = 'none';
  f.style.display = 'none';
  g.style.display = 'none';
  b.classList.add('animate-bounce'); 
  setTimeout(function() {
    b.classList.remove('animate-bounce');
  }, 800);
});

nav_c.addEventListener('click', function() {
  a.style.display = 'none';
  b.style.display = 'none';
  c.style.display = 'none';
  d.style.display = 'block';
  e.style.display = 'none';
  f.style.display = 'none';
  g.style.display = 'none';
  b.classList.add('animate-bounce'); 
  setTimeout(function() {
    b.classList.remove('animate-bounce');
  }, 800);
});

nav_d.addEventListener('click', function() {
  a.style.display = 'none';
  b.style.display = 'none';
  c.style.display = 'none';
  d.style.display = 'none';
  e.style.display = 'block';
  f.style.display = 'none';
  g.style.display = 'none';
  b.classList.add('animate-bounce'); 
  setTimeout(function() {
    b.classList.remove('animate-bounce');
  }, 800);
});


nav_e.addEventListener('click', function() {
  a.style.display = 'none';
  b.style.display = 'none';
  c.style.display = 'none';
  d.style.display = 'none';
  e.style.display = 'none';
  f.style.display = 'block';
  g.style.display = 'none';
  b.classList.add('animate-bounce'); 
  setTimeout(function() {
    b.classList.remove('animate-bounce');
  }, 800);
});


nav_f.addEventListener('click', function(event) {
  event.preventDefault();
  a.style.display = 'none';
  b.style.display = 'none';
  c.style.display = 'none';
  d.style.display = 'none';
  e.style.display = 'none';
  f.style.display = 'none';
  g.style.display = 'block';
  b.classList.add('animate-bounce');
  setTimeout(function() {
    b.classList.remove('animate-bounce');
  }, 800);
  setTimeout(function() {
    location.href = 'https://maps.app.goo.gl/paqC6iDgVHVFWpHT6';
  }, 2000);
});