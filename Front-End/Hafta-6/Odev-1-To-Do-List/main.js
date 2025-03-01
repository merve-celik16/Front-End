const shoppingList = document.querySelector(".shopping-list");
const shoppingForm = document.querySelector(".shopping-form");
const filterButtons = document.querySelectorAll(".filter-buttons button");
const clearBtn = document.querySelector(".clear");



//sayfaya önce html öğeleri yüklensin
document.addEventListener("DOMContentLoaded", function () {
    loadItems(); 

    updateState();

    shoppingForm.addEventListener("submit", handleFormSubmit); //formu submit ettiğimizde hangleform çağrılacak
    for(let button of filterButtons) {
        button.addEventListener("click", handleFilterSelection); //her butona ayrı ayrı click eventi 
    }

    clearBtn.addEventListener("click", clear);
}); 

function clear() {
    shoppingList.innerHTML = "";
    localStorage.clear("shoppingItems");
    updateState();
}

function updateState() {
    const isEmpty = shoppingList.querySelectorAll("li").length === 0;

    const alert = document.querySelector(".alert");
    const filterBtns = document.querySelector(".filter-buttons");

    alert.classList.toggle("d-none", !isEmpty);  //liste boşsa, gözük
    clearBtn.classList.toggle("d-none", isEmpty);
    filterBtns.classList.toggle("d-none", isEmpty);
}

//Save to local storage
function saveToLS() {
    const listItems = shoppingList.querySelectorAll("li");
    const liste = [];

    for(let li of listItems) {
        const id = li.getAttribute("item-id");
        const name = li.querySelector(".item-name").textContent;
        const completed = li.hasAttribute("item-completed");

        liste.push({id,name, completed}); // tarayıcı belleğinde saklanacak listeyi oluşturduk
    }
    localStorage.setItem("shoppingItems", JSON.stringify(liste)); //listeyi stringe çevirerek saklayabilmek için JSON kullandık
}


function loadItems() {
    const items = JSON.parse(localStorage.getItem("shoppingItems")) || []; 

    shoppingList.innerHTML = ""; // Bu, daha önce gösterilen alışveriş listesinin HTML içeriğini temizlemek için kullanılıyor.
    
    for(let item of items) {
        const li = createListItem(item);
        shoppingList.appendChild(li);
    }
}

function addItem(input) {  //liste formatına uygun yeni bir değer tanımlıyoruz
    const id = generateId();
    console.log(id)
    const newItem = createListItem( {
        id: id,  // idsini random da belirleyebilirdik, biz fonksiyonla taımlayarak aldık
        name: input.value,
        completed: false
    });

    shoppingList.prepend(newItem); // appendchild, listenin sonuna, prepend ise başına ekler

    input.value = "";

    updateFilteredItems();

    saveToLS();

    updateState();


}

function generateId() {
    return Date.now().toString();
}

function handleFormSubmit(e) {
    e.preventDefault();  // sayfa, submite tıklandığında yenilenmesin istiyoruz
    const input = document.getElementById("item_name");

    if(input.value.trim().length === 0) {  //trim boşlukları siler ve boş bir değer girilmişse alarm verir
        alert("Yeni değer giriniz:");
        return;
    }

    addItem(input); //bir değer giriyorsak additem çalışır
}

function toggleCompleted(e) {
    const li = e.target.parentElement;
    li.toggleAttribute("item-completed", e.target.checked);

    updateFilteredItems();

    saveToLS();
}

function createListItem(item) {
    // checkbox
    const input = document.createElement("input");
    input.type = "checkbox";
    input.classList.add("form-check-input");
    input.checked = item.completed;
    input.addEventListener("change", toggleCompleted);

    //item
    const div = document.createElement("div");
    div.textContent = item.name;
    div.classList.add("item-name");
    div.addEventListener("click", openEditMode);
    div.addEventListener("blur", closeEditMode);
    div.addEventListener("keydown", cancelEnter);

    
    // delete icon
    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fs-3 bi bi-x text-danger delete-icon";
    deleteIcon.addEventListener("click", removeItem);


    // li
    const li = document.createElement("li");
    li.setAttribute("item-id", item.id);
    li.className = "border rounded p-2 mb-1";
    li.toggleAttribute("item-completed", item.completed) //toggle,varsa ekle yoksa ekleme der. item.completed true ya da false verir
    
    li.appendChild(input);
    li.appendChild(div);
    li.appendChild(deleteIcon);

    return li;
}

function removeItem(e) {
    const li = e.target.parentElement;
    shoppingList.removeChild(li);

    saveToLS();

    updateState();
}

function openEditMode(e) {  //item completed değilse değiştirme özelliği
    const li = e.target.parentElement;
    if(li.hasAttribute("item-completed") == false) {
        e.target.contentEditable = true;
    }
}

function closeEditMode(e) {
    e.target.contentEditable = false;

    saveToLS();
}

function cancelEnter(e) {
    if(e.key == "Enter") {
        e.preventDefault();
        closeEditMode(e);
    }
        
}

//seçili olan butona primary ekleyip secondaryi siler
function handleFilterSelection(e) {
    const filterBtn = e.target;

    for(let button of filterButtons) {
        button.classList.add("btn-secondary");
        button.classList.remove("btn-primary");

    }

    filterBtn.classList.add("btn-primary");  
    filterBtn.classList.remove("btn-secondary");

    filterItems(filterBtn.getAttribute("item-filter"));
}

function filterItems(filterType){
    const li_items = shoppingList.querySelectorAll("li");

    for(let li of li_items) {

        li.classList.remove("d-flex");
        li.classList.remove("d-none");

        const item_completed = li.hasAttribute("item-completed"); // elemanın item completedi var mı?

        if(filterType == "completed") {
            // tamamlananları göster
            li.classList.toggle(item_completed ? "d-flex":"d-none"); //completed ise görünür yap
        } else if(filterType == "incomplete") {
            // tamamlanmayanları göster
            li.classList.toggle(item_completed ? "d-none":"d-flex");
        } else {
            // hepsini göster
            li.classList.toggle("d-flex");
        }

    }   
}

function updateFilteredItems() {
    const activeFilter = document.querySelector(".btn-primary[item-filter]");

    filterItems(activeFilter.getAttribute("item-filter"));
}