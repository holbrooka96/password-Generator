function generatePassword( passElChar) {
    let passEl = document.getElementById("pass"+passElChar+"-el");
    let randomPassword = "";

    let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
        "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let nums = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    let symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
    let numCheck = document.getElementById("numbers").checked;
    let symbolsCheck = document.getElementById("symbols").checked;
    let passLength = document.getElementById("length").value
    if (numCheck) {
        characters = characters.concat(nums);
        console.log("Numbers added!")

    }
    if (symbolsCheck) {
        characters = characters.concat(symbols);
        console.log("Symbols added!")
    }
    
    console.log(passLength)
    for (let i = 0; i < passLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        randomPassword += characters[randomIndex];
    }

    passEl.textContent = randomPassword;
}


function readoutPasswords() {
    generatePassword("A");
    generatePassword("B");
}


function copyonClick(element) {
    const textToCopy = element.textContent;
    navigator.clipboard.writeText(textToCopy);
    console.log('Text copied to clipboard!');
    element.textContent = "Copied!"
    element.style.pointerEvents = 'none';
    setTimeout(() => {
    element.style.pointerEvents = 'auto';
        element.textContent = textToCopy
    }, 1300);
}