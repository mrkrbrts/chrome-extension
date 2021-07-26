let myLeads = [];

const inputEl = document.querySelector("#input-el")
const inputButton = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");


    inputButton.addEventListener("click", function(){
        myLeads.push(inputEl.value)
        renderLeads();
        inputEl.value = "" 
    });

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a href="${myLeads[i]}" target="_blank">
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

