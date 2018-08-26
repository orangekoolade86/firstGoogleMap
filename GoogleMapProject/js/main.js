// #7 Create a function to add the map, with one variable for map properties. Update the location to your favorite place on Earth.
function myMap() {

var mapProp= {
    center:new google.maps.LatLng(26.494184,29.871903),
    zoom:5,
};

// #9 adding the map to the screen
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

// #10 adding a marker to the map
var marker = new google.maps.Marker({position: myCenter});

marker.setMap(map);





// #11 creating a marker to set map prop position
  google.maps.event.addListener(marker, 'click', function() {
    map.setZoom(9);
    map.setCenter(marker.getPosition());
  });
};

// #12 adding an event so that it will zoom in when the marker is clicked

google.maps.event.addListener(marker,'click',function() {
  map.setZoom(9);
  map.setCenter(marker.getPosition());
  });

google.maps.event.addDomListener(window, 'load', myMap);

// #14 disableing default controls in the map

// var mapOptions {disableDefaultUI: true}