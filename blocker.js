const blockedSites = ['www.youtube.com', 'www.facebook.com', 'www.instagram.com'];
const blockedImages = ['https://media.tenor.com/q2eL6vNVKf4AAAAC/bhai-kya-kar-raha-hai-tu-ashneer-grover.gif', 'https://media.tenor.com/MtsRCM6XD1wAAAAC/carryminati-ajey-nagar.gif', 'https://media.tenor.com/n7lK1BhIPUgAAAAC/padhai-likhai-karo-munna-tripathi.gif'];
const blockedMessageHTML = `<div>
<p>Access to this site is blocked on this device.</p>
<br>
<audio autoplay loop>
  <source src="https://ecommerce.vinayaksingh.com/wp-content/uploads/2023/02/Rick-Roll.mp3" type="audio/mp3">
  Your browser does not support the audio element.
</audio>
<img src="${blockedImages[Math.floor(Math.random() * blockedImages.length)]}" alt="Blocked GIF">
</div>`;

if (blockedSites.includes(window.location.hostname)) {
  const styleEl = document.createElement('style');
  styleEl.innerHTML = `body{margin:0;padding:0;height:100vh;display:flex;justify-content:center;align-items:center;background-color:#fff;color:#000;font-family:Arial,sans-serif;font-size:24px;}`;
  document.head.appendChild(styleEl);

  const blockedDiv = document.createElement('div');
  blockedDiv.innerHTML = blockedMessageHTML;
  document.body.innerHTML = '';
  document.body.appendChild(blockedDiv);
}
