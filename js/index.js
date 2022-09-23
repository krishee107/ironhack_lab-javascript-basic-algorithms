// Iteration 1: Names and Input
console.log("I'm ready!");
let hacker1 = "Cristina";
let hacker2 = "Cristinb";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

const conditionals = (n1, n2) =>{
    if(n1 > n2)
        console.log(`The driver has the longest name, it has ${n1.length} characters.`);
    else if(n1 < n2)
        console.log(`It seems that the navigator has the longest name, it has ${n2.length} characters!`);
    else
        console.log(`Wow, you both have equally long names, ${n1.length} characters!`);
}

conditionals(hacker1, hacker2);
console.log("__________________________");

// Iteration 3: Loops
const loops = () =>{
    let newHacker = hacker1.toUpperCase().split("");
    let newArr = [];
    for (let i = 0; i < newHacker.length; i++) {
        newArr.push(newHacker[i]);
        newArr.push(" ");
    }
    let res = newArr.join("");
    console.log(res);

    let newHacker2 = hacker2.split("").reverse().join("");
    console.log(newHacker2)
}

loops();
console.log("__________________________");

const ordenAlfabetico = () =>{
    hacker1 = hacker1.toLowerCase();
    hacker2 = hacker2.toLowerCase();
    //Si el primero va primero
    if(posAlfabeto(hacker1.charAt(0)) < posAlfabeto(hacker2.charAt(0))) console.log(`The driver's name goes first.`);
    //Si el segundo va primero
    else if(posAlfabeto(hacker1.charAt(0)) > posAlfabeto(hacker2.charAt(0))) console.log(`Yo, the navigator goes first definitely.`);
    //Si empiezan igual
    else if(posAlfabeto(hacker1.charAt(0)) == posAlfabeto(hacker2.charAt(0))){
        let newHacker1 = hacker1.split("");
        let newHacker2 = hacker2.split("");
        for (let i = 0; i < newHacker1.length; i++) {
            if(posAlfabeto(newHacker1[i]) != posAlfabeto(newHacker2[i]) )
                if(posAlfabeto(newHacker1[i]) < posAlfabeto(newHacker2[i])) console.log(`The driver's name goes first.`);
                else console.log(`Yo, the navigator goes first definitely.`);
        }
    }
    else    
        console.log("Error")
}

const posAlfabeto = (letter) => {
    let abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
    let pos=null;

    for(let i = 0; i<=abc.length; i++)
        if(abc[i] == letter){
            pos = i+1;
            break;
        }
        
    if(pos != null)
        return pos;
    else
        console.log("Error");
}


ordenAlfabetico();
console.log("__________________________");

/* Bonus 1 */
let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu enim tortor. Nulla et lorem urna. Duis vel metus pellentesque, pretium est nec, convallis eros. Sed tristique eu sem et auctor. Sed euismod enim elementum orci convallis, in aliquet nisl volutpat. Nulla ut lectus non leo venenatis interdum. Nam id felis turpis. Suspendisse rhoncus est ex, sed ornare velit posuere et. Cras quis eros ac nisl posuere laoreet non eu tellus. Fusce sodales orci ac velit lacinia vehicula. Sed finibus tincidunt justo in mattis.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque rutrum lacinia maximus. Sed vehicula ac est et varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis vestibulum ut nunc non dignissim. Duis at nibh sit amet urna feugiat tincidunt non nec est. Cras id libero mi. Morbi vel nibh lacus. Vestibulum vitae lorem sed justo ornare accumsan. Praesent pulvinar nisl vel felis posuere, sit amet viverra libero vehicula. Vestibulum et mi imperdiet, suscipit nisl eget, posuere risus.

Fusce non erat vel massa consectetur vehicula eget eu velit. Donec a diam nec nibh cursus tristique. Suspendisse potenti. Suspendisse potenti. Proin ac porttitor eros, a tempus erat. Pellentesque scelerisque lobortis vestibulum. Vestibulum aliquam efficitur ligula nec ornare. Nam vulputate, lorem vitae sagittis malesuada, felis nisi pharetra dolor, ut accumsan nisl diam ac leo. Curabitur consequat maximus mauris vitae ultricies. Morbi luctus vestibulum hendrerit. Praesent vulputate tellus ut velit vehicula finibus. Maecenas blandit magna eget convallis porttitor. In bibendum massa in nisi mattis lobortis placerat vitae ligula.`;

const countWords = () =>  lorem.split(' ').length;
console.log(countWords());
console.log("__________________________");

/*Bonus 2*/
let phraseToCheck = "olo";
const isPalindromo = (str) => {
    let newStr1 = str.split("").reverse().join("");
    let newStr2 = str.split("").join("");

    for (let i = 0; i < newStr1.length; i++) {
        if(newStr1[i] != newStr2[i]){
            console.log("No son palindromos");
            return false;
        }
    }
    
    return true;
}   
console.log(isPalindromo(phraseToCheck));