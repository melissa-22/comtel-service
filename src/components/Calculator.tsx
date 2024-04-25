import Test from "./Test.tsx";

const Calculator = () => {
    // const [brand, setBrand] = useState('samsung');
    // const [active, setActive] = useState<boolean>(false);
    return (
        <div id='prices' className='min-h-fit flex flex-col items-center py-10'>
            <h2 className="text-center text-4xl text-white font-bold font-mont xl:text-6xl">Что сломалось?</h2>
            <div className='p-4 lg:w-9/12'>
                <div>
                    <Test />
                </div>

            </div>
        </div>
    );
};

export default Calculator;