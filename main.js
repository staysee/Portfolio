$('.nav .toggle-collapse span').click( () => {
    $('.nav').toggleClass('collapse')
})

$('.nav-items a').click( () => {
    $('.nav').toggleClass('collapse')
    $('.nav').addClass('quick-nav')
    console.log('close')
})