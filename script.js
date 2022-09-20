<style>
input[type="button"]{
width: 200px;
height: 200px;
border:none;
font-size:3em;
color:#E7E7E7;
}
#sonuc{
    
}
#azalt{
    background: #e71717;
}
#arttir{
    background: #1e6118;
}
#sonuc{
    background: #02222a;
}
 
</style>
<title>yazilimkodlama.com</title>
 
</head>
<body>
    <input id="azalt" type="button" onclick="azalt()" value="-">
    <input type="button" id="sonuc" value="0">
    <input id="arttir" type="button" onclick="arttir()" value="+">
<script>
function arttir(){
 
var sonuc=document.getElementById("sonuc");
sonuc.value=Number(sonuc.value)+1;
}
 
function azalt(){
 
var sonuc=document.getElementById("sonuc");
sonuc.value=Number(sonuc.value)-1;
}
 
</script>