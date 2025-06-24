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
      this.animateCard();
    }
  }

  animateCard(): void {
    // Card entrance with perspective and glow
    gsap.fromTo(
      '#loginCard',
      {
        opacity: 0,
        scale: 0.85,
        y: 80,
        rotateX: 25,
        transformPerspective: 1200,
        transformOrigin: 'center center'
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        rotateX: 0,
        duration: 1.2,
        ease: 'power4.out',
        onComplete: () => {
          // Subtle pulse effect
          gsap.to('#loginCard', {
            scale: 1.02,
            yoyo: true,
            repeat: 1,
            duration: 0.4,
            ease: 'sine.inOut'
          });
        }
      }
    );

    // Staggered form fields with slight rotation
    gsap.from('.form-field', {
      opacity: 0,
      y: 30,
      rotateY: 10,
      duration: 0.8,
      delay: 0.4,
      stagger: 0.2,
      ease: 'back.out(1.7)'
    });

    // Button hover animation
    gsap.to('button[type="button"]', {
      scale: 1.05,
      boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)',
      duration: 0.3,
      ease: 'power2.out',
      paused: true,
      id: 'buttonHover'
    });

    // Add hover interaction
    const button = document.querySelector('button[type="button"]');
    if (button) {
      button.addEventListener('mouseenter', () => gsap.to(button, { timeScale: 1, id: 'buttonHover', play: true }));
      button.addEventListener('mouseleave', () => gsap.to(button, { timeScale: -1, id: 'buttonHover', play: true }));
    }
  }

  replayAnimation(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.killTweensOf(['#loginCard', '.form-field', 'button[type="button"]']);
      this.animateCard();
    }
  }
}