import {hostname} from "os"

export const globalConf = {
    exposeEnvironmentVariables: false,
    appInfo: {
        id: "freebox.manager",
        version: "1",
        name: "Freebox Manager",
        deviceName: hostname()
    }
}


