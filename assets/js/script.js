$(document).ready(function(){

    var clock,now,date,month,year,day,days,dayName,dateString,hour,min,TwentyFourHour,mid;
    
    setTimeout(function(e){
        if($('.clock').length > 0){
            clock = $('.clock').FlipClock({
                clockFace: 'twelveHourClock'
            });
        }
    },500)
    window.onload = function() {
        if($('.clock').length > 0){
            clock = $('.clock').FlipClock({
                clockFace: 'twelveHourClock'
            });
        }
    };

    $(document).on('click','.close-intro',function(e){
        if($('.clock').length > 0){
            clock = $('.clock').FlipClock({
                clockFace: 'twelveHourClock'
            });
        }
    })

    $(document).on('click','.menu-listing li,.icon-back',function(){
        clock = $('.clock').FlipClock({
            clockFace: 'twelveHourClock'
        });
    })
    $(document).on('click','.modal-close',function(){
        $('.alarm-modal').removeClass('open');
    });
    $s = 0
    var toggle = true;
    setInterval(function(){
    /*******************Date code start************ */
    days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    months = ['Jan', 'Feb', 'March', 'April', 'May', 'Jun', 'July','Aug','Sep','Oct','Nov','Dec'];
    now = new Date();
    date = now.getDate();
    month = months[now.getMonth()];
    year = now.getFullYear();
    dayName = days[now.getDay()];
    $('.date').text(date);
    $('.month').text(month);
    $('.year').text(year);
    $('.day').text(dayName);
    /*******************Date code end************ */

    /*******************time code start************ */

    TwentyFourHour = now.getHours();
    mid = 'PM';
    month = months[now.getMonth()];
    year = now.getFullYear();
    dayName = days[now.getDay()];
    hour = now.getHours();
    min = now.getMinutes();

    min < 10 ? min = "0" + min:null;
    hour > 12 ? hour = hour - 12:null;
    hour==0 ? hour=12:null;
    TwentyFourHour < 12 ? mid = 'AM':null;

    var hourLength = hour.toString().length
    var minLength = min.toString().length
    
    var hour1 = '0' +hour
    var min1 = '0' + min
    $('.hour').text(hourLength == 1 ? hour1:hour);
    $('.min').text(minLength == 1 ? min1:min);
    $('.AMPM').text(mid);


   $('.flip-clock-divider').animate({'opacity':0},500);
   $('.flip-clock-divider').animate({'opacity':1},500);

   //$('.flip-clock-divider').animate({ opacity: toggle?1:0},1000);
    toggle=!toggle;
    /*******************time code end************ */ 
    
    $(document).on('click','.picker-button',function(){
        $('.gettime').text($('.datetime-text').text());
        var settime = $('.gettime').text();
        //console.log(settime)

    })
    // var settime1 = $('.gettime').text();
    // //console.log(settime1)
    // var value = settime1;
    // var keyName = window.localStorage.key(0);
    // window.localStorage.setItem("key",value);
    // var _KEY_ = window.localStorage.getItem("key");
    
    if($('.datetime-text').length > 0){

   // console.log(_KEY_)

        var TIME = $('.datetime-text').text();
        var TIME = TIME;
        var TIME = TIME.split(":");

        var TIME1 = TIME[1];
        var TIME1 = TIME1.split(" ");

        var HOUR = hourLength == 1 ? hour1:hour
        var MIN = minLength == 1 ? min1:min
        //console.log(someVarName)

        }

        
    },1000)
    
    $(document).on('touchstart','page-intro .icon-close',function(){
        $(this).closest('.popup').removeClass('open');
        if($('.clock').length > 0){
            clock = $('.clock').FlipClock({
                clockFace: 'twelveHourClock'
            });
        }
    });
    $(document).on('touchstart','page-themes .icon-close',function(){
        $(this).closest('.popup').removeClass('open');
        if($('.clock').length > 0){
            clock = $('.clock').FlipClock({
                clockFace: 'twelveHourClock'
            });
        }
    });
    

    $(document).on('click','.save-btn',function(){
        $(this).addClass('saved');  
        if($('.theme-col.not-allow.pre').length == 1){
            $(this).closest('page-themes').find('.popup').addClass('open');
            $(this).removeClass('saved');
        }else{
            $(this).closest('page-themes').find('.popup').removeClass('open');
        }
    })
    $(document).on('click','.theme-col',function(){
        $('.save-btn').removeClass('saved');  
    })
    $(document).on('click','.theme-col',function(){
        $('.not-allow.theme-col').removeClass('pre');
        $(this).addClass('pre');  
    })
    

});