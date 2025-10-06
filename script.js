// Lógica para a seção de FAQ (Perguntas Frequentes)
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const answer = faqItem.querySelector('.faq-answer');

        // Fecha todos os outros itens antes de abrir o novo
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('open');
                item.querySelector('.faq-answer').style.maxHeight = null;
            }
        });

        // Alterna o estado (aberto/fechado) do item clicado
        faqItem.classList.toggle('open');
        
        // Define a altura máxima para criar o efeito de "acordeão"
        if (faqItem.classList.contains('open')) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = null;
        }
    });
});

// Lógica do Menu Hambúrguer
const navToggle = document.querySelector('.nav-toggle');
const mainHeader = document.querySelector('.main-header');

navToggle.addEventListener('click', () => {
    // Adiciona/remove a classe que controla a exibição do menu
    mainHeader.classList.toggle('nav-open');
});

