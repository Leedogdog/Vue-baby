export function getTimer(){

    var now = new Date().getHours(),end;
    if(now<10 || now >=22){
        end = new Date(new Date().getFullYear() + "-" + (new Date().getMonth()+1) + "-" + (new Date().getDate()+1) + " " +"10:00:00").getTime();
        if(location.pathname == "/home")
            document.getElementsByClassName("start")[0].innerHTML = "10点场";
    }
    if(now>=10 && now<15){
        end = new Date(new Date().getFullYear() + "-" + (new Date().getMonth()+1) + "-" + (new Date().getDate()+1) + " " +"15:00:00").getTime();
        if(location.pathname == "/home")
            document.getElementsByClassName("start")[0].innerHTML = "15点场";
    }
    if(now>=15 && now<22){
        end = new Date(new Date().getFullYear() + "-" + (new Date().getMonth()+1) + "-" + (new Date().getDate()+1) + " " +"22:00:00").getTime();
        if(location.pathname == "/home")
            document.getElementsByClassName("start")[0].innerHTML = "22点场";
    }

    var timer = setInterval(function(){
        var current = new Date().getTime(),
            time = Math.floor((end - current) / 1000);

        var seconds = ("0" + time % 60).slice(-2),
            minutes = ("0" + Math.floor(time / 60) % 60).slice(-2),
            hours = ("0" + Math.floor(time / (60 * 60)) % 24).slice(-2);
        if(location.pathname == "/home")
            document.getElementsByClassName("time")[0].innerHTML = hours + ":" + minutes + ":" + seconds;
        if (time <= 0)
                clearInterval(timer);
    },1000)


}