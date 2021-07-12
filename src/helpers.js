
// choice(items): returns a randomly selected item from array of items
function choice(items) {


    if (items.length > 0) {

        let idxRandom = Math.floor(Math.random() * items.length) + 1;

        return items[idxRandom];

    } else {
        return
    }

}

// remove(items, item): removes the first matching item from items, 
// if item exists, and returns it. Otherwise returns undefined.
function remove(items, item) {

    const idx = items.indexOf(item);
    if (idx > -1) {

        items.splice(idx, 1);
        return item;

    } else {
        return
    }

}

export { choice, remove };
