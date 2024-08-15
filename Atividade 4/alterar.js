document.addEventListener('DOMContentLoaded', () => {
  console.log("Script carregado e funcionando"); // Adicione esta linha para depuração
  const buttons = document.querySelectorAll('.controls button');
  const iframe = document.getElementById('activity-frame');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const src = button.getAttribute('data-src');
      console.log("Fonte do iframe:", src); // Adicione esta linha para depuração
      iframe.src = src;
    });
  });
});
