const moment = require("moment");

function dateToString() {
    return moment().toDate().toString();
}

module.exports = {
    dateToString,
};