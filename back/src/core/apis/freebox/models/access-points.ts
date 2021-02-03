import {Property} from "@tsed/schema";


export class HT {
    @Property(Boolean)
    greenfield: boolean;
    @Property(Boolean)
    shortgi20: boolean;
    @Property(Boolean)
    vht_rx_ldpc: boolean;
    @Property(Boolean)
    ldpc: boolean;
    @Property()
    vht_rx_stbc: string;
    @Property(Boolean)
    vht_shortgi80: boolean;
    @Property(Boolean)
    ht_enabled: boolean;
    @Property(Boolean)
    rx_stbc: string;
    @Property(Boolean)
    dsss_cck_40: boolean;
    @Property(Boolean)
    tx_stbc: boolean;
    @Property(Boolean)
    ac_enabled: boolean;
    @Property()
    smps: string;
    @Property()
    vht_shortgi160: boolean;
    @Property(Boolean)
    vht_mu_beamformer: boolean;
    @Property(Boolean)
    vht_tx_stbc: boolean;
    @Property(Boolean)
    vht_su_beamformee: boolean;
    @Property(Boolean)
    vht_su_beamformer: boolean;
    @Property(Boolean)
    delayed_ba: boolean;
    @Property(Boolean)
    vht_tx_antenna_consistency: boolean;
    @Property(Boolean)
    max_amsdu_7935: boolean;
    @Property(Number)
    vht_max_ampdu_len_exp: number;
    @Property()
    vht_max_mpdu_len: string;
    @Property(Boolean)
    psmp: boolean;
    @Property(Boolean)
    shortgi40: boolean;
    @Property(Boolean)
    vht_rx_antenna_consistency: boolean;
    @Property(Boolean)
    lsig_txop_prot: boolean;
}

export class Status {
    @Property()
    channel_width: string;
    @Property(Number)
    primary_channel: number;
    @Property()
    dfs_disabled: boolean;
    @Property(Number)
    dfs_cac_remaining_time: number;
    @Property(Number)
    secondary_channel: number;
    @Property()
    state: string;
}

export class Config {
    @Property()
    channel_width: string;
    @Property(HT)
    ht: HT;
    @Property(Boolean)
    dfs_enabled: boolean;
    @Property()
    band: string;
    @Property(Number)
    secondary_channel: number;
    @Property(Number)
    primary_channel: number;
}


export class ListAccessPointResult {
    @Property(Boolean)
    capabilities: { [key: string]: { [key: string]: boolean } };
    @Property()
    name: string;
    @Property(Number)
    id: number;
    @Property()
    config: Config;
    @Property()
    status: Status;
}


export class AccessPointReduced {
    @Property()
    name: string;
    @Property(Number)
    id: number;
}
