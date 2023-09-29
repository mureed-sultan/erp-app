import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { initializeApp } from 'firebase/app'; // Import the initializeApp function
import { AppModule } from './app/app.module';

initializeApp({
  apiKey: "AIzaSyBRTRiI6t4cCuVGsdLhwixGswLGq24HmjE",
  authDomain: "erp-app-78e00.firebaseapp.com",
  projectId: "erp-app-78e00",
  storageBucket: "erp-app-78e00.appspot.com",
  messagingSenderId: "1096834700857",
  appId: "1:1096834700857:web:f04192ad0940ae1d529fe8",
  measurementId: "G-0R59DRW5FE"
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
