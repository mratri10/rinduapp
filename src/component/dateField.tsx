import React, { useEffect, useRef, useState } from 'react';


type TypeList = {
    title: string,
    onPress: (v: string) => void
}
const startYear = 1930;
const endYear = 2020;
const yearsArray = Array.from({ length: endYear - startYear + 1 }, (_, index) => startYear + index);
const monthArray = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
function DateField({ title, onPress }: TypeList) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('');

    const [yearSelected, setYearSelected] = useState(70);
    const [monthSelected, setMonthSelected] = useState(6);
    const [dateSelected, setDateSelected] = useState(15);
    const [dateHandler, setDateHandler] = useState(false)

    const handleSelected = (isSelected: boolean) => {
        if (isSelected) {
            setSelected(getFormatDate(dateSelected, monthSelected, yearSelected))
            onPress(`${dateSelected}-${monthSelected}-${yearSelected}`)
        }
        setIsOpen(!isOpen)
    }

    return (
        <div >
            <button type='button' className={`border-gray-400 border-2 text-left py-2 px-4 rounded w-full ${selected ? 'text-gray' : 'text-gray-400'}`}
                onClick={() => setIsOpen(!isOpen)}>
                <h1>{selected ? selected : title}</h1>
            </button>
            {
                isOpen && (
                    <div className='fixed top-0 left-0 right-0 bottom-0 bg-gray-400 bg-opacity-40 flex flex-col items-center justify-center'>
                        <div className='flex flex-col bg-white p-10 items-center justify-center'>
                            <div className='flex flex-row'>
                                <ListDate onDate={(v, status) => { setDateSelected(v); setDateHandler(status) }} handler={dateHandler} year={yearSelected} month={monthSelected} value={dateSelected} />
                                <ListMonth onDate={(v, status) => { setMonthSelected(v); setDateHandler(status) }} handler={dateHandler} value={monthSelected} />
                                <ListYear onDate={(v, status) => { setYearSelected(v); setDateHandler(status) }} handler={dateHandler} value={yearSelected} />


                            </div>
                            <button
                                onClick={() => setDateHandler(true)}
                                className=' border border-black rounded text-black p-2 w-full'
                                type='button'>
                                {getFormatDate(dateSelected, monthSelected, yearSelected)}
                            </button>
                            <div className='flex flex-row'>
                                <button type='button' className='py-2 mt-5 w-32 bg-primary text-white' onClick={() => handleSelected(true)}>Pilih</button>
                                <div className='w-2' />
                                <button type='button' className='py-2 mt-5 w-32 bg-red-500 text-white' onClick={() => handleSelected(false)}>Batal</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

type ListMonthType = {
    onDate: (v: number, status: boolean) => void,
    handler: boolean,
    value: number,
}
function ListMonth({ onDate, handler, value }: ListMonthType) {
    const scrollableRef = useRef<HTMLDivElement>(null);
    const [numPosition, setNumPosition] = useState(value);

    useEffect(() => {
        onMonth()
        const handleScroll = () => {
            const element = document.getElementById('scroll-month');
            if (element) {
                const scrollTop = element.scrollTop;
                const roundedPosition = Math.round(scrollTop / 36);
                setNumPosition(roundedPosition)
                onDate(roundedPosition, false)
            }
        }
        const scrollAbleContainer = document.getElementById('scroll-month')
        if (scrollAbleContainer) {
            scrollAbleContainer.addEventListener('scroll', handleScroll)
        }
        return () => {
            if (scrollAbleContainer) {
                scrollAbleContainer.removeEventListener('scroll', handleScroll)
            }
        }
    }, [])

    useEffect(() => {
        if (handler) {
            onMonth()
        }
    }, [handler])

    const onMonth = () => {
        const scrollableContainer = scrollableRef.current;
        if (scrollableContainer) {
            scrollableContainer.scrollTo({
                top: numPosition * 36,
                behavior: 'auto'
            });
            onDate(numPosition, false)
        }
    }

    return (
        <div>
            <div className='h-28 w-28'>
                <div className={`fixed h-28 flex items-center justify-center`}>
                    <div className={`h-10 w-28 border-t border-b border-solid border-black`} />
                </div>
                <div id='scroll-month' className={`fixed h-28 overflow-y-scroll w-28 p-2`} ref={scrollableRef}>
                    {
                        monthArray.map((value, index) => (
                            <div className={`mb-3 ${index == 0 && 'mt-9'} ${index == monthArray.length - 1 && 'mb-9'}`}
                                key={index}>{value}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

type ListYearType = {
    onDate: (v: number, status: boolean) => void,
    handler: boolean,
    value: number
}
function ListYear({ onDate, handler, value }: ListYearType) {
    const scrollableRef = useRef<HTMLDivElement>(null);
    const [numPosition, setNumPosition] = useState(value);

    useEffect(() => {
        onYear()
        const handleScroll = () => {
            const element = document.getElementById('scroll-year');
            if (element) {
                const scrollTop = element.scrollTop;
                const roundedPosition = Math.round(scrollTop / 36);
                setNumPosition(roundedPosition)
                onDate(roundedPosition, false)
            }
        }
        const scrollAbleContainer = document.getElementById('scroll-year')
        if (scrollAbleContainer) {
            scrollAbleContainer.addEventListener('scroll', handleScroll)
        }
        return () => {
            if (scrollAbleContainer) {
                scrollAbleContainer.removeEventListener('scroll', handleScroll)
            }
        }
    }, [])

    useEffect(() => {
        if (handler) {
            onYear()
        }
    }, [handler])

    const onYear = () => {
        const scrollableContainer = scrollableRef.current;
        if (scrollableContainer) {
            scrollableContainer.scrollTo({
                top: numPosition * 36,
                behavior: 'auto'
            });
            onDate(numPosition, false)
        }
    }

    return (
        <div>
            <div className={`h-28 w-16`}>
                <div className={`fixed h-28 flex items-center justify-center`}>
                    <div className={`h-10 w-16 border-t border-b border-solid border-black`} />
                </div>
                <div id='scroll-year' className={`fixed h-28 overflow-y-scroll w-16 p-2`} ref={scrollableRef}>
                    {
                        yearsArray.map((value, index) => (
                            <div className={`mb-3 ${index == 0 && 'mt-9'} ${index == yearsArray.length - 1 && 'mb-9'}`}
                                key={index}>{value}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

type ListDateType = {
    year: number,
    month: number,
    onDate: (v: number, status: boolean) => void,
    handler: boolean,
    value: number,
}
function ListDate({ onDate, handler, month, year, value }: ListDateType) {
    const scrollableRef = useRef<HTMLDivElement>(null);
    const [numPosition, setNumPosition] = useState(value);

    useEffect(() => {
        onDateFix()
        const handleScroll = () => {
            const element = document.getElementById('scroll-date');
            if (element) {
                const scrollTop = element.scrollTop;
                const roundedPosition = Math.round(scrollTop / 36);
                setNumPosition(roundedPosition)
                onDate(roundedPosition, false)
            }
        }
        const scrollAbleContainer = document.getElementById('scroll-date')
        if (scrollAbleContainer) {
            scrollAbleContainer.addEventListener('scroll', handleScroll)
        }
        return () => {
            if (scrollAbleContainer) {
                scrollAbleContainer.removeEventListener('scroll', handleScroll)
            }
        }
    }, [])

    useEffect(() => {
        if (handler) {
            onDateFix()
        }
    }, [handler])

    const onDateFix = () => {
        const scrollableContainer = scrollableRef.current;
        if (scrollableContainer) {
            scrollableContainer.scrollTo({
                top: numPosition * 36,
                behavior: 'auto'
            });
            onDate(numPosition, false)
        }
    }

    return (
        <div>
            <div className={`h-28 w-14`}>
                <div className={`fixed h-28 flex items-center justify-center`}>
                    <div className={`h-10 w-14 border-t border-b border-solid border-black`} />
                </div>
                <div id='scroll-date' className={`fixed h-28 overflow-y-scroll w-14 p-2`} ref={scrollableRef}>
                    {
                        getNumberOfDays(year, month).map((value, index) => (
                            <div className={`mb-3 ${index == 0 && 'mt-9'} ${index == getNumberOfDays(year, month).length - 1 && 'mb-9'}`}
                                key={index}>{value}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

function getNumberOfDays(year: number, month: number) {
    // Periksa apakah bulan valid (0-11)
    if (month < 0 || month > 11) {
        throw new Error('Bulan tidak valid');
    }

    // Inisialisasi objek Date dengan tahun dan bulan yang diberikan
    const date = new Date(year, month, 1);

    // Maju ke bulan berikutnya dan mundur 1 hari untuk mendapatkan tanggal terakhir bulan ini
    date.setMonth(date.getMonth() + 1);
    date.setDate(date.getDate() - 1);

    // Dapatkan tanggal terakhir bulan ini
    const numberOfDays = date.getDate();

    const dateArray = Array.from({ length: numberOfDays }, (_, index) => 1 + index);

    return dateArray;
}

function getFormatDate(date: number, month: number, year: number) {
    return `${getNumberOfDays(year, month)[date]} ${monthArray[month]} ${yearsArray[year]}`
}

export default DateField