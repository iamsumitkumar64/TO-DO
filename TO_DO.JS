let tskdata = [];
let count = 1;
let id;
let msg;
let status = "Pending";

document.getElementById("area").addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        create();
        document.getElementById("area").value = "";
        console.log(tskdata);
    }
});

function create() {
    if (document.getElementById("area").value == "") {
        window.alert("Input Field is Empty");
    } else {
        let div = document.createElement("div");
        div.style.display = "flex";
        div.style.alignItems = "center";
        div.style.backgroundColor = "rgb(54, 54, 54)";
        div.style.borderRadius = "1vmax";
        div.style.marginBottom = "0.5em";

        let para = document.createElement("p");
        para.innerHTML = document.getElementById("area").value;
        para.style.fontSize = "2vmax";
        para.style.flexGrow = "1"; 

        let check = document.createElement("input");
        check.type = "checkbox";
        check.style.width = "3vmax";
        check.style.height = "3vmax";
        check.style.margin = "0 0.5em";

        let cross = document.createElement("button");
        cross.style.backgroundImage = "URL('cross.png')";
        cross.style.backgroundSize = "100% 100%";
        cross.style.width = "3vmax";
        cross.style.height = "3vmax";
        cross.style.margin = "0 0.5em";


        let edit = document.createElement("button");
        edit.innerText = "Edit";
        edit.id = "edit";
        edit.style.margin = "0 0.5em";

        div.appendChild(para);
        div.appendChild(edit);
        div.appendChild(check);
        div.appendChild(cross);
        document.getElementById("list").appendChild(div);

        let task = { id: count, msg: document.getElementById("area").value, status: "Pending" };

        tskdata.push(task);

        check.onclick = function () {
            if (check.checked) {
                para.style.textDecoration = "line-through";
                task.status = "Completed";
                check.disabled = true;
            }
        };

        cross.onclick = function () {
            this.parentNode.remove();
        }

        edit.onclick = function () {
            let para = this.parentNode.querySelector('p');
            let newText = prompt("Edit New Job =", para.innerHTML);
            if (newText !== null && newText.trim() !== "") {
                para.innerHTML = newText;
            }
        }

        count++;
    }
};