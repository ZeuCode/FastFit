import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-apimaps',
  templateUrl: './apimaps.component.html',
  styleUrls: ['./apimaps.component.css']
})
export class ApimapsComponent implements OnInit {

  private map: any;

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    const mapOptions = {
      center: { lat: 40.7128, lng: -74.0060 }, // Coordenadas del centro del mapa (Nueva York)
      zoom: 12 // Nivel de zoom del mapa
    };

    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }
}