$(function() {
    $('.modal').draggable();
    
    $('.modal section div').cycle({
        timeout: 5000,
        pause: 1
    });
});