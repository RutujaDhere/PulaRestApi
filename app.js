const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// const jsonfile = require('jsonfile');


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));



mongoose.connect("mongodb://localhost:27017/pulaRESTDB", { useNewUrlParser: true, useUnifiedTopology: true });

const pulaQuoteSchema = {
    id: Number,
    quote: String
}

const PulaQuote = mongoose.model("PulaQuote", pulaQuoteSchema);



const array = ["शेवटी काय हो, आपण पत्त्याच्या नावाचे धनी, मजकुराचा मालक निराळाच.",
    "प्रयास हा प्रतिभेचा प्राणवायू आहे.",
    "परिस्थिति हा अश्रूंचा कारखाना आहे!..",
    "क्रियापदाच मोठेपण त्याच्या कर्त्याने केलेलं कर्म किती मोठ आहे ह्याच्यावर अवलंबून असते.."]

app.get("/", function (req, res) {
    const randomNumber = Math.floor(Math.random() * 36);
    console.log(randomNumber);
    
    PulaQuote.findOne({id: randomNumber}, function(err, foundArticle) {
        if(!err) {
            
            if (foundArticle) {
            var quote = foundArticle.quote;
            res.render("list", {
                pulaquote: quote
            })
            console.log((quote));
            }
            console.log(foundArticle);
        }
        else {
            console.log(err);
        }
    })

    // res.sendFile(__dirname + "/index.html");
    // res.se
    // res.send(array[randomNumber]);
})


app.listen(3000, function () {
    console.log("Server running at port 3000");
})