import {Dispatch} from "redux";
import {connect, ConnectedProps} from "react-redux";
import {Box, Container} from "@material-ui/core";
import "./Devices.scss"
import Typography from "@material-ui/core/Typography";
import {Services} from "../../../core/services";
import * as React from 'react';
import {StoreState} from "../../../store";
import {DeviceReduced} from "../../../core/apis/back/models";

const mapStateToProps = (state: StoreState) => ({})

const mapDispatchToProps = (dispatch: Dispatch) => ({})

const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxTypes = ConnectedProps<typeof connector>;


const Devices = (props: ReduxTypes) => {


    const [devices, setDevices] = React.useState<DeviceReduced[]>([]);


    React.useEffect(() => {
        const fetchData = async () => {
            setDevices(await Services.test.getDevices());
        }
        fetchData();
    }, [])


    return (
        <Container className={"Devices"}>
            <Typography variant={"h6"}>Devices</Typography>
            {devices.map(d => <Box className={"Device"}>
                <Typography>Hostname: {d.hostname}</Typography>
                <Typography>Mac: {d.mac}</Typography>
                <Typography>Bssid: {d.bssid}</Typography>
            </Box>)}
        </Container>
    );

}


export default connector(Devices);
