const express = require("express");
const app = express();
app.use(express.json());

let flights = [
{
location : "Canada",
title : "flight to canada",
time : "1pm",
price : 26000,
date:"26:8:2022"
},
{
  location : "France",
  title : "flight to France",
  time : "12pm",
  price : 26000,
  date:"13:12:2022"
},
{
  location : "London",
  title : "flight to london",
  time : "2pm",
  price : 26000,
  date:"2:8:2022"
},
{
  location : "Nigeria",
  title : "flight to Nigeria",
  time : "12pm",
  price : 26000,
  date:"2:9:2022"
}
];

app.get('/flight/get/all',(req,res)=>{
  res.send(flights);
});

app.get('/flight/get/:location',(req,res)=>{
  const flight = flights.find( c => c.location === (req.params.location));
  if(!flight) res.status(404).send(" No flight found ");
  res.send(flight);
});

app.post('/flights',(req,res)=>{
  const flight = {
    location : req.body.location,
    title : req.body.title,
    price : req.body.price,
    date : req.body.date
  };
  flights.push(flight); 
  res.send(flight);
});

app.put('/flights',(req,res)=>{
  const flight = flights.find( c => c.location === (req.params.location));
  if(!flight) res.status(404).send(" No flight found ");
  flight.location = req.body.location;
  flight.title = req.body.title;
  flight.price = req.body.price;
  flight.date = req.body.date;
  res.send(flight);
});

app.delete("/flights/location",(req,res)=>{
  const flight = flights.find( c => c.location === (req.params.location));
  if(!flight) res.status(404).send(" No flight found ");
  const index = flights.indexOf(flight);
  flights.splice(index,1);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
