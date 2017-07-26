// make form witn autocomplete for return place
var autocomplete = new google.maps.places.Autocomplete(
    (document.querySelector(".select-region")),
    {types: ["(cities)"],
        /*componentRestrictions: {country: "us"}*/
    });

// find coordinates place which user type-in search-form
function find (address, cb) {
    var geocoder = new google.maps.Geocoder;
    geocoder.geocode({"address": address}, function(results) {
        var lat = results[0].geometry.location.lat();
        var lng = results[0].geometry.location.lng();
        var coords =  `${lat},${lng}`;

        cb(coords);
    });
}