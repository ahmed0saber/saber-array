function getByProp(arr, prop, value) {
    return arr.filter((el) => el[prop] === value);
}

function updateByProp(arr, prop, value, changes) {
    arr.forEach((el) => {
        if (el[prop] === value) {
            Object.assign(el, changes);
        }
    });
}

function removeByProp(arr, prop, value) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i][prop] === value) {
            arr.splice(i, 1);
        }
    }
}

function insertAt(arr, index, el) {
    arr.splice(index, 0, el);
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function removeDuplicates(arr) {
    const set = new Set();
    for (let i = 0; i < arr.length; i++) {
        const obj = arr[i];
        const str = JSON.stringify(obj);
        if (set.has(str)) {
            arr.splice(i, 1);
            i--;
        } else {
            set.add(str);
        }
    }
}

function insertSorted(arr, el, prop) {
    const index = arr.findIndex((e) => e[prop] < el[prop]);
    if (index >= 0) {
        arr.splice(index, 0, el);
    } else {
        arr.push(el);
    }
}

module.exports = {
    getByProp,
    updateByProp,
    removeByProp,
    insertAt,
    shuffle,
    removeDuplicates,
    insertSorted,
}
