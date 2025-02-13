let tskdata = [];

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
        div.setAttribute("style", "display: flex; align-items: center; background-color: rgb(36, 36, 36); border-radius: 1vmax; margin-bottom: 0.5em;transition:all ease 1s;");
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "rgb(50,50,50)";
        })
        div.addEventListener("mouseout", () => {
            div.style.backgroundColor = "rgb(36,36,36)";
        })

        let para = document.createElement("p");
        para.innerHTML = document.getElementById("area").value;
        para.setAttribute("style", "width:60%; height:auto; font-size: 1.7vmax; flex-grow: 1; overflow: hidden; white-space: normal; word-wrap: break-word;");

        let check = document.createElement("input");
        check.type = "checkbox";
        check.setAttribute("style", "width: 3vmax; height: 3vmax; margin: 0 0.5em; border-radius: 1vmax; cursor:pointer;");

        let cross = document.createElement("button");
        cross.setAttribute("style", "background-image: url('cross.png'); background-size: 100% 100%; width: 3vmax; height: 3vmax; margin: 0 0.5em; cursor:pointer;");

        let edit = document.createElement("button");
        edit.innerText = "Edit";
        edit.id = "edit";
        edit.setAttribute("style", "margin: 0 0.5em; cursor:pointer;");

        div.appendChild(para);
        div.appendChild(edit);
        div.appendChild(check);
        div.appendChild(cross);
        document.getElementById("list").appendChild(div);

        let task = { id: tskdata.length, msg: document.getElementById("area").value, status: "Pending" };

        check.onclick = function () {
            if (check.checked) {
                para.style.textDecoration = "line-through";
                task.status = "Completed";
                check.disabled = true;
            }
        };

        cross.onclick = function () {
            this.parentNode.remove();
            tskdata = tskdata.filter(elem => elem.msg != para.innerText);
            tskdata.forEach((elem, index) => {
                elem.id = index;
            });
        }

        edit.onclick = function () {
            let this_para = this.parentNode.querySelector('p');
            document.getElementById("area").value = para.innerText;
            let newText = prompt("Edit New Job =", para.innerText);
            if (newText !== null && newText.trim() !== "") {
                this_para.innerHTML = newText;
                task.msg = newText;
            }
        }

        tskdata.push(task);
    }
};