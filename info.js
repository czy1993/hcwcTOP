$(function () {
    if ($("#statusvalue").text() == '已结束' || $("#statusvalue").text() == '已成交' ) {
        return false;
    }
    var day1 = document.getElementById('day')
    var hour1 = document.getElementById('hour')
    var min1 = document.getElementById('min')
    var sound1 = document.getElementById('sound')

    // console.log(newdate);
    function aa(newdate) {
        // console.log(day1)
        var start = new Date();
        var startdate = start.getTime();
        var end = new Date($("#endTime").val());
        var enddate = end.getTime();
        // console.log(startdate);
        // console.log(enddate);
        var newdate = enddate - startdate;
        var day = parseInt(newdate / 1000 / 60 / 60 / 24);//一天有24*60*60=86400秒 ；
        var hour = parseInt((newdate / 1000 / 60 / 60) % 24);
        var min = parseInt((newdate / 1000 / 60) % 60);
        var sound = parseInt((newdate / 1000) % 60);
        // console.log(day,hour,min,sound);
        if (day < 10) {
            day = "0" + day;
        }

        if (hour < 10) {
            hour = "0" + hour;
        }
        if (min < 10) {
            min = "0" + min;
        }
        if (sound < 10) {
            sound = "0" + sound;
        }
        day1.innerHTML = "<a>" + day + "</a>天";
        hour1.innerHTML = "<a>" + hour + "</a>时";
        min1.innerHTML = "<a>" + min + "</a>分";
        sound1.innerHTML = "<a>" + sound + "</a>秒";
    }

    aa();

    setInterval(function () {
        setTimeout(aa, 1000);
    }, 1000)

    // var basbanner=$('.bas-banner')
    // var imgbox = $('.imgbox');
    // var liwitch=$(".banner-a")[0].clientHeight
    // console.log(imgbox);
    // var imgCount=0;
    //        $('.bas-banner>.btn1').click(function(){
    //         // alert(123);
    //         imgCount++;
    //         if(imgCount>4){
    //             imgBox.style.top=0;
    //             imgCount=0;

    //         }
    //         var move = -imgCount*liwitch;
    //         // changeImg(imgCount);
    //         var top =$('.imgbox').position().top + move +'px'
    //             console.log(top,11111);
    //         $('.imgbox').css('top',top)
    //         console.log(move);

    // })

})