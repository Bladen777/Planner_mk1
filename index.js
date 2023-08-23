
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

var day = new Date().toDateString();

//general page load
app.get("/", (req, res) =>{ 

    res.render("index.ejs",{date: day});
});


var work_items=[];
//work page load


//    app.get("/list/work", (req,res)=>{
//    res.render()
//        });

app.post("/lists/work", (req, res) =>{
    var work_item_info = req.body["work_item_input"];

    if (work_item_info !== undefined && work_item_info !== '' ){
    work_items.push(work_item_info);
    };

    res.render("work.ejs", {work_user_input: work_items, date:day});

    console.log(work_item_info);
    console.log(work_items);

    work_item_info='';

});


//list developement

var items=[];

app.post("/lists", (req, res)=>{
 
    var item_info = req.body["new_item_input"];

    if (item_info !== undefined && item_info !== '' ){
    items.push(item_info);
    };

    res.render("index.ejs", {user_input: items, date:day});
 
    console.log(item_info);
    console.log(items);
    
    item_info='';
});

app.listen(port, () =>{
        console.log(`Listening on port ${port}`);
    });