import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseURL = "https://api.themoviedb.org/3/";
  configData = null;
  baseImageUrla = null;
  APIKEY = "31cb4f58f5d02d7887a1b4eb89b216de";

  constructor() { }

  getConfig(){
    const url = "".concat(this.baseURL, "configuration?api_key=", this.APIKEY)
    fetch(url).then((result) => {
      return result.json();
    })
    .then((data) => {
      this.baseImageUrla = data.images.secure_base_url;
      this.configData = data.images;
      console.log("config:", data);
      console.log("config fetched");
      this.runSearch("jaws");
    }).catch(function(err) {
      alert(err);
    })
  }

  runSearch(keyword: string) {
    const url = "".concat(this.baseURL, "configuration?api_key=", this.APIKEY)
    fetch(url).then(result =>
      result.json()).then((data) => {
        document.getElementById("output").innerHTML = JSON.stringify(data, null, 4);
      })
  } 
}
