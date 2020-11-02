/**
 * Created by derci on 09/04/2019.
 */


var numero,valor;
var vetor,vsoma=0;
var i=0,resto,tamanho;
var txt2= document.getElementById('txt2');
var txt1= document.getElementById('txt1');

txt1.onkeyup=function(){noveFora()};
//txt1.addEventListener("keyup",noveFora);
    function  limpar(){
        vetor= new Array();
        numero="";
        vsoma=0;
        i=0;
        resto=0;
        tamanho=0;
    }

    function separaDigitos(n1){
        numero= parseInt(n1);
        tamanho=numero.toString().length;
        vetor=new Array(tamanho);
        if(numero>9){
            while(numero!=0){
                resto= numero%10;
                vetor[i]= resto;
                i++;
                numero= parseInt(numero/10);
            }
        }
    }
    function somar(){
     for (var j = 0; j < i; j++) {
         vsoma = vetor[j] + vsoma;
     }
 }
    function condicao(){
        separaDigitos(document.getElementById('txt1').value);
        somar();
        if(vsoma>9){
            valor=vsoma;
            limpar();
            separaDigitos(valor);
            somar();
        }
        else if(vsoma==9){
            vsoma=0;
        }
        txt2.value=vsoma;
        limpar();
    }

    function noveFora() {
        condicao();
    }