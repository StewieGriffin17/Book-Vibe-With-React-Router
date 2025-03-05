const getStoredReadList = () => {
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
};

const addToReadList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)){
        console.log(id, "already exists in the read list.")
    } else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
    }
}

const getStoredWishList = () => {
    const storedListStr = localStorage.getItem('Wish-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
};

const addToWishList = (id) => {
    const storedList = getStoredWishList();
    if (storedList.includes(id)){
        console.log(id, "already exists in the Wish list.")
    } else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('Wish-list', storedListStr);
    }
}

export {addToReadList, addToWishList, getStoredReadList, getStoredWishList};