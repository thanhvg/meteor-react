module.exports = function(report) {

    let problem = {
        systemId: "",
        mac: "",
        customer: "",
        email: "",
        date: "",
        uptime: "",
        product: "",
        version: "",
        ticket: "",
        details: {
            category: "",
            whatWereDoing: "",
            platform: "",
            description: "",
            browser:"",
            tarball: "",
        }
    }
    problem.customer = /CUSTOMER="(.*)"/.exec(report)[1];
    problem.email = /\nEMAIL="(.*)"/.exec(report)[1] || '';
    problem.date = /\nDATE="(.*)"/.exec(report)[1] || '';
    problem.uptime = /\nUPTIME="(.*)"*/.exec(report)[1] || '';
    problem.product = /\nPRODUCT="(.*)"/.exec(report)[1];
    problem.version = /\nVERSION="(.*)"/.exec(report)[1];
    problem.ticket = /\nTICKET="(.*)"/.exec(report)[1];
    problem.details.category = /\nCategory: (.*)/.exec(report)[1];
    problem.details.whatWereDoing = /\nWhat Were They Doing:([\s\S]*)\nPlatform:/.exec(report)[1];
    problem.details.platform = /\nPlatform: (.*)/.exec(report)[1];
    problem.details.description = /\nDescription:\n([\s\S]*)\nBrowser Details/.exec(report)[1];
    problem.details.browser = /Browser Details: (.*)/.exec(report)[1];
    console.log(problem);
    return problem;
}

// module.exports = {
//   reportParser : myFunc
//
// }
