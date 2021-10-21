import Button from "@mui/material/Button";
import React, {useCallback} from "react";
import LocationService from '../../services/location.service'

const GeolocationWidget = ({onApprove}) => {

    const permissionGiven = useCallback(() => {
        LocationService.getUserLocation()
            .then(res => {
                onApprove({
                    lat: res.coords.latitude,
                    lon: res.coords.longitude
                })
            })
            .catch((e) => {
                alert(e.message)
            });
    }, [onApprove]);

    return (
        <div className="flex">
            <div>
                <p>
                    You must give permission to use your
                    geolocation data for this application
                </p>
                <Button variant="contained" onClick={permissionGiven}>OK</Button>
            </div>
        </div>
    )
}

export default GeolocationWidget
