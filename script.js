document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;

        // Fecha todas as outras perguntas abertas
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) item.classList.remove('open');
        });

        // Alterna o estado aberto/fechado da pergunta clicada
        faqItem.classList.toggle('open');
    });
});
