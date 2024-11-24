<script>
    $(document).ready(function () {
        // 1. Ao submeter o formulário, adiciona uma nova tarefa
        $('form').on('submit', function (e) {
            e.preventDefault(); // Evita o comportamento padrão do formulário (recarregar a página)

            // Obtém o valor do campo de entrada
            const novaTarefa = $('#nova_tarefa').val().trim();

            if (novaTarefa) {
                // Cria um novo <li> com a tarefa e adiciona na lista
                $('.Lista ul').append(`<li>${novaTarefa}</li>`);

                // Limpa o campo de entrada
                $('#nova_tarefa').val('');
            } else {
                alert('Por favor, insira uma tarefa.');
            }
        });

        // 2. Clique no item para aplicar ou remover o efeito de riscar (line-through)
        $('.Lista ul').on('click', 'li', function () {
            $(this).toggleClass('concluido'); // Alterna a classe 'concluido'
        });

        // 3. Botão "Apagar lista" para limpar todos os itens
        $('button[type="reset"]').on('click', function () {
            $('.Lista ul').empty(); // Remove todos os itens da lista
        });
    });
</script>