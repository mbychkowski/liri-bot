// user input from console.
function commandInput() {
  var args = process.argv;
  var liriDo = args[2];

  var liriQuery = '';
  for (var i = 3; i < args.length; i++) {
    liriQuery += args[i] + ' ';
  }

  return [liriDo, liriQuery];
}
