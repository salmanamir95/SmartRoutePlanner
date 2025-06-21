import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.html',
  styleUrls: ['./login-component.css']
})
export class LoginComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
  if (isPlatformBrowser(this.platformId)) {
    gsap.fromTo(
      '#loginCard',
      {
        opacity: 0,
        scale: 0.9,
        y: 50,
        rotateX: -15,
        transformOrigin: 'center center',
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        rotateX: 0,
        duration: 1.2,
        ease: 'power3.out',
      }
    );

    gsap.to('#loginCard', {
      delay: 1.2,
      scale: 1.03,
      yoyo: true,
      repeat: 1,
      ease: 'sine.inOut',
      duration: 0.4,
    });
  }

  
}

replayAnimation(): void {
  if (isPlatformBrowser(this.platformId)) {
    gsap.fromTo(
      '#loginCard',
      {
        opacity: 0,
        scale: 0.9,
        y: 50,
        rotateX: -15,
        transformOrigin: 'center center',
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        rotateX: 0,
        duration: 1.2,
        ease: 'power3.out',
      }
    );

    gsap.to('#loginCard', {
      delay: 1.2,
      scale: 1.03,
      yoyo: true,
      repeat: 1,
      ease: 'sine.inOut',
      duration: 0.4,
    });
  }
}


}
