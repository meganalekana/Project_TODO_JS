var parent = document.getElementById("parent")
var cardcontainer = document.getElementById("card_container")
var cardName = document.getElementById("cardname")
var addTaskPopup = document.getElementById("addTaskPopup")
var container = document.getElementById("container")
var notask = document.getElementById("notask")
var additemPopup = document.getElementById("additemPopup")
var singlecard = document.getElementById("singlecard")
var topHead = document.getElementById("top_head")
var cardNameHead = document.getElementById("cardname_head")
var afafafadf = document.getElementsByClassName

//add task button
function showAddTask(){
    addTaskPopup.classList.remove("hide")
    parent.classList.add("blur")
}
function closeAddTask(){
    addTaskPopup.classList.add("hide")
    parent.classList.remove("blur")
    
}

//
function addCard(){
    notask.classList.add("hide")
    closeAddTask()
    //create elements
    let card = document.createElement("div")
    let cardHeading = document.createElement("h3")
    let line = document.createElement("hr")
    let itemList = document.createElement("div")
    let cardButton = document.createElement('div')
    let iconadd = document.createElement("i")
    let icondelete = document.createElement("i")


    //append child
    cardcontainer.appendChild(card)
    card.appendChild(cardHeading)
    card.appendChild(line)
    card.appendChild(itemList)
    card.appendChild(cardButton)
    card.appendChild(iconadd)
    card.appendChild(icondelete)
   
   
    //give values
    cardHeading.innerText = cardName.value
    cardHeading.style.color="crimson"
    cardName.value = ""  //clearing the popup input
    itemList.classList.add('itemlist')
    //card.classList.add('card_buttons')
    iconadd.classList.add("fa-solid","fa-plus", "plusButton")
    icondelete.classList.add("fa-regular","fa-trash-can", "trashButton")

    //classes over here
    card.classList.add("card")
     
    //delete button
    icondelete.addEventListener("click", function(){
        card.remove()
        if(cardcontainer.innerText ===''){
            notask.classList.remove('hide')
        }
    })

    //add item
    iconadd.addEventListener("click", function(){
        
        additemPopup.classList.remove('hide')
        parent.classList.add('blur')
        //create elements
        let itemPopupHeading = document.createElement("h3")
        let inputCenter = document.createElement('center')
        let itemName = document.createElement("input")
        itemName.placeholder = 'Item Name'
        let buttonSpace = document.createElement('div')
        let addButton = document.createElement("button")
        let closeButton= document.createElement("button")

        //append elemets
        additemPopup.appendChild(itemPopupHeading)
        additemPopup.appendChild(inputCenter)
        inputCenter.appendChild(itemName)
        additemPopup.appendChild(buttonSpace)
        buttonSpace.appendChild(addButton)
        buttonSpace.appendChild(closeButton)

        //give element values
        additemPopup.classList.add('box')
        itemPopupHeading.innerText = "add task"
        buttonSpace.classList.add('buttons')
        itemName.classList.add('input')
        itemName.classList.add('center')
        addButton.classList.add('add_button')
        closeButton.classList.add('close_button')
        addButton.innerText = "add"
        closeButton.innerText = "close"
       
        //closeButton.addEventListener('mouseover')
        

        addButton.addEventListener('click', ()=>{
            additemPopup.classList.add('hide')
            parent.classList.remove('blur')

            //creating ite elements
            let item = document.createElement('div')
            let itemText = document.createElement('span')
            let markDone = document.createElement('button')

            //append child
            item.appendChild(itemText)
            item.appendChild(markDone)

            // values
            itemText.innerText = itemName.value
            markDone.innerText = "Mark Done"
            item.style.backgroundColor="white"
            itemText.style.backgroundColor="white"
            markDone.classList.add('markdonebutton')

            //appending the item to item list
            itemList.appendChild(item)
            additemPopup.innerText =""

            markDone.addEventListener('click', function(){
                itemText.classList.add('markDone')
                markDone.classList.add('hide')
            })

        })
    })

    //handle cardheading click
    cardHeading.addEventListener('click' , function(){
        cardHeading.style.cursor  = 'pointer'
        cardNameHead.classList.remove('hide')
        cardNameHead.innerText = cardHeading.innerText
        singlecard.classList.remove('hide')
        cardcontainer.classList.add('hide')

        //create copy of card
        let copyCard = card.cloneNode(true)
        singlecard.appendChild(copyCard)
        
        //to detele card
        copyCard.lastElementChild.addEventListener("click", function(){
            card.remove()
            copyCard.remove()
            if(cardcontainer.innerText ===''){      
                notask.classList.remove('hide')
            }
            back()
        })

        //to add items in cloned card 
        copyCard.lastElementChild.previousElementSibling.addEventListener("click", function(){
            
            additemPopup.classList.remove('hide')
            parent.classList.add('blur')
            //create elements
            let itemPopupHeading = document.createElement("h3")
            let inputCenter = document.createElement('center')
            let itemName = document.createElement("input")
            itemName.placeholder = 'Item Name'
            let buttonSpace = document.createElement('div')
            let addButton = document.createElement("button")
            let closeButton= document.createElement("button")

            //append elemets
            additemPopup.appendChild(itemPopupHeading)
            additemPopup.appendChild(inputCenter)
            inputCenter.appendChild(itemName)
            additemPopup.appendChild(buttonSpace)
            buttonSpace.appendChild(addButton)
            buttonSpace.appendChild(closeButton)

            //give element values
            additemPopup.classList.add('box')
            itemPopupHeading.innerText = "add task"
            buttonSpace.classList.add('buttons')
            itemName.classList.add('input')
            itemName.classList.add('center')
            addButton.classList.add('add_button')
            closeButton.classList.add('close_button')
            addButton.innerText = "add"
            closeButton.innerText = "close"
            
            closeButton.addEventListener('click', function(){
                additemPopup.classList.add('hide')
                parent.classList.remove('blur')
            })

            addButton.addEventListener('click', ()=>{
                additemPopup.classList.add('hide')
                parent.classList.remove('blur')
        
                //creating ite elements
                let item = document.createElement('div')
                let itemText = document.createElement('span')
                let markDone = document.createElement('button')
        
                //append child
                item.appendChild(itemText)
                item.appendChild(markDone)
        
                // values
                itemText.innerText = itemName.value
                markDone.innerText = "Mark Done"
                item.style.backgroundColor="white"
                itemText.classList.add('span1')
                markDone.classList.add('markdonebutton')
    
                //appending the item to item list
                itemList.appendChild(item)
                additemPopup.innerText =""
        
                markDone.addEventListener('click', function(){
                    itemText.classList.add('markDone')
                    markDone.classList.add('hide')
                })
                
                if(singlecard){
                    let copylist= copyCard.querySelector("div")
                    let itemclone = item.cloneNode(true);
                    copylist.appendChild(itemclone);

                    let markdoneClone = itemclone.querySelector('button');
                    let itemtextClone = itemclone.querySelector('span');
                    

                    markdoneClone.addEventListener('click', function(){
                        itemtextClone.classList.add('markDone')
                        itemText.classList.add('markDone')
                        markDone.classList.add('hide')
                        markdoneClone.classList.add('hide')
                    })
                    

                }
                
            })           
        })

        parent.firstElementChild.classList.remove("hide")
        topHead.classList.add('hide')
    })
    
}

function back(){
    cardNameHead.classList.add('hide')
    topHead.classList.remove('hide')
    parent.firstElementChild.classList.add("hide")
    singlecard.classList.add('hide')
    cardcontainer.classList.remove('hide')
    singlecard.innerText = ''
}
