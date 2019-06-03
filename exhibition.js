$(function() {
    $(".time").each(function () {
        var startTime = new Date()
        var endTime = new Date($(this).children("input").val())
        if(startTime>endTime){
            return false;
        }
        var totalTime = (endTime - startTime)/1000
        var spans = $(this).children("span")
        var timer = setInterval(() => {
            totalTime--;
        if (totalTime < 0) {
            clearInterval(timer);
            return;
        }
        var day = Math.floor(totalTime/3600/24)
        var hour = Math.floor(totalTime/3600%24);
        var minute = Math.floor(totalTime/60%60);
        var second = Math.floor(totalTime%60);
        spans[0].innerHTML = day;
        spans[1].innerHTML = hour;
        spans[2].innerHTML = minute;
        spans[3].innerHTML = second;
    }, 1000);
    })

            
})