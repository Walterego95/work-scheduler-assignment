// waiting for dom ready...
$(document).ready(function () {
    let present_moment = moment();

    // setting current date on header...
    $("#currentDay").text(present_moment.format("LLLL"));

    for (i = 8; i < 24; i++) {
        $(".container").append(generateTimeBlock(i, present_moment.hours()));
        $("#text_" + i).val(localStorage.getItem(i));
    }
});
// generate time block for past, present and future time blocks...
function generateTimeBlock(index, hour) {
    let block_class = "";

    if (i < hour) {
        block_class = "past";
    } else {
        if (i > hour) {
            block_class = "future";
        } else {
            block_class = "present";
        }
    }

    let time_block = "<div class='time-block row " + block_class + "'>";
    time_block += "<span class='hour'>" + index + ":00</span>";
    // disable ability to write events in the past and the present...
    time_block += "<input class='time_block_text' type='text' id='text_" + index + "' name='text_" + i + "'";
    if (block_class == "past" || block_class == "present") {
        time_block += " disabled ";
    }
    time_block += ">";
    // disable ability to save events with the button click, in the past and the present...
    time_block += "<button class='saveBtn' onClick='saveItem(" + index + ")'";
    if (block_class == "past" || block_class == "present") {
        time_block += " disabled ";
    }
    time_block += ">Save</button>";
    time_block += "</div>";
    
    return time_block;
}
// save events to local storage... 
function saveItem(index) {
    let value = $("#text_" + index).val();
    localStorage.setItem(index, value);
}