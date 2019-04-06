var can=document.getElementById("canvas");
var ctx=can.getContext("2d");
var w=can.width=window.innerWidth;
var h=can.height=window.innerHeight;
var count=30;
var drops=[];
window.onresize=function(){
    w=can.width=window.innerWidth;
    h=can.height=window.innerHeight;
}
function Drop(){}
Drop.prototype={
    init:function(){
        this.x=random(0,w);//坐标
        this.y=0;
        this.r=1;//半径
        this.vy=random(4,5);//竖直方向加速度
        this.vr=1;//半径加速度
        this.a=1;//初始透明度
        this.va=0.96;//透明度系数
        this.l=random(h*0.8,h*0.9);//下落高度
    },
    draw:function () {
        if(this.y>this.l){
            ctx.beginPath();
            ctx.arc(this.x,this.y,this.r,0,2*Math.PI,false);
            ctx.strokeStyle="rgba(0,255,255,"+this.a+")";
            ctx.stroke();
        }
        else{
            ctx.fillStyle=color(this.a);
            ctx.fillRect(this.x,this.y,2,10);
        }
        this.update();
    },
        update:function(){
            if(this.y<this.l){
            this.y+=this.vy;
            }else{
                if(this.a>0.03){
                    this.r+=this.vr;
                    if(this.r>50){
                        this.a*=this.va;
                        }
                    }else{
                        this.init();
                    }
                }
            }
        }
        function move(){
            ctx.fillStyle="rgba(0,0,0,.1)";
            ctx.fillRect(0,0,w,h);
            for(var i=0;i<drops.length;i++){
                drops[i].draw();
            }
            requestAnimationFrame(move);
        }
        function setup(){
            for(var i=0;i<count;i++){
                (function(j){
                    setTimeout(function(){
                        var drop=new Drop();
                        drop.init();
                        drops.push(drop);
                    },j*200)
                }(i))
            }
        }
        setup();
        move();
        function random(min,max){
            return Math.random()*(max-min)+min;
        }
        function color(a){
            var r = Math.floor(Math.random()*255);
            var g = Math.floor(Math.random()*255);
            var b = Math.floor(Math.random()*255);
            return "rgba("+r+","+g+","+b+","+a+")";
        }   