function flip() {
    return Math.random() >= 0.5;
}

function randomNumber(n) {
    if (!n) 
    {
        alert(`Provide a number`)
        return
    }

    var base10 = parseInt(n, 10)
    var randomNumber = 0;

    if (base10 < 1 || base10 > 999999)
    {
        alert(`Value must be between 1 and 999999, invalid number: [${base10}]`)
        return;
    }

    do {
        var randomNumberBinaryArray = []
        for (let i = 0; i < base10.toString(2).length; i++)
            randomNumberBinaryArray.push(+flip())
        randomNumber = parseInt(randomNumberBinaryArray.join(''), 2)
    }
    while (randomNumber > base10);

    console.log(randomNumber)

    let ul = document.getElementById("randomNumberList");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(randomNumber))
    ul.insertBefore(li, ul.childNodes[0]);

    document.getElementById("counter").innerHTML= ul.getElementsByTagName("li").length

}