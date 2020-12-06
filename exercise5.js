// Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front. 
(() => {
    let myText = document.getElementById("target").innerHTML;

    setInterval(function () {
        myText = myText[myText.length - 1] + myText.substring(0, myText.length - 1);
        document.getElementById("target").innerHTML = myText;
    }, 33);

    // const element = document.getElementById("target2");
    // const textNode = element.childNodes[0]; // assuming no other children
    // let text = textNode.data;

    // setInterval(() => {
    //     text = text[text.length - 1] + text.substring(0, text.length - 1);
    //     debugger;
    //     textNode.data = text;
    // }, 100);

})()