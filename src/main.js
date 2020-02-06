/*
 * Tristan Hilbert
 * 2/6/2020
 * This is the entry point for the game launching capability.
 * 
 */

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



function main(){
    if(!assert_dependency()){
        alert("Some JavaScript Functions Are Missing!");
    }else{
        console.log("Start Game!");
    }
}

main();