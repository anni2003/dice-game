function change() {
       n1 = prompt("ENTER YOUR NAME");
       a = Math.random(); 
       b = Math.round(a * 100 + 1);
       document.getElementsByTagName(
         "p"
       )
       console.log(document.getElementById("dice1").getAttribute("src"));
    n1 = 3;
    document.getElementById("dice1").setAttribute("src", `images/dice${n1}.png`);
  }