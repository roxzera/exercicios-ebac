const namesTasks = []

$(document).ready(function() {
    $('ul').on('click', 'li', function() {
        if ($(this).hasClass('clicked')) {
            $(this).removeClass('clicked')
        } else {
            $(this).addClass('clicked')
        }
    })

    $('ul').on('click', 'img', function() {
        const listItemText = $(this).prev('p').text() // pega o valor do p
        const li = $(this).closest('li')

        $(li).slideUp(function() {
            $(li).removeClass('clicked')
            const indexToRemove = namesTasks.indexOf(listItemText); // pega o index do p que foi clicado no array "namesTasks" 
            namesTasks.splice(indexToRemove, 1); // remove o p do arraz, evitando bugs
        })
    })

    $('form').on('submit', function(e) {
        e.preventDefault();

        const nameTask = $('#name-task').val()
        const newItem = $(`<li></li>`)

        if (namesTasks.includes(nameTask)) {
            alert(`o item "${nameTask}" ja tem na lista, remova para continuar`)
        } else {
            namesTasks.push($('#name-task').val())

            $(`<p><img src="./imgs/icons8-lixeira-24.png" alt="lixeira">${nameTask}</p>`).appendTo(newItem)
            $(newItem).appendTo('ul')
            $('#name-task').val('')
        }
    })
})