// select all required elements

const filterItems = document.querySelector(".items")
const filterImg = document.querySelectorAll(".image")

window.onload = () => { //once window loaded
    filterItems.onclick = (selectedItem) => { //when user clicked on fileterItem div
        if (selectedItem.target.classList.contains("item")) { // if user click element has .item class
            filterItems.querySelector(".active").classList.remove("active"); //remove the active class which is the first element
            selectedItem.target.classList.add("active") //add that active class on the user selected element or items
            let filterName = selectedItem.target.getAttribute("data-name");  //getting data-name value of ther user selected items and storing in a filterName variable
            filterImg.forEach((image) =>{
                let filterImages = image.getAttribute("data-name");  //getting image data-name value

                // if user selected item data-value is equal to image data-name value
                // if user selected item data-value is equal to "all"
                if((filterImages == filterName) || (filterName == "all")){
                    image.classList.add("show")
                }else{
                    image.classList.add("hide")
                    image.classList.remove("show")

                }
                
            })
            
        }
    }
}