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
      gsap.from('#loginCard', {
        duration: 1.2,
        opacity: 0,
        scale: 0.8,
        rotationX: -70,
        rotationY: -30,
        transformOrigin: 'center center',
        ease: 'power3.out',
      });

      gsap.to('#loginCard', {
        delay: 1.2,
        scale: 1.05,
        ease: 'bounce.out',
        duration: 0.6,
      });
    }
  }
}
