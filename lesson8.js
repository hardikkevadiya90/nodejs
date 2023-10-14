var http = require("http");
var server = http.createServer(function (request, response) {
    var url = request.url;
    console.log(url);
    response.writeHead(200, { 'content-type': 'application/json' });
    // var data = null;
    if (url == "/india") {
        var data = JSON.stringify({
            TeamName: 'India',
            TeamIndiaplayers: ['Rohit sharma(C)', 'virat kohli', 'Shubman Gill', 'Hardik Pandya (vc)', 'Shreyas Iyer', 'KL Rahul', 'Ravindra Jadeja', 'Jasprit Bumrah', 'Mohammed Siraj', 'Ishan Kishan']
        })
        response.write(data);
    }
    else if (url == "/pakistan") {
        var data = JSON.stringify({
            TeamName: 'pakistan',
            TeamIndiaplayers: ['Babar Azam (c)', 'Shadab Khan', 'Fakhar Zaman', ' Imam-ul-Haq', 'Abdullah Shafique', 'Mohammad Rizwan', 'Saud Shakeel', ' Iftikhar Ahmed', 'Salman Ali Agha', 'Mohammad Nawaz', 'Shaheen Afridi']
        })
        response.write(data);
    }
    else if (url == "/australia") {
        var data = JSON.stringify({
            TeamName: 'Australia',
            TeamIndiaplayers: ['Pat Cummins', 'Steve Smith', 'Alex Carey', 'Josh Inglis', 'Marnus Labuschagne', 'Cameron Green', 'Josh Hazlewood', 'Mitch Marsh', ' Glenn Maxwell', 'Marcus Stoinis', ' David Warner']
        })
        response.write(data);
    }
    else if (url == "/newzealand") {
        var data = JSON.stringify({
            TeamName: 'Newzealand',
            TeamIndiaplayers: ['Kane Williamson (c)', 'Trent Boult', 'Mark Chapman', 'Devon Conway', 'Lockie Ferguson', 'Matt Henry', 'Tom Latham', 'Daryl Mitchell', 'Jimmy Neesham', 'Glenn Phillips', 'Rachin Ravindra', 'Mitch Santner', 'Ish Sodhi', 'Tim Southee', 'Will Young']
        })
        response.write(data);
    }
    else if (url == "/srilanka") {
        var data = JSON.stringify({
            TeamName: 'Srilanka',
            TeamIndiaplayers: ['Dasun Shanaka (c)', 'Kusal Mendis (vc)', 'Kusal Perera', 'Pathum Nissanka', 'Dimuth Karunaratne', 'Sadeera Samarawickrama', 'Charith Asalanka', 'Dhananjaya de Silva', 'Dushan Hemantha', 'Maheesh Theekshana', 'Dunith Wellalage', 'Kasun Rajitha', 'Matheesha Pathirana', 'Lahiru Kumara', 'Dilshan Madushanka']
        })
        response.write(data);
    }
    else if (url == "/england") {
        var data = JSON.stringify({
            TeamName: 'England',
            TeamIndiaplayers: ['Jos Buttler (captain)', 'Moeen Ali', 'Gus Atkinson', 'Jonny Bairstow', 'Sam Curran', 'Liam Livingstone', 'Dawid Malan', 'Adil Rashid', 'Joe Root', 'Jason Roy', 'Ben Stokes', 'Reece Topley', 'David Willey', 'Mark Wood', 'Chris Woakes']
        })
        response.write(data);
    }
    else if (url == "/afghanistan") {
        var data = JSON.stringify({
            TeamName: 'Afghanistan',
            TeamIndiaplayers: ['Hashmatullah Shahidi (c)', 'Rahmanullah Gurbaz', 'Ibrahim Zadran', 'Riaz Hassan', 'Rahmat Shah', 'Najibullah Zadran', 'Mohammad Nabi', 'Ikram Alikhil', 'Azmatullah Omarzai', 'Rashid Khan', 'Mujeeb ur Rahman', 'Noor Ahmad', 'Fazalhaq Farooqi', 'Abdul Rahman', 'Naveen-ul-Haq']
        })
        response.write(data);
    }
    else {
        var error = [{
            error: "no details found"
        }];
        data = JSON.stringify(error);
        response.write(data);
    }

    response.end();
});
var port = 5000;
server.listen(port);
console.log("ready to accept request");