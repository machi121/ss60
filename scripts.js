const reasons = [
    "“I have long legs 😎” - Sherry Sun",
    "You <em>get</em> me and <em>see</em> me for who I am rather than what you want to see in me. You understand my weird Harry personality.",
    "And you have your weird Sherry personality.",
    "Sherry chewing. Seeing you eat happily puts such a huge smile on my face.",
    "Your cool attitude towards life (quite literally).",
    "Everything we share. We are so similar in everything—interests, tastes, values, wants, <del>weirdness</del>, and whatever you can think of. We have an undeniable link and bond.",
    "Your <del>narcissism</del> confidence in yourself.",
    "Your <del>overestimation</del> confidence in me.",
    "The way you remember every small detail about me and every small thing I said.",
    "Your beautiful eyes, especially your smiling eyes.",
    "How much/easily you laugh. I love hearing your laughter. My joy is hearing your joy.",
    "The way I feel a sense of ‘home’ around you. I feel safe, secure, and comfortable. I feel complete with you. You’re a home, a person I always catch myself looking at like it’s Christmas morning.",
    "The way you would always sing for me with your beautiful voice. You're literally my favourite singer. And out of the countless times I’ve listened to people singing love songs, you are the only one who makes them make sense and become my reality.",
    "Your writing. Your ancient Chinese writing in particular impresses me.",
    "The way I can talk to you about literally anything and everything.",
    "The way you can talk to me about literally anything and everything.",
    "The way you appreciate me in every way.",
    "How you never fail to get me up and make me laugh whenever I am feeling down.",
    "The way you make me want to write poetry (I am ashamed to even call it poetry) even though I am a terrible poet and I hate writing poetry in English. That terrible letter I gave you before you left is a good example 😭.",
    "Your open-mindedness.",
    "The little pouting faces you make (I am sorry but they are just so adorable makes me want to give you a big fat (?) hug).",
    "Your bright and clean presence. I have never seen anyone like you—you sparkle just by existing.",
    "The way you always put a smile on my face like no other person can.",
    "Sherry humour.",
    "The way you look at me.",
    "Your bright, star-like presence in my dreams.",
    "Your intelligence and learning speed.",
    "Your endless self-love.",
    "Your willingness and ability to communicate through anything and everything, as well as your respect for our boundaries. I am not afraid to face any problems in our lives going forward because we always work together, not against each other.",
    "The little Sherry noises you make ehhe.",
    "Your soft and warm body — every single part of it. Your cute and adorable hands, Sherry shoulder, your soft belly, I could go on and on.",
    "Your lovely natural smell.",
    "The way you talk (?). Talking to you is so enjoyable. I could literally just talk to you 24/7 for the rest of my life (skip pooping skip eating skip sleeping skip summer) and it would still be a great life. I enjoy our conversations so much to the point I sometimes reread our old conversations when I cannot talk to you (there are times I did it for more than an hour 😭) — although for texting, you’re becoming more and more dry every day :/",
    "Your unique Sherry style — like Sherry’s iconic black clothes and green shoes. Do you remember when I said fashionable is my type, and you said but you are not? I absolutely adore your fashion.",
    "Your unconditional trust in me and my intuition in particular.",
    "Your genuine interest to know everything about me.",
    "Your honesty and openness.",
    "Your cleanliness (<del>结核</del>)",
    "Etchu!",
    "The way you make even the simplest moments memorable.",
    "Your selfishness and willingness to put yourself first.",
    "Your gentle touches.",
    "The noises you make when you ‘cancel’ a sentence at the end (뺩뺩뺩뺩?).",
    "The way you call me the best, make me feel like the best, and actually push me to be the best.",
    "The way your face lights up and your eyes sparkle when you see animals, especially cats.",
    "Your attractive tone changes and random bursts of craziness when you speak Chinese.",
    "Your multilingualism and linguistic talent.",
    "Ms. Sun’s fire Chinese classroom (<del>my excuse to get to know you</del>) — the slides are so well done. Ms. Sun is the best!",
    "Your initiative when it comes to things that you are actually interested in. In particular, I found your initiative in our very first days really cool. You would pretty much immediately start sending me reels (and I found out later you sent them even earlier than I knew) and even suggest changing platforms so we can chat more.",
    "You are really really funny — it’s hard to explain but at the core of it, you are just so unique and random in your own way (the best way).",
    "Your kindness and thoughtfulness (<del>at least toward me</del>).",
    "Your strong and authentic self-awareness as well as self-expression.",
    "You’re an amazing hug giver. I will never forget the first day we gave each other a fat (?) hug. I have never experienced my heart beat and warm up so quickly.",
    "Your patience and helpfulness when I was ‘unsure.’ I always ‘feared’ commitment. But I found comfort in forever with you.",
    "You are extremely selective in what you give your attention to.",
    "Your strong drive and ambitions. I fully support and believe in you achieving your goals, and will always be by your side. 파이팅!",
    "The adorable, smiley look you get on your face the moment right before you laugh.",
    "I love tiny interactions with you like: when I randomly smile while looking at you, you ask me “why.” It’s love.",
    "You’re my best friend. The single best friend. #1. Period. My first and last, ever. You’re my everything. I love you.",
  ];
  
  let currentReasonIndex = 0;
  let countdownInterval;
  
  const landingPage = document.getElementById("landing");
  const countdownPage = document.getElementById("countdown");
  const endingPage = document.getElementById("ending");
  const reasonText = document.getElementById("reasonText");
  const startBtn = document.getElementById("startBtn");
  const progressBar = document.getElementById("progressBar");
  
  
  const rellax = new Rellax(".rellax");
  
  
  particlesJS.load("particles-js", "particles.json", function () {
    console.log("particles.js loaded - callback");
  });
  
  
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / 300,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  
  
  onWindowResize();
  
  renderer.setSize(window.innerWidth, 300);
  renderer.setClearColor(0x000000, 0); 
  document.getElementById("webgl-container").appendChild(renderer.domElement);
  
  
  const heartShape = new THREE.Shape();
  const x = 0,
    y = 0;
  heartShape.moveTo(x + 5, y + 5);
  heartShape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y);
  heartShape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7);
  heartShape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19);
  heartShape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7);
  heartShape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y);
  heartShape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5);
  
  
  const extrudeSettings = {
    depth: 2, 
    bevelEnabled: true,
    bevelSegments: 3,
    steps: 2,
    bevelSize: 1.5, 
    bevelThickness: 1.5,
  };
  const geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
  geometry.center();
  
  const material = new THREE.MeshStandardMaterial({
    color: 0xff69b4,
    metalness: 0.8, 
    roughness: 0.3, 
    emissive: 0xff69b4, 
  });
  const heart = new THREE.Mesh(geometry, material);
  heart.rotation.x = Math.PI;
  heart.scale.set(0.4, 0.4, 0.4);
  scene.add(heart);
  
  
  const ambientLight = new THREE.AmbientLight(0x404040); 
  const pointLight = new THREE.PointLight(0xffffff, 1, 100); 
  pointLight.position.set(10, 10, 10);
  scene.add(ambientLight);
  scene.add(pointLight);
  
  camera.position.z = 10;
  
  
  camera.near = 0.1;
  camera.far = 1000;
  camera.updateProjectionMatrix();
  
  function animate() {
    requestAnimationFrame(animate);
    heart.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  
  animate();
  
  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }
  
  function render() {
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }
  
  render();
  
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
  
  
  startBtn.addEventListener("click", () => {
    landingPage.classList.add("hidden");
    countdownPage.classList.remove("hidden");
    currentReasonIndex = 0;
    startCountdown();
  });
  
  function startCountdown() {
    
    if (countdownInterval) {
      clearInterval(countdownInterval);
    }
  
    updateReason();
  }
  
  function updateReason() {
    gsap.fromTo(
      reasonText,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );
    reasonText.innerHTML = `#${60 - currentReasonIndex}: ${
        reasons[currentReasonIndex]
      }`;
    updateProgressBar();
  
    
    const reasonLength = reasons[currentReasonIndex].length;
    const displayTime = reasonLength * 60; 
  
    
    countdownInterval = setTimeout(() => {
      currentReasonIndex++;
      if (currentReasonIndex < reasons.length) {
        updateReason();
      } else {
        countdownPage.classList.add("hidden");
        endingPage.classList.remove("hidden");
      }
    }, displayTime);
  }
  
  function updateProgressBar() {
    const progressPercentage = ((currentReasonIndex + 1) / reasons.length) * 100;
    gsap.to(".progress", { width: `${progressPercentage}%`, duration: 1 });
  }
  
  
  progressBar.innerHTML = '<div class="progress"></div>';
  
  
  function onWindowResize() {
    
    const webglContainer = document.getElementById("webgl-container");
    renderer.setSize(webglContainer.clientWidth, webglContainer.clientHeight);
  
    
    camera.aspect = webglContainer.clientWidth / webglContainer.clientHeight;
    camera.updateProjectionMatrix();
  }
  
  window.addEventListener("resize", onWindowResize);
  onWindowResize(); 
  
  
  const particleCount = 1000;
  const particles = new THREE.Geometry();
  const pMaterial = new THREE.PointsMaterial({
    color: 0xff69b4,
    size: 0.2,
    blending: THREE.AdditiveBlending,
    transparent: true,
  });
  
  for (let p = 0; p < particleCount; p++) {
    const pX = Math.random() * 10 - 5;
    const pY = Math.random() * 10 - 5;
    const pZ = Math.random() * 10 - 5;
    const particle = new THREE.Vector3(pX, pY, pZ);
    particles.vertices.push(particle);
  }
  
  const particleSystem = new THREE.Points(particles, pMaterial);
  scene.add(particleSystem);
  
  
  function animateParticles() {
    requestAnimationFrame(animateParticles);
    particleSystem.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animateParticles();
  
  const themeSwitcher = document.getElementById('themeSwitcher');
  const body = document.body;
  
  console.log(themeSwitcher);  
  console.log(body);
  
  themeSwitcher.addEventListener('click', () => {
      body.classList.toggle('dark-theme');
      console.log(body.classList.contains('dark-theme')); 
    });
    