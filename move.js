var oDiv = document.getElementById("ziti");
var oSpan = document.getElementsByTagName('span')[0];
function random(min,max){
    return Math.random()*(max-min)+min;
}
var flag2=0;
var l=Math.floor(this.random(0,750));
var t=Math.floor(this.random(0,580));
var p1=Math.floor(this.random(0,750));
var p2=Math.floor(this.random(0,580));
var a = this.color();
function animation() {
    var flag = setInterval(function changeColor() {
        a = this.color();
        oSpan.style.cssText = 'line-height:100px;text-aglin:center;margin-left:100px;font-size:24px;color:' + a;
    }, 200)
    var flag1=setInterval(function move(){
        if(l>p1&&flag2==0){
            if(t>p2){
            oDiv.style.cssText='width:300px;height:100px;position:absolute;left:'+l+'px;top:'+t+'px';
            l-=0.2;
            t-=0.2;
            if(l<p1||t<p2){
                flag2=1;
                p1=Math.floor(this.random(0,750));
                p2=Math.floor(this.random(0,580));
                }
            }
            else{
                oDiv.style.cssText='width:300px;height:100px;position:absolute;left:'+l+'px;top:'+t+'px';
                l-=0.2;
                t+=0.2;
                if(l<p1||t>p2){
                    flag2=1;
                    p1=Math.floor(this.random(0,750));
                    p2=Math.floor(this.random(0,580));
                    }
                }
           }
           else{
            if(t>p2){
                oDiv.style.cssText='width:300px;height:100px;position:absolute;left:'+l+'px;top:'+t+'px';
                l+=0.2;
                t-=0.2;
                if(l>p1||t<p2){
                    flag2=0;
                    p1=Math.floor(this.random(0,750));
                    p2=Math.floor(this.random(0,580));
                    }
                }
                else{
                    oDiv.style.cssText='width:300px;height:100px;position:absolute;left:'+l+'px;top:'+t+'px';
                    l+=0.2;
                    t+=0.2;
                    if(l>p1||t>p2){
                        flag2=0;
                        p1=Math.floor(this.random(0,750));
                        p2=Math.floor(this.random(0,580));
                        }
                    }
           }
    },1);
}
this.animation();
function color() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgba(" + r + "," + g + "," + b + ",1)";
}   
