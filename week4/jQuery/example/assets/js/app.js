// Selectors

// $("h1").html("New text");
// // document.getElementsByTagName("h1")[0].innerHTML = "Hello world!";
// $("h1").addClass("heading");
// $("h1").css("color", "red");
// $("h1").css("background-color", "black");
// $("h1").css("padding", "20px");
// $("h1").css("border", "2px solid blue");
// $("h1").css("border-radius", "20px");

// $("h1").append("<span> - hello</span>");
// $("h1").prepend("<span>hello - </span>");

// Events

// $("h1").click(() => {
//   console.log("clicked!");
//   console.log(this);
//   $("h1").css("color", "blue");
// });

// $("h1").trigger("click");

// $(document).ready(function () {
//   alert("Page loaded");
// });

// // $("h1").hover(() => {
// //   console.log("Hovered!");
// // });

// Animations

// $("button").click(() => {
//   $("p").hide("slow");
// });

// $("button").click(() => {
//   $("p").show("slow");
// });

// $("button").click(() => {
//   // hide and show
//   $("p").toggle("fast");
// });

$("button").click(() => {
  $("p").fadeToggle("slow");

  // $("h1").animate(
  //   {
  //     fontSize: "72px",
  //     //   background: "yellow",
  //   },
  //   "slow"
  // );
});

// $.getJSON("./assets/data/data.json", function (data) {
//   $("h1").html(data.author);
// });

// $.get("https://jsonplaceholder.typicode.com/users", (data) => {
//   console.log(data);
// });

$("#heading1").html("Hello Devs!");
// $("p:not('span')").css("color", "red");
$(".container > button").css("border", "none");
$(".container > button").css("padding", "10px 20px");

$("input").change("keydown", (ev) => {
  $("p:first").html(ev.target.value);
});
