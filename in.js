
let cartArray = [];
// selected part
function addToPlayer(element) {
    if (cartArray.length === 5) {
        alert('You are already added maximum number of players')
        return cartArray;
    }
     const playerName = (element.parentElement.parentElement.children[1].innerText);
    //console.log(playerName);
    const objPlayer = {
        playerName: playerName
    }
    cartArray.push(objPlayer);
    
    // Disable the button after selection
    element.innerText = "Selected";
    element.disabled = true;

    // document.getElementById("total-select").innerText = cartArray.length;
    display(cartArray);
}

function display(cartProduct) {
    //selected players count
    const totalPlayer = document.getElementById("total-select");
    totalPlayer.innerText = cartArray.length

    //show the players in the card
    const cartContainer = document.getElementById("players-cart");
    cartContainer.innerText = '';

    for (let i = 0; i < cartProduct.length; i++) {
        const name = cartArray[i].playerName;

        const li = document.createElement("li");
        li.innerHTML = `
            <p class='flex justify-start font-bold text-xl text-white'>${i + 1} . ${name}</p>                           
        `;
        cartContainer.appendChild(li);
    }
}

document.getElementById('btn-calculate').addEventListener('click',function(){
    const perPlayer = document.getElementById('per-player-field').value;
    const convertedPerPlayer = parseInt(perPlayer);
      const playerExpense = document.getElementById('player-expenses');
      const playerCost = cartArray.length   * convertedPerPlayer;
      playerExpense.innerText = playerCost;

    document.getElementById('btn-calculate-total').addEventListener('click',function(){
      const managerField = document.getElementById('manager-field').value;
      const convertedManagerField = parseInt(managerField);
      const coachField = document.getElementById('coach-field').value;
      const convertedCoachField = parseInt(coachField);
  
      const playerExpenseTotal = document.getElementById('total')
      //const playerExpenseTotalInner = playerExpenseTotal.innerText;
      const playerCostTotal = playerCost + convertedManagerField + convertedCoachField;
      playerExpenseTotal.innerText = playerCostTotal;
    })
  
  })



// // function getInputValueById(inputId) {
// //     const inputField = document.getElementById(inputId)
// //     const inputAmount = inputField.value
// //     return inputAmount
// // }
// // // budget part
// // function getElementValueById(element) {
// //     const elementField = document.getElementById(element)
// //     const elementAmount = elementField.innerText
// //     return elementAmount
// // }
// // function setTextElementById(elementId, newvalue) {
// //     const textValue = document.getElementById(elementId)
// //     textValue.innerText = newvalue
// // }

// // document.getElementById('btn-calculate').addEventListener('click', function () {
// //     const perPlayerInputAmount = getInputValueById('per-player-field')
// //     if (perPlayerInputAmount == 'number' || perPlayerInputAmount > 0) {
// //         const playerTotalExp = (cartArray.length * perPlayerInputAmount)
// //         const playerExpenseTotal = getElementValueById('player-expenses')
// //         setTextElementById('player-expenses', playerTotalExp)
// //     }

// // })

// // document.getElementById('btn-calculate-total').addEventListener('click', function () {

// //     const manegerInputAmount = getInputValueById('manager-field')
// //     const coachInputAmount = getInputValueById('coach-field')
// //     if ((manegerInputAmount > 0 && coachInputAmount > 0) || (manegerInputAmount == 'number' && coachInputAmount == 'number')) {
// //         const playerExpenseTotal = getElementValueById('player-expenses')
// //         const totalAmount = getElementValueById('total')
// //         const total =  Number(playerExpenseTotal) + Number(manegerInputAmount) + Number(coachInputAmount)
// //         setTextElementById('total', total)
        
// //     }
// // })
