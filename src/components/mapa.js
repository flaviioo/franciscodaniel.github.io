export default {
    template:
        `
        <div id="map"></div>
    `,
    data() {
        return {
            componentName: 'mapa',
        }
    },
    mounted() {
        var map = L.map('map').setView([-8.969341638289647, 13.384979451303368], 16);
        console.log(map);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(map);

        var marker = L.marker([-8.969341638289647, 13.384979451303368]).addTo(map);

        marker.bindPopup("<b>Francisco Daniel.").openPopup();


    },
}