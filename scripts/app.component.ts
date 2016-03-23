import {Component, NgZone} from 'angular2/core';

@Component({
    selector: 'test-app',
    templateUrl: 'scripts/app.component.html'
})

export class AppComponent {
    devices: Array<any> = []
    constructor(private _ngZone: NgZone) {

        (<any>cordova).plugins.OpenZWave.connectFake("COM1", this.handleCollectionUpdate.bind(this), this.handleOpenZWaveFailure.bind(this));
    }

    handleCollectionUpdate(deviceCollection: Array<any>): void {

        console.log(JSON.stringify(deviceCollection));

        // filter nodes w/o `manufacturer` property (w/o real experiments its hard to say if this could happen at all)
        deviceCollection = deviceCollection.filter((node: any) => typeof node.manufacturer !== 'undefined'); 

        var me = this;
        // refresh ui
        this._ngZone.run(() => {
            me.devices = deviceCollection;
        });
    }

    handleOpenZWaveFailure(err: Error): void {
        // handle error
        (<any>navigator).notification.alert('OpenZWave faied: ' + err.message);
    }

    connect(device: any): void {
        (<any>navigator).notification.alert('Connect: ' + JSON.stringify({
            nodeId: device.nodeId,
            homeId: device.homeId
        }));
    }
}



