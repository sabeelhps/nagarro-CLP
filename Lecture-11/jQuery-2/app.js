$('h1').click(function () {
    console.log("CLicked");
})

$('input').keypress(function (e) {
    if (e.which === 13) {
        console.log("You hit the Enter key")
    }
    // console.log(e);
    // console.log("You Pressed a Key");
})


$('p').on('click', function () {
    console.log("Para Clicked");
})

$('ul').on('click', 'li', function () {
    console.log($(this).text());
})

