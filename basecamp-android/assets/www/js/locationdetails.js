$('#detailsPage').live('pageshow', function(event) {
	var ID = getUrlVars()["ID"];
	$.getJSON(serviceURL + 'getlocation.php?ID='+ID, displayLocation);
});

function displayLocation(data) {
	var serviceURL = "http://basecamp.blueridgeoutdoors.com/mobile-basecamp/Application/";
	var spot = data.location;
	$.each(spot, function(index, value) {
        
    //var location = data.markers1;
	//console.log(data);
	//alert(data[0].post_title);
	//$('#locationPic').attr('src', 'pics/' + location.picture);
	$('#fullName').text(value.post_title);
	$('#locationTitle').append(value.City + ', ' + value.State + ' | ' + '<a href="tel:' + value.Phone + '">' + value.Phone + '</a>' + ' | ' + '<a href="' + value.URL + '">' + value.URL + '</a>');
	$('#city').html(value.post_content);
	var directionURL = "http://maps.google.com/maps?q="+value.geo_latitude+","+value.geo_longitude+"&t=m";
	$('#dirButton').append('<a href="'+ directionURL +'" target="_blank">Get Directions</a>');
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