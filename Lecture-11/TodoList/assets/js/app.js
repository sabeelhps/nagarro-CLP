// Marking todo as completed
$('ul').on('click','li',function () {
    $(this).toggleClass('completed');
})


// Remove Todo Item

$('ul').on('click', 'span', function (e) {
    
    $(this).parent().fadeOut(500,function () {
        $(this).remove();
    });
    e.stopPropagation(); //to prevent event bubbeling
})



// Add New Todo
$('input[type="text"]').keypress(function (e) {
    if (e.which === 13) {
        const todoText = $(this).val();
        $('ul').append(`<li><span><i class="fas fa-trash-alt"></i> </span>${todoText}</li>`);
        $(this).val("");
    }
})



$('#plus').click(function () {
    $('input[type="text"]').fadeToggle(500);
})

// $('ul').click(function () {
//     alert("You clicked ul tag")
// })

// $('body').click(function () {
    
//     alert("Clicked on the body");
// })

// $('li').click(function () {
//     alert("You clicked on li")
// })