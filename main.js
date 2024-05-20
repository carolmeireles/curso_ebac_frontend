$(document).ready(function() {

    $('form').submit(function(e) {
        e.preventDefault();
        const tarefa = $('input').val();
        const listaTarefas = $('ol');
        $(`<li>${tarefa}</li>`).appendTo(listaTarefas);
        $('input').val('');
    });

    $(document).on('click', 'li', function() {
        $(this).toggleClass('tarefaConcluida');
    });

});