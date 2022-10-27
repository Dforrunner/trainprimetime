import React, {useState, useCallback, memo, useEffect} from 'react'
import {GoogleMap, useJsApiLoader, Marker, withScriptjs, withGoogleMap,} from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%'
};

const center = {
    lat: 38.74777067813599,
    lng: -90.59649168159503
};

const MyMarker = ({myKey, lat, lng, href, markerHref}) =>
    <Marker
        key={myKey}
        position={{lat, lng}}
        clickable={true}
        onClick={() => {
            window.open(href,'_blank')
        }}
        icon={{
            url: markerHref,
            scaledSize: new window.google.maps.Size(150, 100)
        }}
    />

const Map = () => {
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCD3IsJU2E7AmYl7PDNSwcduMtXFAJI2d0"
    })

    const [map, setMap] = useState(null)
    const [marker, setMarket] = useState("http://127.0.0.1:3000/marker.png")
    const [zoom, setZoom] = useState(10)

    useEffect(() => {
        setTimeout(() => {
            setZoom(12)
        }, 1000)

    }, []);

    const onLoad = useCallback((map) => {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = useCallback((map) => {
        setMap(null)
    }, [])



    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={{
                width: '100%',
                height: '100%'
            }}
            zoom={zoom}
            center={{lat: 38.717537954757496, lng: -90.513266742907}}
            options={{
                mapTypeControl: false,
                streetViewControl: false,
                fullscreenControl: false
            }}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <MyMarker
                myKey={123234}
                lat={38.74777067813599}
                lng={-90.59649168159503}
                href={'https://g.page/TrainPrimeTime?share'}
                markerHref={'http://127.0.0.1:3000/marker.png'}
            />

            <MyMarker
                myKey={12323434}
                lat={38.672723138692}
                lng={-90.44682469745278}
                href={'https://goo.gl/maps/5LHvuxoi4CAJQR2B8'}
                markerHref={'http://127.0.0.1:3000/marker.png'}
            />
        </GoogleMap>
    ) : <></>
}

export default Map;