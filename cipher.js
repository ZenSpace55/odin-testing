const lowChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const uppChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function cipherString(myString, key){
    //const lowChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    //const uppChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    if (key < 0){key *= -1;}
    var modKey = key % 26;
    var cipher = myString.split("");
    var newString = [];
    cipher.forEach(e => {
        //console.log(e);
        if (lowChar.includes(e)){
            var myKey = lowChar.indexOf(e) + modKey;
            if (myKey >= 26){
                myKey -= 26;
            }
            e = lowChar[myKey];
        }
        else if (uppChar.includes(e)){
            var myKey = uppChar.indexOf(e) + modKey;
            if (myKey >= 26){
                myKey -= 26;
            }
            e = uppChar[myKey];
        }
        newString.push(e);
        //console.log(e);
    });
    return newString.join("");//cipher.join("");
}

module.exports = cipherString