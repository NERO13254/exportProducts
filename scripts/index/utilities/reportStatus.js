export function reportStatus(message,title,description,arrName,arrId,append){
    
    let btnContents = "";
    arrId.forEach((data,index) => {
        btnContents+= `<button id='${data}'>${arrName[index]}</button>`
    });
    
    
    const div = document.createElement("div");
    div.className= "statusContent";
    div.innerHTML = `
    <strong class='reportStatusMessage'>${message}</strong>
    <h3 class='reportStatusTtile'>${title}</h3>
    <p>${description}</p>
    <div class='buttonContent'>
        ${btnContents}
    </div>
    `;

    append.append(div);
    const cancelProcess = document.getElementById("cancelProcess");
    if(cancelProcess){
        cancelProcess.addEventListener("click" , ()=>{
            append.innerHTML='';
        });
    }

}