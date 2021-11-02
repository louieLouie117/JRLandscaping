//Hide or show servers p ----------------------------------------->
let showService1;

function show_S1() {
  document.getElementById("hideS1").style.display = "grid";
  document.getElementById("hideS2").style.display = "none";
  document.getElementById("hideS3").style.display = "none";
}

console.log(showService1);

let showService2;

function show_S2() {
  document.getElementById("hideS1").style.display = "none";
  document.getElementById("hideS2").style.display = "grid";
  document.getElementById("hideS3").style.display = "none";
}

console.log(showService2);

let showService3;

function show_S3() {
  document.getElementById("hideS1").style.display = "none";
  document.getElementById("hideS2").style.display = "none";
  document.getElementById("hideS3").style.display = "grid";
}

console.log(showService3);

// Open and close gallery images------------------------------>

let showWorkGallery;

function show_WG() {
  document.getElementById("updateWG").style.display = "grid";
}
function hide_WG() {
  document.getElementById("updateWG").style.display = "none";
}

console.log(showWorkGallery);

//open and close menue with if statements

let updateMenu = "open";

function open_Menu() {
  if (updateMenu == "open") {
    document.getElementById("openCloseM").style.display = "grid";
    document.getElementById("hideIconM").style.display = "none";
    document.getElementById("hideIconC").style.display = "none";
    document.getElementById("hideIconDM").style.display = "none";
    document.getElementById("hideIconP").style.display = "none";
    return (updateMenu = "close");
  } else {
    document.getElementById("openCloseM").style.display = "none";
    document.getElementById("hideIconM").style.display = "block";
    document.getElementById("hideIconC").style.display = "block";
    document.getElementById("hideIconDM").style.display = "block";
    document.getElementById("hideIconP").style.display = "block";
    return (updateMenu = "open");
  }
}

console.log(updateMenu);

function close_Menu() {
  document.getElementById("openCloseM").style.display = "none";
}

console.log(updateMenu);

let updateForm;

function open_Form() {
  document.getElementById("openCloseF").style.display = "block";
}

function close_Form() {
  document.getElementById("openCloseF").style.display = "none";
}

console.log(updateForm);
