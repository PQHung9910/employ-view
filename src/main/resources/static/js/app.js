let allData = [];
let currentPage = 0;
let pageSize = 10;
let totalPages = 0;

function openForm() {
    document.getElementById("formBox").style.display = "block";
}

function closeForm() {
    document.getElementById("formBox").style.display = "none";
}

/* ADD EMPLOYEE */
function addEmployee() {

    let data = {
        maNV: document.getElementById("maNV").value,
        tenNV: document.getElementById("tenNV").value,
        lidoNghi: document.getElementById("lydoNghi").value,
        soNgayNghi: document.getElementById("soNgayNghi").value
    };

    fetch("http://localhost:8080/api/users/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(() => {
            closeForm();
            loadData(); // reload bảng
        });
}

/* LOAD DATA */
function loadData() {
    fetch(`http://localhost:8080/api/users/list?page=${currentPage}&size=${pageSize}`)
        .then(res => res.json())
        .then(data => {
            allData = data.content;
            totalPages = data.totalPages;

            renderTable(allData);

            updatePagination();
        });
}

/* RENDER TABLE */
function renderTable(list) {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    list.forEach(e => {
        tbody.innerHTML += `
            <tr>
                <td>${e.maNV}</td>
                <td>${e.tenNV}</td>
                <td><span class="badge">${e.lidoNghi}</span></td>
                <td>${e.soNgayNghi ?? 0}</td>
            </tr>
        `;
    });
}

/* SEARCH */
document.getElementById("search").addEventListener("input", function(e) {

    let keyword = e.target.value.toLowerCase();

    let filtered = allData.filter(emp =>
        emp.tenNV.toLowerCase().includes(keyword)
    );

    renderTable(filtered);
});

function nextPage() {
    currentPage++;
    loadData();

    document.getElementById("pageNumber").innerText =
        "Page " + (currentPage + 1);
}

function prevPage() {

    if(currentPage > 0) {
        currentPage--;

        loadData();

        document.getElementById("pageNumber").innerText =
            "Page " + (currentPage + 1);
    }
}

function updatePagination() {

    document.getElementById("pageNumber").innerText =
        "Page " + (currentPage + 1);

    // HIDE PREV
    if(currentPage === 0) {
        document.getElementById("prevBtn").style.display = "none";
    }
    else {
        document.getElementById("prevBtn").style.display = "inline-block";
    }

    // HIDE NEXT
    if(currentPage >= totalPages - 1) {
        document.getElementById("nextBtn").style.display = "none";
    }
    else {
        document.getElementById("nextBtn").style.display = "inline-block";
    }
}

/* INIT */
loadData();