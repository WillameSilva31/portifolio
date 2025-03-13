function changeLanguage(lang) {
   const elements = document.querySelectorAll('[data-pt], [data-en]');
   elements.forEach(element => {
       if (lang === 'pt' && element.dataset.pt) {
           if (element.tagName === 'A') {
               element.href = element.dataset.pt;
           } else {
               element.textContent = element.dataset.pt;
           }
       } else if (lang === 'en' && element.dataset.en) {
           if (element.tagName === 'A') {
               element.href = element.dataset.en;
           } else {
               element.textContent = element.dataset.en;
           }
       }
   });
}

document.getElementById('btn-portuguese').addEventListener('click', () => {
   changeLanguage('pt');
});

document.getElementById('btn-english').addEventListener('click', () => {
   changeLanguage('en');
});

document.addEventListener('DOMContentLoaded', function () {
   changeLanguage('pt');
});