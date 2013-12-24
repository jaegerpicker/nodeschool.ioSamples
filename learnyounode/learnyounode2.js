
var tots = 0;
for(var a = 0;  a < process.argv.length; a++) {
    //console.log(a);
    if(a >= 2) {
        tots += Number(process.argv[a]);
    }
}
console.log(tots);

