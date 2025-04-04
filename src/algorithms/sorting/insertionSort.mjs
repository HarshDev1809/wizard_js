// src/insertion-sort.mjs
function insertionSort(array, order = "asc") {
    if (!array || !Array.isArray(array) || array.length === 0) {
        throw new Error("Please provide a valid array for sorting!");
    }

    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        if(order === "asc"){
            while (j >= 0 && array[j] > key) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = key;
        }else if(order === "desc"){
            while (j >= 0 && array[j] < key) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = key;
        }else{
            throw new Error("Invalid sorting order given");
        }
    }

    return array;
}

export { insertionSort };