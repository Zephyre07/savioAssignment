import { Component, Input, ViewChild, NgZone, OnInit } from '@angular/core';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';
import { ILocation } from '../ILocation';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent{

  
  latitude=12.00;
  longitude=77.6;
  

  location:ILocation={
    latitude : 12.9716,
    longitude : 77.5946
  }

  onSubmitLocation(location: ILocation): void {

    console.log(location);
    this.latitude = location.latitude;
    this.longitude= location.longitude;

  }

}
