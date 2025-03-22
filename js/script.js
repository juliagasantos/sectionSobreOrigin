
// function showTab(tabId) {
//   document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
//   document.querySelectorAll('.tab').forEach(el => el.classList.remove('active'));
//   document.getElementById(tabId).classList.add('active');
//   document.querySelector(`.tab[onclick="showTab('${tabId}')"]`).classList.add('active');
// }

//

// const tabs = document.querySelectorAll(".tab-link");
// const panes = document.querySelectorAll(".tab-pane");

// tabs.forEach(tab => {
//     tab.addEventListener("click", function() {
//         tabs.forEach(t => t.classList.remove("active"));
//         panes.forEach(p => p.classList.remove("active"));

//         this.classList.add("active");
//         document.getElementById(this.dataset.tab).classList.add("active");
//     });
// });




//

// Seleciona todos os botões de abas
document.addEventListener("DOMContentLoaded", function() {
  const tabButtons = document.querySelectorAll('.tab-buttons button');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabButtons.forEach(button => {
      button.addEventListener('click', () => {
          // Remove a classe active de todos os botões
          tabButtons.forEach(btn => btn.classList.remove('active'));
          tabPanes.forEach(pane => pane.classList.remove('active'));

          // Adiciona a classe active ao botão clicado
          button.classList.add('active');

          // Exibe o conteúdo da aba correspondente
          const targetTab = document.querySelector(`#${button.dataset.tab}`);
          targetTab.classList.add('active');
      });
  });
});