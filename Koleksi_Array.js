// Create 
function addToList(list, element) {
    list.push(element);
}
// Read 
function readFromList(list, index) {
    if (index >= 0 && index < list.length) {
        return list[index];
    }
    throw new Error("Indeks di luar jangkauan");
}
// Update
function updateList(list, index, newValue) {
    if (index >= 0 && index < list.length) {
        list[index] = newValue;
    } else {
        throw new Error("Indeks di luar jangkauan");
    }
}
// Delete
function deleteFromList(list, index) {
    if (index >= 0 && index < list.length) {
        list.splice(index, 1);
    } else {
        throw new Error("Indeks di luar jangkauan");
    }
}
// Penggunaan
let listMahasiswa = ["Boyang", "Singkuyang", "Abang"];
console.log("List mahasiswa :");
console.log(listMahasiswa);
addToList(listMahasiswa, "Ani");
console.log("C : ",listMahasiswa);
console.log("R : ",readFromList(listMahasiswa, 1));
updateList(listMahasiswa, 2, "Agung");
console.log("U : ",listMahasiswa);
deleteFromList(listMahasiswa, 0);
console.log("D : ",listMahasiswa); 

