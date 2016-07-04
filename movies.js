var $ = require("jquery");
global.jQuery = $;
var dt = require( 'datatables' )( window, $ );

$("#movies").DataTable({
  "ajax" : "movies.json",
  "iDisplayLength": 5,
  "aLengthMenu": [[5, 10, 25, -1], [5, 10, 25, "All"]],
  "order": [[ 1, "desc" ]]
});

var tooltip = require('tooltipster');

$("#favmovie").tooltipster({
    content: $("#favmovieContent").detach()
});