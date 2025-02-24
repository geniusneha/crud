const express = require("express");
const mongoose = require("mongoose");
const Movie = require("./models/movieModel")

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/crud')
    .then(() => {
        console.log('connected to mongodb');
        storeMvie();
    })
    .catch((err) => {
        console.error('mongodb connection err', err);

    })
const storeMvie = async () => {
    const movies = [{
        name: "Harry Potter and the Order of the Phoenix",
        image: "https://bit.ly/2IcnSwz",
        summary: "Harry Potter and Dumbledore's warning about the return of Lord Voldemort is not heeded by the wizard authorities who, in turn, look to undermine Dumbledore's authority at Hogwarts and discredit Harry."
    }, {
        name: "The Lord of the Rings: The Fellowship of the Ring",
        image: "https://bit.ly/2tC1Lcg",
        summary: "A young hobbit, Frodo, who has found the One Ring that belongs to the Dark Lord Sauron, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed."
    }, {
        name: "Avengers: Endgame",
        image: "https://bit.ly/2Pzczlb",
        summary: "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America, and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe."
    }];

    try {
        await Movie.deleteMany();
        await Movie.insertMany(movies);
        console.log("Data stored successfully");
    } catch (err) {
        console.error("Error stored data", err);
    }
}
storeMvie()

const router = require("./router/index");
app.use('/user', router);

// server start
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});