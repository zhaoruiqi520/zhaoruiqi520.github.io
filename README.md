
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>登入</title>
    <link rel="stylesheet" href="css.css">
</head>
<body>
    <div id="wrapper">
        <h1>登入</h1>
        <form action="" method="get">
            <p><img src="user.png"><label for="username">用户名:</label><input class="us" type="text" name="username" value="请输入用户名" style="color:#999" onfocus="if(this.value=='请输入用户名')this.value='';this.style.color='#424242'" onblur="if(this.value=='')this.value='请输入用户名';this.style.color='#999'"></p>
            <p><img src="pas.png"><label for="password">密码:&nbsp;&nbsp;&nbsp;</label><input class="us" type="password" name="password"></p>
            <p><span type="submit" value="" id="sub" onclick="dengru()"></span></p>
            </form>
    </div>
    <script>
    function dengru(){
        var va=document.getElementsByTagName("input");
        if(va[0].value=="赵锐琦"&&va[1].value=="5201314"){
            window.location.href="index.html";
        }else{
            alert("账户或密码错误")
        }
        va[0].value="";
        va[1].value="";
    }
    </script>
</body>
</html>
