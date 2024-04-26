import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";

const YandexMap = () => {
    return (
        <YMaps>
            <Map style={{width: '100%', height: '100%', borderTopRightRadius: '16px'}} defaultState={{
                center: [48.765523, 44.811192],
                zoom: 16,
                controls: ['zoomControl', 'fullscreenControl'],
                behaviors: ['drag'],
            }}
                modules={['control.ZoomControl', 'control.FullscreenControl']}
            >
                <Placemark
                    geometry={[48.765523, 44.811192]}
                    modules={["geoObject.addon.balloon"]}
                    properties={{
                        iconCaption:
                            "Комтел",
                    }}
                    options={{
                        iconColor: '#ff6600',
                        preset: 'islands#dotIcon'
                    }}
                />
            </Map>
        </YMaps>
    );
};

export default YandexMap;