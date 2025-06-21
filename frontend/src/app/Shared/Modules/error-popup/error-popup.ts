import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-popup',
  imports: [CommonModule],
  templateUrl: './error-popup.html',
  styleUrls: ['./error-popup.css'] // ✅ FIXED
})

export class ErrorPopupComponent implements OnInit {
  @Input() message: string = 'Something went wrong!';
  show: boolean = true;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
  // ✅ Read the message from route `data` (not query params)
  const routedMsg = this.route.snapshot.data['message'];
  if (routedMsg) {
    this.message = routedMsg;
  }

  // Optional auto-close
  setTimeout(() => (this.show = false), 5000);
}


  closePopup() {
    this.show = false;
  }
}
