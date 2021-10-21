import React, {useCallback, useState} from 'react';
import styles from './styles.css';
import GeolocationWidget from "../GeolocationWidget";
import WeatherWidget from "../WeatherWidget";

const Layout = () => {

    const [permission, setPermission] = useState(false);
    const [latVisitor, setLatVisitor] = useState(null);
    const [lonVisitor, setLonVisitor] = useState(null);
    const handlerApprove = useCallback((result) => {
        if (result) {
            const {lat, lon} = result;
            setPermission(!!result);
            setLatVisitor(lat);
            setLonVisitor(lon);
        }
    }, []);

    return (
        <div className={styles.flex}>
            <div className={styles.content}>
                {!permission ? <GeolocationWidget onApprove={handlerApprove}/> :
                    <WeatherWidget longitude={lonVisitor} latitude={latVisitor}/>}
            </div>
        </div>
    )
}
export default Layout;
