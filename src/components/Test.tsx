import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {brandsData} from "../data/brandsData.ts";
import ComtelBrand from "./ui/ComtelBrand.tsx";
import {useEffect, useState} from "react";
import './Test.css';
import {useCalculatorStore} from "../store/useCalculatorStore.ts";
import ComtelButton from "./ui/ComtelButton.tsx";
import {createPortal} from "react-dom";
import ModalWindow from "./ModalWindow.tsx";


export default function ToggleButtons() {

    const type = useCalculatorStore(state => state.type);

    const brand = useCalculatorStore(state => state.brand);
    const setBrand = useCalculatorStore(state => state.setBrand);

    const series = useCalculatorStore(state => state.series);
    const setSeries = useCalculatorStore(state => state.setSeries);

    const seriesArray = useCalculatorStore(state => state.seriesArray);
    const setSeriesArray = useCalculatorStore(state => state.setSeriesArray);

    const model = useCalculatorStore(state => state.model);
    const modelArray = useCalculatorStore(state => state.modelArray);

    const setModel = useCalculatorStore(state => state.setModel);
    const setModelArray = useCalculatorStore(state => state.setModelArray);

    const info = useCalculatorStore(state => state.info);
    const setInfo = useCalculatorStore(state => state.setInfo);

    const [image, setImage] = useState();

    useEffect(() => {
        console.log('type is ' + type)
        console.log('brand is ' + brand)
        console.log('series is ' + series)
        if (info) {
            console.log('info is ' + info[0])
        }
        console.log(image)
    }, [info]);

    const handleBrand = (
        _event: React.MouseEvent<HTMLElement>,
        newBrand: string,
    ) => {
        setBrand(newBrand);
    };

    const handleSeries = (
        _event: React.MouseEvent<HTMLElement>,
        newSeries: string,
    ) => {
        setSeries(newSeries);
    }

    const handleModel = (
        _event: React.MouseEvent<HTMLElement>,
        newModel: string,
    ) => {
        setModel(newModel);
    }

    const [test, setTest] = useState<boolean>(false)

    const testHandler = () => {
        setTest(prevState => !prevState)
    }

    return (
        <>
            <div className='bg-orange w-full h-12 rounded-t-3xl text-center text-base flex items-center justify-center text-white lg:text-2xl font-semibold font-mont'>
                Выберите бренд устройства
            </div>
            <div className='bg-zinc-900 w-full h-fit rounded-b-3xl flex flex-col gap-5 justify-evenly items-center'>
                <ToggleButtonGroup
                    value={brand}
                    exclusive
                    onChange={handleBrand}
                    aria-label="text brands"
                    className='p-5 !flex flex-wrap gap-2 justify-between border border-x-0 border-t-0 border-b-white '
                >
                    {
                        brandsData.map(brand => (
                            <ToggleButton className='w-5/12 lg:w-[15%] hover:!bg-orange !border-none !rounded-3xl hover:duration-500' onClick={() => {
                                setSeries('');
                                setModel('');
                                setSeriesArray(brand.series)
                            }} value={brand.name}
                                          aria-label={brand.name}>
                                <ComtelBrand name={brand.name} img={brand.img}/>
                            </ToggleButton>
                        ))
                    }
                </ToggleButtonGroup>
                {
                    brand != null &&
                    <>
                        <ToggleButtonGroup
                            value={series}
                            exclusive
                            onChange={handleSeries}
                            className='!flex !justify-center flex-wrap gap-3 w-full p-5'
                        >
                            {seriesArray?.map(s => (
                                <ToggleButton onClick={() => {
                                    // @ts-ignore
                                    setModelArray(s.models)
                                    setModel('');
                                }} color='secondary' value={s.name}>
                                    <button className='h-10 w-2/12 min-w-fit'>{s.name}</button>
                                </ToggleButton>
                            ))}
                        </ToggleButtonGroup>
                    </>
                }
                {
                    brand && series &&
                    <ToggleButtonGroup
                        value={model}
                        exclusive
                        onChange={handleModel}
                        className='!flex !justify-around flex-wrap gap-2 w-full p-5 animate-show'
                    >
                        {
                            modelArray.map(model => (
                                <ToggleButton onClick={() => {
                                    // @ts-ignore
                                    setInfo(model.prices)
                                    // @ts-ignore
                                    setImage(model.img)
                                }} color='secondary' value={model.name}>
                                    <button className='h-10 w-2/12 min-w-fit'>{model.name}</button>
                                </ToggleButton>
                            ))
                        }
                    </ToggleButtonGroup>
                }
                {
                    model && series &&
                    <div className='w-full flex justify-center'>
                        <div className='w-11/12 border-x-0 border-t-white border-b-0 border pt-10 py-5 flex flex-col lg:flex-row gap-2 animate-show'>

                            <div className='bg-transparent lg:w-5/12'>
                                <img className='h-fit rounded-3xl' src={image} loading='lazy' alt=""/>
                            </div>
                            <div className='flex flex-col lg:w-7/12 gap-2'>
                                {
                                    info?.map(i => (
                                        <div className='bg-white rounded-3xl text-center h-10 flex items-center justify-center hover:bg-orange duration-300 hover:text-white'>
                                            <p>{i.name} - {i.price}</p>
                                        </div>
                                    ))
                                }
                                <ComtelButton onClick={testHandler} background='bg-orange' text='Записаться на ремонт'/>
                                {
                                    test && createPortal(
                                        <div className='fixed h-screen w-screen backdrop-brightness-75 backdrop-blur z-[52] top-0 lg:flex lg:items-center lg: justify-center'><ModalWindow visibility={test} close={testHandler}/></div>  , document.body)
                                }


                            </div>
                        </div>
                    </div>
                }

            </div>

        </>

    );
}