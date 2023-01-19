<script>
function validateform()
{
var fullname  = document.firstform.fullname.val;
var pwd  =  document.pwd.val;

if(fullname==null || fullname=="")
{
alert("fullname should be filled")
 return true;  
}
else if(password.length<5)
alert("pwd must me upto 5 characters long"):
return false;
}
}
</script>
<body>
<form name =" firstform" method= "post"  action ="xyz.jpg" onsubmit =" return validateform()">
fullname = input type= "text" fullname ="name">
<br/>
pwd  = inputtype="pwd" name="pw">
<br/>
<inputtype="submit"value"register">
</body>
</form>
