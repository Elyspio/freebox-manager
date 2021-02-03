import {Apis} from "../apis";

export class TestService {
    getDevices() {
        return Apis.core.freebox.device.get().then(x => x.data)
    }
}
