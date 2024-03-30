import {create} from "zustand";
import {brandsData} from "../data/brandsData.ts";

interface useCalculatorStoreProps {
    brand: string
    series: string
    seriesArray: {
        name: string,
        models: {}[]
    }[] | undefined
    model: string
    modelArray: {
        name: string
        prices: {
            name: string,
            price: string,
        }[]
    }[]
    setBrand: (brand: string) => void
    setSeries: (series: string) => void
    setSeriesArray: (series: {
                         name: string,
                         models: {}[]
                     }[] | undefined
    ) => void
    setModel: (model: string) => void
    setModelArray: (
        modelArray: {
            name: string
            prices: {
                name: string
                price: string
            }[]
        }[] | undefined
    ) => void
    info: [
        {name: string, price: string },
    ] | undefined
    setInfo: (info: [
        {name: string, price: string },
    ] | undefined
    ) => void
}

export const useCalculatorStore = create<useCalculatorStoreProps>((set) => ({
    brand: 'Samsung',
    series: '',
    seriesArray: brandsData[0].series,
    model: '',
    modelArray: [],

    setBrand: (brand) => {
        set({
            brand: brand
        })

    },
    setSeriesArray: (series: {
                         name: string,
                         models: {}[]
                     }[] | undefined
    ) => {
        set({
            seriesArray: series
        })
    },
    setSeries: (series) => {
        set({
            series: series
        })
    },
    setModel: (model) => {
        set({
            model: model
        })
    },
    setModelArray: (modelArray: {
                        name: string
                        prices: {
                            name: string
                            price: string
                        }[]
                    }[] | undefined
    ) => {
        set({
            modelArray: modelArray
        })
    },
    info: undefined,
    setInfo: (info: [
        {name: string, price: string },
    ] | undefined
    ) => {
        set({
            info: info
        })
    }
}))