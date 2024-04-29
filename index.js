const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
/* 
  IMPORTANT:
    ***NEVER*** store credentials unencrypted like this.
    This is for demo purposes only in order to simulate a functioning API serverr.
*/
const users = {
  "lav@firstaid.com": {
    firstName: "lav",
    lastName: "p",
    email: "lav@firstaid.com",
    password: "very-secret",
  },
  "ket@firstaid.com": {
    firstName: "ket",
    lastName: "P",
    email: "ket@firstaid.com.com",
    password: "super-secret",
  },
};
let cart = [];

// use this to add a 1 second delay to all requests
// app.use(function (req, res, next) {
//   setTimeout(next, 1000);
// });

app.get("/api/healthDetails", (req, res) => {
  let healthDetailss=[{
        id:905,
        name:"Blacktown Hospital",
        description:"Cancer Screening",
        category:"Healthy living",
        cost:35.0,
        imagename:"cancer.png",
        discount:0.2,
      },
      {
        id:905,
        name:"Braidwood Multi Purpose Service",
        description:"Eye Test",
        category:"Healthy living",
        cost:25.0,
        imagename:"eye.png",
        discount:0.2,
      },
      {
        id:905,
        name:"Campbell Town Hospital",
        description:"Cancer Screening",
        category:"Healthy living",
        cost:35.0,
        imagename:"cancer.png",
        discount:0.2,
      },
      {
        id:905,
        name:"Liver Pool Hospital",
        description:"Body Check Up",
        category:"Healthy living",
        cost:45.0,
        imagename:"healthcheck.png",
        discount:0,
      },
      {
        id:905,
        name:"Orange Health Service",
        description:"Cancer Screening",
        category:"Healthy living",
        cost:35.0,
        imagename:"cancer.png",
        discount:0.2,
      },
      {
        id:905,
        name:"Springwood Private Hospital",
        description:"Hearing Health Test",
        category:"Healthy living",
        cost:25.0,
        imagename:"ear.png",
        discount:0,
      },
      {
        id:905,
        name:"Wentworth Center Hospital",
        description:"ECG screen Test",
        category:"Healthy living",
        cost:30.0,
        imagename:"ecg.png",
        discount:0,
      },
      {
        id:905,
        name:"Epping Center Private Hospital",
        description:"Hearing Health Test",
        category:"Healthy living",
        cost:25.0,
        imagename:"ear.png",
        discount:0,
      },
      {
        id:905,
        name:"Mosman Broad Hospital",
        description:"Body Check Up",
        category:"Healthy living",
        cost:45.0,
        imagename:"healthcheck.png",
        discount:0,
      },
    ];
  res.send(healthDetailss);
});

app.post("/api/cart", (req, res) => {
  cart = req.body;
  setTimeout(() => res.status(201).send(), 20);
});

app.get("/api/cart", (req, res) => res.send(cart));

app.post("/api/register", (req, res) =>
  setTimeout(() => {
    const user = req.body;
    if (user.firstName && user.lastName && user.email && user.password) {
      users[user.email] = user;
      res.status(201).send({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      });
    } else {
      res.status(500).send("Invalid user info");
    }
  }, 800)
);

/* IMPORTANT:
    The code below is for demo purposes only and does not represent good security
    practices. In a production application user credentials would be cryptographically 
    stored in a database server and the password should NEVER be stored as plain text. 
*/
app.post("/api/sign-in", (req, res) => {
  const user = users[req.body.email];
  if (user && user.password === req.body.password) {
    res.status(200).send({
      userId: user.userId,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  } else {
    res.status(401).send("Invalid user credentials.");
  }
});

app.listen(8081, () => console.log("API Server listening on port 8081!"));

