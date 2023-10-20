const includeTemplate= new XMLHttpRequest();
includeTemplate.open("GET","/template/template.html",true);
includeTemplate.onreadystatechange=function () {
    if(includeTemplate.readyState===4 && includeTemplate.status===200){
        const templateHTML=includeTemplate.responseText;
        var insertDiv=document.getElementById("contents");
        insertDiv.insertAdjacentHTML('afterbegin',templateHTML);
    }
};
includeTemplate.send();