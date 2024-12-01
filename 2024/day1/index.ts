const sessionToken = "";

const request = await fetch("https://adventofcode.com/2024/day/1/input", {
    headers: {
        cookie: `session=${sessionToken}`,
    },
    method: "GET",
});

const contents = await request.text();

const fileArray = contents.split("\n");

let lhColumn: number[] = new Array();
let rhColumn: number[] = new Array();

fileArray.map((row) => {
    lhColumn.push(Number(row.substring(0, 5)));
    rhColumn.push(Number(row.substring(8, 13)));
});

lhColumn.sort(function (a: number, b: number) {
    return a - b;
});

rhColumn.sort(function (a: number, b: number) {
    return a - b;
});

let totalDistance: number = 0;

for(let i: number = 0; i < lhColumn.length; i++) {
  totalDistance = totalDistance + Math.abs(lhColumn[i] - rhColumn[i]);
}

console.log(`Part 1: Total Distance: ${totalDistance}`);

const listTotal = lhColumn.map(lhnum => {
  let totalNum = rhColumn.filter(rhnum => rhnum == lhnum).length;
  return lhnum * totalNum
}).reduce((acc, num) => acc + num, 0);

console.log(`Part 2: listTotal: ${listTotal}`);
