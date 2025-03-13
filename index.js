document.addEventListener('DOMContentLoaded', function () {
   changeLanguage('pt');
});
function changeLanguage(lang) { 
   const elements = document.querySelectorAll('[data-pt], [data-en]');
   elements.forEach(element => {
       if (lang === 'pt' && element.dataset.pt) {
           element.textContent = element.dataset.pt;
       } else if (lang === 'en' && element.dataset.en) {
           element.textContent = element.dataset.en; 
       }
   });
}
document.getElementById('btn-portuguese').addEventListener('click', () => {
   changeLanguage('pt'); 
});
document.getElementById('btn-english').addEventListener('click', () => {
   changeLanguage('en'); 
});