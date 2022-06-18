/* Welcome to rEngine.js!
Here, you can create your own clicker game,
Just
Like
Me!
P.S. thank you for downloading my stuff.
It means a lot to me! You can keep up with updates
If you look at the github repo!
*/
const rEngine_version = "1"
// pre-setup (global variables)
let money = 0;
let moneyPerSecond = 0;
let moneyPerClick = 1;
function setup() {
    const leftPanel = document.createElement('div');
    leftPanel.id = "leftpanel"
    leftPanel.style.position = "absolute"
    leftPanel.style.top = "0px"
    leftPanel.style.left = "0px"
    leftPanel.style.width = "49.5%"
    leftPanel.style.height = "99%"
    leftPanel.style.border = "black solid 1px"
    const rightPanel = document.createElement('div');
    rightPanel.id = "rightpanel"
    rightPanel.style.position = "absolute"
    rightPanel.style.top = "0px"
    rightPanel.style.left = "49.5%"
    rightPanel.style.width = "49.5%"
    rightPanel.style.height = "99%"
    rightPanel.style.border = "black solid 1px"
    const moneyDisplay = document.createElement('a')
    moneyDisplay.style.fontSize = "20px"
    moneyDisplay.style.position = "absolute"
    moneyDisplay.style.top = "5%"
    moneyDisplay.style.left = "50%"
    moneyDisplay.style.transform = "translate(-50%,0%)"
    const mpsDisplay = document.createElement('a')
    mpsDisplay.style.fontSize = "20px"
    mpsDisplay.style.position = "absolute"
    mpsDisplay.style.top = "10%"
    mpsDisplay.style.left = "50%"
    mpsDisplay.style.transform = "translate(-50%,0%)"
    const mpcDisplay = document.createElement('a');
    mpcDisplay.style.fontSize = "20px"
    mpcDisplay.style.position = "absolute"
    mpcDisplay.style.top = "15%"
    mpcDisplay.style.left = "50%"
    mpcDisplay.style.transform = "translate(-50%,0%)"
    const clicker = document.createElement('button')
    clicker.innerHTML = "Click Me!"
    clicker.addEventListener('mousedown', ()=>{
        money=money+moneyPerClick
    })
    clicker.style.width = "200px"
    clicker.style.height = "200px"
    clicker.style.position = "absolute"
    clicker.style.top = "50%"
    clicker.style.left = "50%"
    clicker.style.transform = "translate(-50%, -50%)"
    setInterval(() => {
        moneyDisplay.innerHTML = "Money: " + money
        mpsDisplay.innerHTML = "Money Per Second: " + moneyPerSecond
        mpcDisplay.innerHTML = "Money Per Click: " + moneyPerClick
    }, 0);
    setInterval(()=>{
        money = money + moneyPerSecond
    }, 1000)
    leftPanel.appendChild(moneyDisplay)
    leftPanel.appendChild(mpsDisplay)
    leftPanel.appendChild(mpcDisplay)
    leftPanel.appendChild(clicker)
    document.body.appendChild(leftPanel)
    document.body.appendChild(rightPanel)
}
setup()
let test1 = {
    name: "Test shop item",
    cost: 10,
    addMoneyPerSecond: 1,
}
function createShopItem(obj) {
    const itemDiv = document.createElement('div')
    itemDiv.innerHTML = "<a><b>" + obj['name'] +  "</b></a><br><a>Cost: " + obj['cost'] + "</a><br>"
    const purchase = document.createElement('button')
    purchase.innerHTML = "Buy"
    purchase.addEventListener('click', ()=>{
        if(money<obj['cost']) {
            return
        }
        moneyPerSecond = moneyPerSecond + obj['addMoneyPerSecond']
        money = money - obj['cost']
    })
    itemDiv.appendChild(purchase)
    document.querySelector('#rightpanel').appendChild(itemDiv)
}
createShopItem(test1)