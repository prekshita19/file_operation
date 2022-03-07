const { data } = require("./data");
const fs = require("fs");
const crypto = require("crypto");

const password = (value) =>
  crypto.createHmac("sha256", `a secret`).update(value).digest("hex");

const value = data({
  password: password("Newyork"),
  userid: 110,
  name: "prasanth",
  username: "Developer",
  year: 2021,
  qualification: "M.Tech",
});

fs.writeFileSync(
  `message.txt`,
  `ProGrad Details
${Object.keys(value)
  .map((ele) => `${ele} -> ${value[ele]}`)
  .join("\n")}`
);
