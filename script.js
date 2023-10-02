function InternalGacha(){
    let text = document.createElement("p");
    text.style="display:inline";
    if(Math.random()<0.90){
        text.innerHTML="ざんねん";
    }else{
        text.innerHTML="ちんこ";
        text.classList=["success"];
    }
    return text;
}
function SimonetaGacha(){
    let elem = document.createElement("div");
    elem.id="simoneta-result";
    elem.appendChild(InternalGacha());
    let tobe=document.getElementById("simoneta-result");
    tobe.replaceWith(elem);
}
function TenRenSimonetaGacha(){
    let elem = document.createElement("div");
    elem.id="simoneta-result";
    for(var i=0;i<10;i++){
        elem.appendChild(InternalGacha());
    }
    let tobe=document.getElementById("simoneta-result");
    tobe.replaceWith(elem);
}