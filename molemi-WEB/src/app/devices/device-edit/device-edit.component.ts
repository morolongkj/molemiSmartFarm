import { Component, OnInit, ViewChild } from '@angular/core';
import { DeviceService } from 'src/app/_services/device.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-device-edit',
  templateUrl: './device-edit.component.html',
  styleUrls: ['./device-edit.component.css']
})
export class DeviceEditComponent implements OnInit {
  device: any = {};
  @ViewChild('editDeviceForm') editDeviceForm: NgForm;

  constructor(
    private deviceService: DeviceService,
    private route: ActivatedRoute,
    private alertifyService: AlertifyService
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.device = data.device;
      console.table(this.device);
    });
  }

  updateDevice() {
    console.log(this.device);
    this.deviceService.updateDeviceName(this.device.id, this.device.name).subscribe(res => {
      console.log(res);
    });
  }

}
