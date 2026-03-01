import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly services = [
    {
      title: 'General Dentistry',
      description: 'Routine cleanings, digital x-rays, and preventive checkups for the whole family.'
    },
    {
      title: 'Cosmetic Dentistry',
      description: 'Professional whitening, veneers, and smile makeovers tailored to your goals.'
    },
    {
      title: 'Orthodontics',
      description: 'Clear aligners and braces for comfortable, effective smile alignment.'
    },
    {
      title: 'Emergency Care',
      description: 'Same-day appointments for toothaches, injuries, and urgent dental concerns.'
    }
  ];

  readonly dentists = [
    { name: 'Dr. Maya Kapoor', specialty: 'Cosmetic & Restorative Dentistry' },
    { name: 'Dr. Ethan Rivera', specialty: 'Family & Preventive Dentistry' },
    { name: 'Dr. Olivia Chen', specialty: 'Orthodontics' }
  ];
}
