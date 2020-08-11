import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/_services/device.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.css'],
})
export class DevicesListComponent implements OnInit {
  devices: any = {};
  searchTerm = '';
  limitParam = 5;
  limits = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

  constructor(
    private deviceService: DeviceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.devices = data.devices;
      console.table(this.devices);
    });
  }

  loadDevices() {
    this.deviceService.getDevices(this.limitParam).subscribe(res => {
      this.devices = res;
    });
  }


}
