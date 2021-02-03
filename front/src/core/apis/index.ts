import {AccessPointsApi, DevicesApi, EnvironmentsApi} from "./back"
import store from "../../store";

type Apis = {
    core: {
        freebox: {
            accessPoints: AccessPointsApi,
            device: DevicesApi
        }
        environments: EnvironmentsApi
    }
}

const getEnv = (name: string, fallback: string): string => {
    return store.getState().environments.envs[name] ?? fallback
}

export var Apis: Apis = createApis();

export function createApis(): Apis {

    const backend = getEnv("BACKEND_HOST", "http://localhost:4000");
    Apis = {
        core: {
            freebox: {
                accessPoints: new AccessPointsApi({basePath: backend}),
                device: new DevicesApi({basePath: backend})
            },
            environments: new EnvironmentsApi({basePath: backend})
        }
    }
    return Apis;
}




