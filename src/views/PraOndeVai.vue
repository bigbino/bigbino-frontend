<template>
  <div>
    <v-container fill-height fluid grid-list-xl>
      <v-layout justify-center wrap>
        <v-flex xs12 md12>
          <div id="location-map"></div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    var map = L.map("location-map");
    //Usa a localização para iniciar
    map.locate({ setView: true, maxZoom: 12 });
    //função para colocar o marcador
    function onLocationFound(e) {
      var radius = e.accuracy;
      L.marker(e.latlng)
        .addTo(map)
        .bindPopup("Olá! Você está aqui!")
        .openPopup();
    }
    map.on("locationfound", onLocationFound);
    var mapLink = '<a href="https://openstreetmap.org">OpenStreetMap</a>';
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "Map data &copy; " + mapLink,
      maxZoom: 20
    }).addTo(map);
    L.Routing.control({
      showAlternatives: true,
      autoRoute: true,
      routeWhileDragging: true,
      geocoder: L.Control.Geocoder.nominatim()
    }).addTo(map);
  }
};
</script>

<style>
#location-map {
  height: 100vh;
  overflow: auto;
  background: #fff;
  border: none;

  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}
</style>