function initMap() {
    var mymap = L.map('map').setView([51.505, -0.09], 13);
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(mymap);
  
    L.marker([51.5, -0.09]).addTo(mymap)
      .bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();
  }
  