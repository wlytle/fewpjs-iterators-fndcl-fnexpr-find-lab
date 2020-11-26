const testVar = {};

function testFunc() {
  return "hi";
}

function superbowlWin(record) {
  let win = record.find((i) => i.result === "W");
  return win ? win.year : win;
}
