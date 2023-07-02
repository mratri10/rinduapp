import React, { useEffect } from 'react';
import ListPopUp from '../../../component/listPopup';
import DateField from '../../../component/dateField';
import { useForm, SubmitHandler, useController } from "react-hook-form"

interface InputProfile {
    name: string
    birthday: string
    gender: string
    deskripsi: string
}
function ProfileScreen() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        control,
    } = useForm<InputProfile>()

    const fieldGender = useController({ name: 'gender', control })
    const fieldBirthday = useController({ name: 'birthday', control })


    const onSubmit: SubmitHandler<InputProfile> = (data) => {

        console.log('Form:', data);
    };
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
            <div className='bg-white p-8 rounded shadow-md'>
                <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor='name' className='block mb-1'>Name: </label>
                        <input
                            id='name'
                            type='text'
                            className='w-full px-4 py-2 border-gray-400 border-2 rounded'
                            placeholder='Masukan Nama Anda'
                            {...register('name')} />
                    </div>
                    <ListPopUp
                        data={['Laki-laki', 'Perempuan']}
                        label='Gender'
                        name='gender'
                        value={fieldGender.field.value}
                        onChange={(v: string) => fieldGender.field.onChange(v)}
                    />

                    <DateField
                        label='Tanggal Lahir'
                        name='birthday'
                        value={fieldBirthday.field.value}
                        onChange={(v) => fieldBirthday.field.onChange(v)} />

                    <button className='w-full py-2 bg-primary text-white rounded ' type='submit'>Update Data</button>
                </form>
            </div>

        </div>
    )
}

export default ProfileScreen