class LocationService {

    getUserLocation() {
        return new Promise((resolve, reject) => {
            if (!navigator.geolocation) {
                reject(new Error(`Geolocation is not supported by your browser`));
            }
            navigator.geolocation.getCurrentPosition((position) => {
                resolve(position);
            }, () => {
                reject(new Error(`Oops! Some error in retrieving location or permission rules`))
            });
        })

    }
}

export default new LocationService();
