$(document).bind("mobileinit", function() {
      $.mobile.page.prototype.options.addBackBtn = true;
 });

var serviceURL = "http://basecamp.blueridgeoutdoors.com/mobile-basecamp/Application/";

var employees;

$('#employeeListPage').bind('pageinit', function(event) {
	getEmployeeList();
});

function getEmployeeList() {
	var post_type = getUrlVars()["post_type"];
	$.getJSON(serviceURL + 'json.php?post_type='+post_type, function(data) {
		$('#employeeList li').remove();
		employees = data.markers1;
		$.each(employees, function(index, value) {
			$('#employeeList').append('<li><a href="locationdetails.html?ID=' + value.ID + '">' +
					'<h4>' + value.post_title + '</h4>' +
					'<p>' + value.City +','+ value.State +'</p>' );
		});
		$('#employeeList').listview('refresh');
	});
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}