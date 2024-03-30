import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";

const YandexMap = () => {
    return (
        <YMaps>
            <Map width='100%' height='100%' defaultState={{
                center: [48.765523, 44.811192],
                zoom: 16,
                controls: ['zoomControl', 'fullscreenControl'],
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