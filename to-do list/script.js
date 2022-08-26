const list = document.querySelector(".list");

const btn_new = document.querySelector(".new");

const textarea = document.querySelector("textarea")

btn_new.addEventListener("click", () => {
    const new_item = document.createElement("div");
    new_item.classList.add("item");

    const content = document.createElement("p");
    content.textContent = textarea.value;
    textarea.value = "";
    new_item.appendChild(content)

    const done = document.createElement("div");
    done.classList.add("done");
    const done_img = document.createElement("img");
    done_img.src = "done.png";
    done_img.style.height = "18px";
    done.appendChild(done_img);


    done.addEventListener("click", () => {
        list.removeChild(new_item);
    })

    const edit = document.createElement("div");
    edit.classList.add("edit");
    const edit_img = document.createElement("img");
    edit_img.src = "edit.png";
    edit_img.style.height = "15px";
    edit.appendChild(edit_img);

    edit.addEventListener("click", () => {
        content.textContent = prompt("Edit");
    })

    new_item.appendChild(done);
    new_item.appendChild(edit)

    list.appendChild(new_item);
});

const btn_clear = document.querySelector(".clear")

btn_clear.addEventListener("click", () => {
    list.textContent = "";
});
