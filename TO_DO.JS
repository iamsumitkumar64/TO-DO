document.getElementById("area").addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        create();
        document.getElementById("area").value = "";
        // let text = document.getElementById("area").value;
        // document.getElementById("list").innerHTML = text;
    }
});
function create() {
    if (document.getElementById("area").value == "") {
        window.alert("Input Field is Empty");
    } else {
        let div = document.createElement("div");//CREATE DIV
        document.getElementById("list").appendChild(div);//APPEND DIV
        div.style.display = "flex";//DESIGN DIV
        div.style.alignItems = "center"; // Add this line to vertically center elements

        let para = document.createElement("p");//CREATE PARAGRAPGH
        let text = document.getElementById("area").value;
        para.innerHTML = text;//DESIGN PARAGRAPGH
        para.style.fontSize = "2vmax"; // Use em units instead of rem
        para.style.flexGrow = "1"; // Make paragraph take up available space

        let check = document.createElement("input");//CREATE CHECKBOX
        check.type = "checkbox";//DESIGN CHECKBOX
        check.style.width = "3vmax"; 
        check.style.height = "3vmax";
        check.style.margin = "0 0.5em"; // Add some margin to create space

        let cross = document.createElement("button");//CREATE CROSS TICK
        cross.style.backgroundImage = "URL('cross.png')";//DESIGN CROSS TICK
        cross.style.backgroundSize = "100% 100%";
        cross.style.width = "3vmax"; 
        cross.style.height = "3vmax";
        cross.style.margin = "0 0.5em"; // Add some margin to create space

        div.appendChild(para);//APPEND PARAGRAPH
        div.appendChild(check);//APPEND CHECKBOX
        div.appendChild(cross);//APPEND CROSS TICK

        check.onclick = function () {
            if (check.checked) {    //MAKE WORK DONE AND LEAVE MARK ON IT
                para.style.textDecoration = "line-through";
                check.disabled = true;  //DISABLED AGAIN CHECKBOX
            }
        };
        cross.onclick = function () {   //DELETE A WORK THAT IS DONE OR USER DON'T WANT
            this.parentNode.parentNode.removeChild(this.parentNode);
        }
    }
};