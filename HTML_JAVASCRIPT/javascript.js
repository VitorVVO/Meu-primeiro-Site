var change=null;
var painelimgatual=1;

function mudaBackgorund(){
    if (change==false || change==null){
        document.getElementById("link").href = "estilo2.css";
        change=true;
    }
    else{
        document.getElementById("link").href = "estilo.css";
        change=false;
    }
}

function iniciaBackgorund(){
    if (change==false){
        document.getElementById("link").href = "estilo2.css";
    }
    else{
        document.getElementById("link").href = "estilo.css";
    }
}

function addpainel(){
    painelimgatual++;
    if(painelimgatual==1){
        document.getElementById("painelDeFotos").src="httpSite.jpg"
    }
    else if(painelimgatual==2){
        document.getElementById("painelDeFotos").src="unb.png"
    }
    else if(painelimgatual==3){
        document.getElementById("painelDeFotos").src="lunaMeg.jpeg"
    }
    else if(painelimgatual==4){
        document.getElementById("painelDeFotos").src="adsense.jpg"
    }
    else if(painelimgatual==5){
        document.getElementById("painelDeFotos").src="gifjoinha.gif"
    }
    else{
        painelimgatual=1;
        document.getElementById("painelDeFotos").src="httpSite.jpg"
    }
}

function subpainel(){
    painelimgatual--;
    if(painelimgatual==1){
        document.getElementById("painelDeFotos").src="httpSite.jpg"
    }
    else if(painelimgatual==2){
        document.getElementById("painelDeFotos").src="unb.png"
    }
    else if(painelimgatual==3){
        document.getElementById("painelDeFotos").src="lunaMeg.jpeg"
    }
    else if(painelimgatual==4){
        document.getElementById("painelDeFotos").src="adsense.jpg"
    }
    else if(painelimgatual==5){
        document.getElementById("painelDeFotos").src="gifjoinha.gif"
    }
    else{
        painelimgatual=5;
        document.getElementById("painelDeFotos").src="gifjoinha.gif"
    }
}