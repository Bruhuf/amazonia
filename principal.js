var titulo = document.querySelector("h2");
         console.log(titulo);
         console.log(titulo.textContent);
         
         titulo.textContent = "Animais em extinção";


// var nota = document.querySelector("#primeiranota");

var pri = document.querySelector(".pri"); //nota - variavel 
var ano_pri = pri.textContent; //nota primeiro trimestre - variavel


        alert(ano_pri);

var seg = document.querySelector(".seg");
var ano_seg = seg.textContext;
        
        alert(ano_seg);

var ter = document.querySelector(".ter");
var ano_ter = ter.textContext;

        alert(ano_ter);

var mediafinal = document.querySelector(".final");
var aprovacao = (pri+seg+ter)/3;