// Create 
function addToSet(set, element) {
    set.add(element);
}
// Read 
function readFromSet(set, element) {
    return set.has(element);
}
// Update
function updateSet(set, oldElement, newElement) {
    if (set.has(oldElement)) {
        set.delete(oldElement);
        set.add(newElement);
    } else {
        throw new Error("Elemen tidak ditemukan di dalam set");
    }
}
// Delete 
function deleteFromSet(set, element) {
    set.delete(element);
}
// Penggunaan
let setMahasiswa = new Set(["Buya", "Siul", "Suga"]);
addToSet(setMahasiswa, "Anoman");
console.log(setMahasiswa); 
console.log(readFromSet(setMahasiswa, "Siul")); 
updateSet(setMahasiswa, "Siul", "Sial");
console.log(setMahasiswa); 
deleteFromSet(setMahasiswa, "Buya");
console.log(setMahasiswa); 
