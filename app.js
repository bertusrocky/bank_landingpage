// Animate elements with ScrollReveal

window.sr = ScrollReveal();
sr.reveal('.mainLeft', {
  duration: 2000,
  });

sr.reveal('#phone', {
  duration: 2000,
  origin: 'right',
  distance: '200px'
  });

sr.reveal('.mainButtons', {
  duration: 1500,
  delay: 1200,
  origin: 'bottom',
  distance: '50px'
  });

sr.reveal('.headingStat', {
  duration: 2300,
  viewFactor: 1
  });

sr.reveal('.statUser', {
  duration: 1500,
  viewFactor: 1,
  origin: 'bottom',
  distance: '20px'
  });
  
sr.reveal('.statLike', {
  duration: 1500,
  delay:300,
  viewFactor: 1,
  origin: 'bottom',
  distance: '20px'
  });

sr.reveal('.statReview', {
  duration: 1500,
  viewFactor: 1,
  delay:600,
  origin: 'bottom',
  distance: '20px'
  });

sr.reveal('.statUsability', {
  duration: 1500,
  delay:800,
  viewFactor: 1,
  origin: 'bottom',
  distance: '20px'
  });

sr.reveal('.watchFlexRight', {
  duration: 2500,
  viewFactor: 0.4,
  origin: 'bottom',
  distance: '80px'
  });

sr.reveal('.formColumn', {
  duration: 2000,
  viewFactor: 0.3,
  origin: 'bottom',
  distance: '30px'
  });
  