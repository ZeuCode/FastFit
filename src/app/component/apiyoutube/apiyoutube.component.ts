import { Component, OnInit } from '@angular/core';



declare const gapi: any;
@Component({
  selector: 'app-apiyoutube',
  templateUrl: './apiyoutube.component.html',
  styleUrls: ['./apiyoutube.component.css']
})
export class ApiyoutubeComponent implements OnInit{
  private apiKey = 'AIzaSyBlqzAUJ9KY1ywDMi4VfRWVDAovMgcz2B8'; // Reemplaza con tu clave de API
  private videoId = 'lGsUbzF3zZo'; // ID del video

  ngOnInit() {
    this.loadYouTubeIframeAPI();
  }

  loadYouTubeIframeAPI() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    window['onYouTubeIframeAPIReady'] = () => {
      this.loadVideo();
    };
  }

  loadVideo() {
    const player = new window['YT'].Player('player', {
      height: '360',
      width: '640',
      videoId: this.videoId,
      events: {
        'onReady': this.onPlayerReady.bind(this)
      }
    });
  }

  onPlayerReady(event: any) {
    event.target.playVideo();
  }
}