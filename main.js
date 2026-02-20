function findArea() {
    let ricciardo = document.getElementById("ricciardo").value;
    let verstappen = document.getElementById("verstappen").value;
    let vettel = Number(ricciardo) * Number(verstappen) / 2;
    document.getElementById("vettel").value = vettel;
}
