import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Le batch 678 c'est de la frappe", "T'as vu"],
    typeSpeed: 60,
    loop: true
  });
}

export { loadDynamicBannerText };
