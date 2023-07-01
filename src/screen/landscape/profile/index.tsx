import React from 'react';
import ListPopUp from '../../../component/listPopup';
import DateField from '../../../component/dateField';

function ProfileScreen() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
            <div className='bg-white p-8 rounded shadow-md'>
                <form className='space-y-4' onSubmit={() => console.log('++++ ', 'jgn lah')}>
                    <div>
                        <label htmlFor='name' className='block mb-1'>Name: </label>
                        <input
                            type='text'
                            autoComplete='name'
                            id='name'
                            className='w-full px-4 py-2 border-gray-400 border-2 rounded'
                            placeholder='Masukan Nama Anda' />
                    </div>
                    <ListPopUp data={['Laki-laki', 'Perempuan']} onPress={(v) => { console.log("+++++++++++++ ", v) }} title='Gender' />
                    <DateField onPress={(v) => { console.log("+++++++++++++ ", v) }} title='Tanggal Lahir' />
                    <button className='w-full py-2 bg-primary text-white rounded ' type='button'>Update Data</button>
                </form>
            </div>

        </div>
    )
}

export default ProfileScreen