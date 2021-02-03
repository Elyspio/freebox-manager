import {Freebox} from "freebox";
import {freeboxInfo} from "../../../config/freebox";
import {Device, DeviceReduced} from "./models/device";
import {AccessPointReduced, ListAccessPointResult} from "./models/access-points";
import {NotFound} from "@tsed/exceptions";


export class FreeboxApi {

    private caller?: Freebox

    public async getConnectedDevicesForAccessPoint(accessPointId: number): Promise<DeviceReduced[]> {
        await this.init();

        const result = (await this.caller.request({
            method: "GET",
            url: `wifi/ap/${accessPointId}/stations/`,
        })).data.result

        return result.map(d => ({bssid: d.bssid, hostname: d.hostname, mac: d.mac}))
    }

    public async getConnectedDevices(): Promise<DeviceReduced[]> {
        await this.init();

        const ret = [];

        const ids = (await this.getAccessPoints()).map(ap => ap.id);

        const devices = await Promise.all(ids.map(id => this.getConnectedDevicesForAccessPoint(id)));

        devices.forEach(arr => ret.push(...arr));

        return ret.map(d => ({bssid: d.bssid, hostname: d.hostname, mac: d.mac}))
    }

    public async getDevice(mac: string): Promise<Device> {
        await this.init();

        const accessPoints = (await this.getAccessPoints()).map(ap => ap.id)
        let response: Device
        for (let i = 0; i < accessPoints.length; i++) {
            response = (await this.caller.request({
                method: "GET",
                url: `wifi/ap/${accessPoints[i]}/stations/${mac}`,
            })).data.result

            if (response !== undefined) break;
        }

        if (response === undefined) {
            throw new NotFound(`Could not find a device with ${mac} as  mac address`);
        }

        return response;
    }

    public async getAccessPoints(): Promise<AccessPointReduced[]> {
        await this.init();
        const response: ListAccessPointResult[] = (await this.caller.request({
            method: "GET",
            url: "wifi/ap/",
        })).data.result
        return response.map(ap => ({id: ap.id, name: ap.name}));
    }

    async isConnected(macAddresses: string[]): Promise<boolean> {
        const devices = await this.getConnectedDevices();
        return devices.some(d => macAddresses.includes(d.mac));
    }

    private async init() {

        if (!this.caller) {
            this.caller = new Freebox(freeboxInfo.access);
            await this.caller.login();
        }
    }
}
