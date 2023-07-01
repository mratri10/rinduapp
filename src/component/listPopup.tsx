import React, { useState } from 'react';


type TypeList = {
    data: string[],
    title: string,
    onPress: (v: string) => void
}
function ListPopUp({ data, title, onPress }: TypeList) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('');

    const handleSelected = (isSelected: boolean) => {
        if (isSelected) {
            onPress(selected)
        }
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <button type='button' className={`border-gray-400 border-2 text-left py-2 px-4 rounded w-full ${selected ? 'text-gray' : 'text-gray-400'}`}
                onClick={() => setIsOpen(!isOpen)}>
                <h1>{selected ? selected : title}</h1>
            </button>
            {
                isOpen && (
                    <div className='fixed top-0 left-0 right-0 bottom-0 bg-gray-400 bg-opacity-40 flex flex-col items-center justify-center'>
                        <div className='flex flex-col bg-white p-10 items-center justify-center'>
                            {data.map((option, index) => (
                                <div className='w-full' key={index}>
                                    <button type='button' className={`w-full py-2 px-4  cursor-pointer ${selected === option ? 'bg-primary text-white' : 'text-primary border border-primary'}`}
                                        onClick={() => setSelected(option)}>
                                        {option}

                                    </button>
                                    {index + 1 !== data.length && <div className='my-1' />}
                                </div>
                            ))}

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

export default ListPopUp