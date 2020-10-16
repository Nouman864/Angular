export interface Coordinates {
    lat: number;
    lng: number;
  }
  
  export interface PlaceLocation extends Coordinates {
    split(arg0: string);
    address: string;
    staticMapImageUrl: string;
  }