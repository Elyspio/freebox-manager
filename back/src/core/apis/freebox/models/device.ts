import {ArrayOf, Enum, Property,} from "@tsed/schema";

export enum AF {
    Ipv4 = "ipv4",
    Ipv6 = "ipv6",
}

export class L3Connectivity {
    @Property()
    addr: string;
    @Property()
    active: boolean;
    @Property()
    reachable: boolean;
    @Property(Number)
    last_activity: number;
    @Enum(AF.Ipv4, AF.Ipv6)
    af: AF;
    @Property(Number)
    last_time_reachable: number;
}


export class Name {
    @Property()
    name: string;
    @Property()
    source: string;
}

export class Last {
    @Property(Number)
    bitrate: number;
    @Property(Number)
    mcs: number;
    @Property(Boolean)
    shortgi: boolean;
    @Property(Number)
    vht_mcs: number;
    @Property()
    width: string;
}

export class WifiInformation {
    @Property()
    band: string;
    @Property()
    ssid: string;
    @Property(Number)
    signal: number;
}

export class AccessPoint {
    @Property()
    mac: string;
    @Property()
    type: string;
    @Property()
    connectivity_type: string;
    @Property()
    uid: string;
    @Property(WifiInformation)
    wifi_information: WifiInformation;
    @Property(Number)
    rx_rate: number;
    @Property(Number)
    tx_rate: number;
}

export class Flags {
    @Property()
    vht: boolean;
    @Property()
    legacy: boolean;
    @Property()
    authorized: boolean;
    @Property()
    ht: boolean;
}

export class L2Ident {
    @Property()
    id: string;
    @Property()
    type: string;
}

export class Host {
    @Property(L2Ident)
    l2ident: L2Ident;
    @Property(Boolean)
    active: boolean;
    @Property(Boolean)
    persistent: boolean;
    @ArrayOf(Name)
    names: Name[];
    @Property()
    vendor_name: string;
    @Property()
    host_type: string;
    @Property()
    interface: string;
    @Property()
    id: string;
    @Property(Number)
    last_time_reachable: number;
    @Property(Boolean)
    primary_name_manual: boolean;
    @Property()
    default_name: string;
    @Property(L3Connectivity)
    l3connectivities: L3Connectivity[];
    @Property()
    reachable: boolean;
    @Property(Number)
    last_activity: number;
    @Property(AccessPoint)
    access_point: AccessPoint;
    @Property()
    primary_name: string;
}

export class DeviceReduced {
    @Property()
    bssid: string;
    @Property()
    hostname: string;
    @Property()
    mac: string;
}


export class Device {

    @Property(Number)
    rx_bytes: number;
    @Property(Number)
    tx_bytes: number;
    @Property()
    bssid: string;
    @Property(Number)
    conn_duration: number;
    @Property(Last)
    last_tx: Last;
    @Property()
    hostname: string;
    @Property()
    mac: string;
    @Property()
    access_type: string;
    @Property(Number)
    custom_key_id: number;
    @Property()
    id: string;
    @Property()
    pairwise_cipher: string;
    @Property()
    state: string;
    @Property(Number)
    inactive: number;
    @Property()
    wpa_alg: string;
    @Property(Last)
    last_rx: Last;
    @Property(Flags)
    flags: Flags;
    @Property(Number)
    tx_rate: number;
    @Property(Number)
    rx_rate: number;
    @Property(Number)
    signal: number;
    @Property(Host)
    host?: Host;
}


export class ListStationResult {
    @Property()
    success: boolean;
    @ArrayOf(Device)
    result: Device[];
}
