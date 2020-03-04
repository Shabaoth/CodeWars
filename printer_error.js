function printerError(s) {
    // your code
    var regex = new RegExp(/^[n-z]*$/);
    var errors = s.filter(
        function(s){
            return regex.test(s);
        }
        )
    

    console.log(`error_printer(s) => ${errors}/${s.length}`);
}

var s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";

printerError(s);