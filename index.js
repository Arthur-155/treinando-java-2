// Seleciona todas as setas
// Adiciona um evento de clique a cada seta
// Seleciona o elemento pai (que é a .faq-item)
// Aqui pegamos o elemento pai
// Seleciona a descrição (o próximo elemento que é a resposta)
// Aqui pegamos a descrição
// Alterna a classe 'esconder' para mostrar ou esconder a resposta
// Alterna a classe 'open' para aplicar o estilo da seta
// Aqui alternamos a classe 'open'

const setas = document.querySelectorAll('.arrow');


setas.forEach(seta => {
    seta.addEventListener('click', function() {
        
        const faqItem = seta.closest('.faq-item'); 
       
        const descricao = faqItem.querySelector('.faq-descricao'); 

        
        descricao.classList.toggle('esconder');

        
        faqItem.classList.toggle('open'); 
    });
});
