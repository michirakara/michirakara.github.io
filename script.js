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
    elem.classList.add("one-ren");

    let result=InternalGacha();
    elem.appendChild(result);
    
    let tobe=document.getElementById("simoneta-result");
    tobe.replaceWith(elem);

    let share=document.getElementById("twitter-share-button");
    let str="https://twitter.com/share?url=michirakara.github.io&text=";
    if(result.classList.contains("success")){
        str+="ち　ん　こ　だ　ぁ　！";
    }else{
        str+="下ネタガチャで下ネタが出ませんでした…";
    }
    str+="あなたも下ネタガチャで遊ぼう！";
    console.log(str);
    share.setAttribute('href',str);
}
function TenRenSimonetaGacha(){
    let elem = document.createElement("div");
    elem.id="simoneta-result";
    elem.classList.add("ten-ren");

    let score=0;

    for(var i=0;i<10;i++){
        let result = InternalGacha();
        elem.appendChild(result);
        if(result.classList.contains("success"))score++;
    }
    let tobe=document.getElementById("simoneta-result");
    tobe.replaceWith(elem);

    let share=document.getElementById("twitter-share-button");
    let str="https://twitter.com/share?url=michirakara.github.io&text=";
    str+="10連下ネタガチャの結果..."+score.toString()+"ちんこでした！"+"あなたも下ネタガチャで遊ぼう！";
    console.log(str);
    share.setAttribute('href',str);
}