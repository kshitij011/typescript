"use strict";
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "asile";
    SeatChoice["MIDDLE"] = "middle";
    SeatChoice["WINDOW"] = "window";
    SeatChoice[SeatChoice["FOURTH"] = 0] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
// values of middle and wondow automatically increment to 2 and 3.
// enum SeatChoice {
//     AISLE = 1,
//     MIDDLE,
//     WINDOW,
//     FOURTH = 0,
// }
const hcSeat = SeatChoice.AISLE;
