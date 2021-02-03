import {BodyParams, Controller, Get, PathParams} from "@tsed/common";
import {Name, Returns} from "@tsed/schema";
import {Apis} from "../../../core/apis";
import {Device, DeviceReduced} from "../../../core/apis/freebox/models/device";
import {AccessPointReduced} from "../../../core/apis/freebox/models/access-points";

@Controller("/devices")
@Name("Devices")
export class DeviceController {

    @Get("/")
    @Returns(200, Array).Of(DeviceReduced)
    async get() {
        return await Apis.freebox.getConnectedDevices();
    }

    @Get("/:mac")
    @Returns(200, Device)
    @Returns(400).Description("If there is no device with this mac address")
    async getDevice(@PathParams("mac", String) mac: string) {
        return await Apis.freebox.getDevice(mac);
    }

    @Get("/connected")
    @Returns(200, Boolean)
    async isConnected(@BodyParams("macs", Array) macAddresses: string[]) {
        return await Apis.freebox.isConnected(macAddresses)
    }
}


@Controller("/access-points")
@Name("Access Points")
export class AccessPointsController {

    @Get("/")
    @Returns(200, Array).Of(AccessPointReduced)
    async get() {
        return await Apis.freebox.getAccessPoints();
    }

}
