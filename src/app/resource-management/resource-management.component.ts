import { Component, OnInit } from '@angular/core';
import { Room, Machine, Package } from './resource.model';

@Component({
  selector: 'app-resource-management',
  standalone : false,
  templateUrl: './resource-management.component.html',
  styleUrls: ['./resource-management.component.css']
})
export class ResourceManagementComponent implements OnInit {
  rooms: Room[] = [];
  machines: Machine[] = [];
  packages: Package[] = [];

  // Modèles pour la saisie de nouvelles ressources
  newRoom: Room = { id: 0, name: '', capacity: 0 };
  newMachine: Machine = { id: 0, name: '', type: '' };
  newPackage: Package = { id: 0, name: '', price: 0, duration: '' };

  constructor() { }

  ngOnInit(): void {
    // Charger les ressources initiales (exemple)
    this.loadResources();
  }

  loadResources() {
    // Vous pouvez charger les ressources à partir d'un service ou les définir manuellement pour le moment
    this.rooms = [
      { id: 1, name: 'Salle 1', capacity: 30 },
      { id: 2, name: 'Salle 2', capacity: 50 }
    ];
    this.machines = [
      { id: 1, name: 'Machine A', type: 'Cardio' },
      { id: 2, name: 'Machine B', type: 'Renforcement musculaire' }
    ];
    this.packages = [
      { id: 1, name: 'Forfait 1 mois', price: 100, duration: '1 mois' },
      { id: 2, name: 'Forfait 6 mois', price: 500, duration: '6 mois' }
    ];
  }

  // Méthodes pour ajouter des ressources
  addRoom() {
    this.rooms.push({ ...this.newRoom, id: this.rooms.length + 1 });
    this.newRoom = { id: 0, name: '', capacity: 0 };  // Réinitialiser le formulaire
  }

  addMachine() {
    this.machines.push({ ...this.newMachine, id: this.machines.length + 1 });
    this.newMachine = { id: 0, name: '', type: '' };
  }

  addPackage() {
    this.packages.push({ ...this.newPackage, id: this.packages.length + 1 });
    this.newPackage = { id: 0, name: '', price: 0, duration: '' };
  }

  // Méthodes pour supprimer des ressources
  deleteRoom(id: number) {
    this.rooms = this.rooms.filter(room => room.id !== id);
  }

  deleteMachine(id: number) {
    this.machines = this.machines.filter(machine => machine.id !== id);
  }

  deletePackage(id: number) {
    this.packages = this.packages.filter(pkg => pkg.id !== id);
  }

  // Méthodes pour modifier des ressources
  editRoom(room: Room) {
    this.newRoom = { ...room };
  }

  editMachine(machine: Machine) {
    this.newMachine = { ...machine };
  }

  editPackage(pkg: Package) {
    this.newPackage = { ...pkg };
  }

}
