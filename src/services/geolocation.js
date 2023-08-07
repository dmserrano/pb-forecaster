export const getCurrentPosition = (setPosition = () => { }) => {
    if ("geolocation" in navigator) {
        /* geolocation is available */
        navigator.geolocation.getCurrentPosition(({ coords = {} }) => {
            const { latitude, longitude } = coords;
            setPosition(`${latitude},${longitude}`);
        });
    } else {
        /* geolocation IS NOT available */
        setPosition('');
    }
}