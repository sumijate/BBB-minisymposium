function myTextDecoder (text){
    const firstN = ["bbbminisymp2026", "deli", "walter", "maria", "fruzsina", "com", "hu", "gmail", "brc"];
    const addr = text.split(".");
    const addrNum = addr.map(Number);
    var retVal = ""
    for (let i = 0; i < addrNum.length; i++){
        if(i == 0){
            retVal = firstN[addrNum[i]];
        }else if (i == addrNum.length - 2){
            retVal += "@" + firstN[addrNum[i]];
        }else{
            retVal += "." + firstN[addrNum[i]];
        }
    }
    return retVal;
}

const matches = document.getElementsByClassName("text-conversion");

for (let i = 0; i < matches.length; i++) {
  let txt = matches[i].textContent;
  matches[i].textContent = myTextDecoder(txt);
}