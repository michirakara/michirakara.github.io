const includeTemplate= new XMLHttpRequest();
includeTemplate.open("GET","https://michirakara.github.io/template/template.html",true);
includeTemplate.onreadystatechange=function () {
    if(includeTemplate.readyState===4 && includeTemplate.status===200){
        const templateHTML=includeTemplate.responseText;
        var insertDiv=document.getElementsById("contents");
        insertDiv.insertAdjacentHTML('afterbegin',templateHTML);
    }
};
includeTemplate.send();