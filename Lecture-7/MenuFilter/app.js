
let menu = ["Kadhai Paneer", "Dal Makhni", "Onion Rings",
    "Chicken Biryani", "Kadhai Chicken", "Egg Curry",
    "Chicken Tikka", "Chhole Bhature", "Manchurian", "Dosa",
    "Onion Pizza", "Garlic Bread", "Paneer Butter Masala"
    , "Garlic Naan", "Amritsari Naan", "Onion Parantha",
    "Chilli Potato","Afghani Chicken"];


function isVeg(food) {
    
    if (food.toLowerCase().indexOf('chicken') !== -1 || food.toLowerCase().indexOf('egg') !== -1) {
        return false;
    }
    return true;
}

function isOnionGarlicFree(food) {
    
    if (food.toLowerCase().indexOf('onion') !== -1 || food.toLowerCase().indexOf('garlic') !== -1) {
        return false;
    }

    return true;
}


let vegMenu = menu.filter(isVeg);
console.log(menu);
console.log(vegMenu);

let jainMenu = menu.filter(isVeg).filter(isOnionGarlicFree);
console.log(jainMenu);