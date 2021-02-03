import {TestService} from "./freebox";
import {ApiServices} from "./Api";
import {EnvironmentService} from "./Environments";

export const Services = {
    test: new TestService(),
    api: new ApiServices(),
    environments: new EnvironmentService()
}
