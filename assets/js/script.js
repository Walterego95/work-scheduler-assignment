// waiting for dom ready...
$(document).ready(function() {
    let present_moment = moment();

    // setting current date on header...
    $("#currentDay").text(present_moment.format("LLLL"));

    for(i = 8; i < 19; i++) { 
        $(".container").append(generateTimeBlock(i, present_moment.hours()));
    }
});

function generateTimeBlock(index, hour) {
    let block_class = "";

    // transform this into switch case...
    if(i < hour) {
        block_class = "past";
    } else {
        if(i > hour) {
            block_class = "future";
        } else {
            block_class = "present";
        }
    }

    let time_block = "<div class='time-block row " + block_class + "'>";
    time_block += "<span class='hour'>" + index + ":00</span>";
    time_block += "<input class='time_block_text' type='text' id='text_" + index + "' name='text_" + i + "'>";
    time_block += "<button class='saveBtn'>Save</button>";
    time_block += "</div>";
    return time_block;
}