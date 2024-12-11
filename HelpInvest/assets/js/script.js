window.addEventListener('DOMContentLoaded', function () {
    document.getElementById('toggle-eye').addEventListener('click', function () {
        const valorConta = document.getElementById('valor-conta');
        const valorInvestido = document.getElementById('valor-investido');
        const icon = document.getElementById('toggle-eye');

        if (valorConta.textContent === 'R$') {
            valorConta.textContent = 'R$30.000,00';
            valorInvestido.textContent = 'R$70.000,00';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        } else {
            valorConta.textContent = 'R$';
            valorInvestido.textContent = 'R$';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        }
    });

    const categoriaItems = document.querySelectorAll('.categoria-item');
    categoriaItems.forEach(item => {
        item.addEventListener('click', () => {
            categoriaItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    const notificationIcon = document.getElementById('notificationIcon');
    if (notificationIcon) {
        notificationIcon.addEventListener('click', function () {
            alert('Função ainda não implementada');
        });
    }

    const profileIcon = document.getElementById('profileIcon');
    if (profileIcon) {
        profileIcon.addEventListener('click', function () {
            alert('Função ainda não implementada');
        });
    }
});
