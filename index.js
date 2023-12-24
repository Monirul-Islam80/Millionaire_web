var arr = [];
const lotteryData = [
  {
    name: "Haseen Amjad",
    ticketNumber: "MAB-35085",
    drawDate: "07/04/2023",
    prize: "AED 20,000",
  },
  {
    name: "Mohamed Ranesh",
    ticketNumber: "MAB-37487",
    drawDate: "07/04/2023",
    prize: "AED 20,000",
  },
  {
    name: "Mouhamad Ibrahim",
    ticketNumber: "MAB-35171",
    drawDate: "07/04/2023",
    prize: "AED 20,000",
  },
  {
    name: "Dhanji Yadav",
    ticketNumber: "MAB-25178",
    drawDate: "06/03/2023",
    prize: "AED 1,000,000",
  },
  {
    name: "Tareq Mohammad",
    ticketNumber: "MAB-26364",
    drawDate: "06/03/2023",
    prize: "AED 20,000",
  },
  {
    name: "Saheer",
    ticketNumber: "MAB-30378",
    drawDate: "06/04/2023",
    prize: "AED 20,000",
  },
  {
    name: "Gagandeep A Madi",
    ticketNumber: "MAB-15853",
    drawDate: "06/03/2023",
    prize: "AED 20,000",
  },
  {
    name: "Usman Ali Ahmad",
    ticketNumber: "MAB-35085",
    drawDate: "03/02/2023",
    prize: "AED 20,000",
  },
  {
    name: "Md Ismail Hossain",
    ticketNumber: "MAB-32058",
    drawDate: "03/02/2023",
    prize: "AED 20,000",
  },
  {
    name: "Nebu Lal Kumai",
    ticketNumber: "MAB-35967",
    drawDate: "03/02/2023",
    prize: "AED 20,000",
  },
  {
    name: "Lakavath Ravi",
    ticketNumber: "MAB-65294",
    drawDate: "03/01/2023",
    prize: "AED 10,000",
  },
];

$(document).ready(function () {
  generate();
  randomNum();

  $("#shuffle").click(function () {
    removeold();
    randomNum();
  });
  $("#clear").click(function () {
    removeold();
  });
  for (const i in lotteryData) {
    var x = lotteryData[i];
    var data = ` <tr>
    <td class="border px-4 py-2">${x.name}</td>
    <td class="border px-4 py-2">${x.ticketNumber}</td>
    <td class="border px-4 py-2">${x.drawDate}</td>
    <td class="border px-4 py-2">${x.prize}</td>
  </tr>`;
    $("#winner_list_data").append(data);
  }
  $("#menu_btn").hide();

  $("#close_btn").click(function () {
    $("#r_menu").toggle();
    $("#menu_btn").toggle();
  });
  $("#menu_btn").click(function () {
    $("#r_menu").toggle();
    $("#menu_btn").hide();
  });
});

function newSqr(num) {
  var sqr = `  <div class="p-2 w-[11%] m-1 border border-gray-400 rounded-md text-center" id="sqr${num}">${num}</div>`;
  $("#line_list").append(sqr);
}
function generate() {
  for (let i = 1; i <= 49; i++) {
    newSqr(i);
  }
}
function randomNum() {
  for (let i = 1; i <= 5; i++) {
    arr.push(Math.floor(Math.random() * 49) + 1);
    var x = "#sqr" + arr[i - 1];

    $(x).css({
      "background-color": "#D32053",
      color: "white",
    });
  }
}
function removeold() {
  for (let i = 1; i <= 5; i++) {
    var x = "#sqr" + arr[i - 1];
    $(x).css({ "background-color": "#fff", color: "black" });
  }
  arr = [];
}
