// Toggle для показа/скрытия скриншотов проектов
document.addEventListener('DOMContentLoaded', function() {
  const toggleButtons = document.querySelectorAll('.screenshot-toggle');
  
  toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
      const project = this.closest('.project');
      const screenshots = project.querySelector('.project-screenshots');
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      
      if (isExpanded) {
        screenshots.classList.add('hidden');
        this.setAttribute('aria-expanded', 'false');
        this.textContent = 'Показать скриншоты';
      } else {
        screenshots.classList.remove('hidden');
        this.setAttribute('aria-expanded', 'true');
        this.textContent = 'Скрыть скриншоты';
      }
    });
  });
});
