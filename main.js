
const botaoOrcamento = document.querySelector('.login');
botaoOrcamento.addEventListener('click', function () {
    Swal.fire({
        title: 'Obrigado pelo seu interesse!',
        Text: 'Vamos abrir o formulário.',
        icon: 'success',
        confirmButtonText: 'Continuar',
        confirmButtonColor: '#1976d2',
    })
})



// Seleciona todos os cabeçalhos clicáveis
const headers = document.querySelectorAll('.acordion-header');

headers.forEach(header => {
    header.addEventListener('click', function () {
        const currentItem = this.parentElement;
        const currentContent = currentItem.querySelector('.acordion-content');

        // --- BLOCO OPCIONAL: Fecha os outros itens quando abrir um novo ---
        document.querySelectorAll('.acordion-item').forEach(item => {
            if (item !== currentItem) {
                item.classList.remove('active');
                item.querySelector('.acordion-content').style.maxHeight = null;
            }
        });
        // -----------------------------------------------------------------

        // Alterna a classe 'active' no item atual (muda a cor para verde e o ícone para -)
        currentItem.classList.toggle('active');

        // Calcula o tamanho real do texto dinamicamente para fazer o efeito slide suave
        if (currentItem.classList.contains('active')) {
            currentContent.style.maxHeight = currentContent.scrollHeight + "px";
        } else {
            currentContent.style.maxHeight = null;
        }
    });
});

// Seleciona todos os cards de serviço da página
const cards = document.querySelectorAll('.services-card');

cards.forEach(card => {
    // Detecta o movimento do mouse dentro do card
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();

        // Calcula a posição do mouse relativa ao centro do card
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // Calcula os ângulos de rotação (ajuste o '20' se quiser mais ou menos inclinação)
        const rotarX = -(y / rect.height) * 20;
        const rotarY = (x / rect.width) * 20;

        // Aplica a inclinação 3D no card
        card.style.transform = `perspective(1000px) rotateX(${rotarX}deg) rotateY(${rotarY}deg) scale3d(1.02, 1.02, 1.02)`;

        // Efeito extra: Faz a ilustração flutuar um pouco mais rápido para dar profundidade!
        const img = card.querySelector('.services-card-backgro-img');
        if (img) {
            img.style.transform = `translate3d(${x * 0.1}px, ${y * 0.1}px, 20px)`;
        }
    });

    // Quando o mouse sai do card, reseta tudo para a posição original suavemente
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';

        const img = card.querySelector('.services-card-backgro-img');
        if (img) {
            img.style.transform = 'translate3d(0, 0, 0)';
        }
    });
});

