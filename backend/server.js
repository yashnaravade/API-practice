const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

app.get("/api/goals", (req, res) => {
    res.send("Get Goals!");
});

// .listen(port, () => {
//     console.log(`Server started on port ${port}`);
// }).on("error", (err) => {
//     console.log(err);
// }).on("close", () => {
//     console.log("Server closed");
// }).on("listening", () => {
//     console.log("Server listening");
// }).on("connection", () => {
//     console.log("Connection established");
// }).on("request", () => {
//     console.log("Request received");
// }).on("response", () => {
//     console.log("Response sent");
// }).on("disconnect", () => {
//     console.log("Connection disconnected");
// }).on("close", () => {
//     console.log("Connection closed");
// }).on("connect", () => {
//     console.log("Connection established");
// }).on("upgrade", () => {
//     console.log("Upgrade request received");
// }).on("end", () => {
//     console.log("Connection ended");
// }).on("readable", () => {
//     console.log("Connection readable");
// }).on("drain", () => {
//     console.log("Connection drained");
// }).on("pipe", () => {
//     console.log("Connection piped");
// }).on("unpipe", () => {
//     console.log("Connection unpiped");
// }).on("finish", () => {
//     console.log("Connection finished");
// })


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
    }
);

