/*
 * Tristan Hilbert
 * 2/6/2020
 * This is the entry point for the game launching capability.
 * 
 */


/* initial setup */
var canvas_window = document.getElementById("play-area");
const win_width = canvas_window.width;
const win_height = canvas_window.height;
var ctx = canvas_window.getContext("2d");

// Input Flag Enum
const input_flag_none = 0;
const input_flag_up = 1;
const input_flag_right = 2;
const input_flag_down = 4;
const input_flag_left = 8;
const input_flag_special = 16;
const input_flag_exit = 32;

// Constants For Colors
const color_black   = "#000000";
const color_white   = "#FFFFFF";
const color_silver  = "#c0c0c0";
const color_gray    = "#808080";
const color_maroon  = "#800000";
const color_red     = "#FF0000";
const color_purple  = "#800080";
const color_fuchsia = "#FF00FF";
const color_green   = "#008000";
const color_lime    = "#00FF00";
const color_olive   = "#808000";
const color_yellow  = "#FFFF00";
const color_navy    = "#000080";
const color_blue    = "#0000FF";
const color_teal    = "#008080";
const color_aqua    = "#00FFFF";

// Input Event Async Buffer
var input_buffer_down = input_flag_none;
document.addEventListener("keydown", (event) => {
    var key_code_temp = event.keyCode;
    var string_conv_temp = String.fromCharCode(key_code_temp);
    // Key Definitions A->B Encoding
    switch(string_conv_temp){
        case "W":
            input_buffer_down = input_buffer_down | input_flag_up;
            break;
        case "D":
            input_buffer_down = input_buffer_down | input_flag_right;
            break;
        case "S":
            input_buffer_down = input_buffer_down | input_flag_down;
            break;
        case "A":
            input_buffer_down = input_buffer_down | input_flag_left;
            break;
        default:
            console.log(key_code_temp);
            console.log(string_conv_temp);
            break;
    }

    switch(key_code_temp){
        case 27: /* Escape Key */
            input_buffer_down = input_buffer_down | input_flag_exit;
            break;
        default:
            break;
    }
});

document.addEventListener("keyup", (event) => {
    var key_code_temp = event.keyCode;
    var string_conv_temp = String.fromCharCode(key_code_temp);
    // Key Definitions A->B Encoding
    switch(string_conv_temp){
        case "W":
            input_buffer_down = input_buffer_down & ~input_flag_up;
            break;
        case "D":
            input_buffer_down = input_buffer_down & ~input_flag_right;
            break;
        case "S":
            input_buffer_down = input_buffer_down & ~input_flag_down;
            break;
        case "A":
            input_buffer_down = input_buffer_down & ~input_flag_left;
            break;
        default:
            break;
    }

    switch(key_code_temp){
        case 27: /* Escape Key */
            input_buffer_down = input_buffer_down & input_flag_exit;
            break;
        default:
            break;
    }
});


// Asset Pre-Loading
var player_sprite = document.createElement("image");
player_sprite.src = "assets/PurpleFighter.png";
// ^ player_sprite could also be a generated list of "frames"


/* function definitions */

/* This function is an example dependency for the below. */
/* This does not have to be above assert_dependency */
function example_dependency(){
    /* This Function Does Nothing */
}

/* 
 * Because we cannot guarantee every module got included
 * we can use a singular function call to check if necessary
 * functions are declared before starting.
 */
function assert_dependency(){
    try{
        /* Insert Dependencies in this list */
        var list = [
            example_dependency
        ]
    }catch (e){
        console.error(e);
        return false;
    }

    return true;
}


// Setup Function for Setting Up State Object

function setup(){
    // Setup Rectangle For Player
    var state = {
        player_rect: {
            x: win_width / 2,
            y: win_height / 2,
            size_x: 64,
            size_y: 64
        },
        input: 0,
        exit: false
    }

    return state;
}


// Functions for Running The Game

/* Systems -- Resolves */
function resolve_input(state){
    // Initializations
    state.input = input_buffer_down; // READ_ONLY NO LOCK
    // No Need to return state as the object will be passed by ref
}

function resolve_player(state){
    if(state.input & input_flag_none){
        return; // Reduce Workload
    }

    // Move Up
    if(state.input & input_flag_up){
        state.player_rect.y -= 2;
    }

    // Move Right
    if(state.input & input_flag_right){
        state.player_rect.x += 2;
    }

    // Move Down
    if(state.input & input_flag_down){
        state.player_rect.y += 2;
    }

    // Move Left
    if(state.input & input_flag_left){
        state.player_rect.x -= 2;
    }
}

function resolve_exit(state){
    if(state.input & input_flag_exit){
        state.exit = true;
    }
}




function render(state){
    ctx.fillStyle = color_black;
    ctx.fillRect(0,0,win_width,win_height);
    ctx.drawImage(player_sprite,
        state.player_rect.x, 
        state.player_rect.y);
}


function loop(state){
    // Tasks or Systems (resolves)
    resolve_input(state);
    resolve_player(state);
    resolve_exit(state);
    
    // Check Exit Condition
    if(state.exit){
        window.close();
    }

    // Render
    render(state);
    //console.log(state);
}


/* Entry Point Function */

function main(){
    if(!assert_dependency()){
        alert("Some JavaScript Functions Are Missing!");
    }else{
        var state = setup();
        setInterval(() => {loop(state)}, 1);
    }
}

main();