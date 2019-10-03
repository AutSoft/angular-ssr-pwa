import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private hasPermission = false;

  constructor() {
    if ('Notification' in window) {
      if (Notification.permission === 'granted') {
        this.hasPermission = true;
      } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            this.hasPermission = true;
          }
        });
      }
    }
  }

  showNotification(title: string, body: string): Notification | undefined {
    if (this.hasPermission) {
      return new Notification(title, {body: body});
    }

    return undefined;
  }
}
