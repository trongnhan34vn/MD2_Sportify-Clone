import React from 'react'
import { useState, useEffect } from 'react';
import { storage } from '../../../firebase/config'
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";

export default function FormUpload(props) {
    // Upload Firebase
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);
    const imagesListRef = ref(storage, "images/");
    const [audioUpload, setAudioUpload] = useState(null);
    const [audioUrls, setAudioUrls] = useState([])
    const audioListRef = ref(storage, "audios/");

    // Viết hàm upload
    const uploadImgFile = () => {
        if (imageUpload !== null) {
            const imageRef = ref(storage, `images/${imageUpload.upload.name}`);
            uploadBytes(imageRef, imageUpload).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setImageUrls((prev) => [...prev, url]);
                });
            });
        } else {
            return
        }
    };

    const uploadAudioFile = () => {
        if (audioUpload !== null) {
            const audioFbRef = ref(storage, `audios/${audioUpload.name}`);

            uploadBytes(audioFbRef, audioUpload).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setAudioUrls((prev) => [...prev, url]);
                });
            });
        } else {
            return;
        }

    }

    const uploadFile = () => {
        uploadAudioFile()
        uploadImgFile()
        props.setToggleModal(true);
        setTimeout(() => {props.setToggleModal(false)},3000)
    }

    // Lấy dữ liệu trả về từ firebase
    useEffect(() => {
        if (imageUpload) {
            return () => imageUpload && URL.revokeObjectURL(imageUpload.url);
        }
    }, [imageUpload, audioUpload]);
    // Upload Firebase
    return (
        <div className={`section-playlist-banner items-center bg-cover bg-left-bottom bg-no-repeat flex gap-6 bg-[url("https://firebasestorage.googleapis.com/v0/b/spotify-clone-2754a.appspot.com/o/Admin%20Page%2Fbackground-adminpage.jpeg?alt=media&token=2e67d13a-90f6-4f8d-9939-16a6001063e7")] max-h-[500px] h-[30vh] min-h-[400px] pb-8 pt-16 px-8`}>
            <div className='w-3/4 flex gap-16 m-auto'>
                <div className='banner-img w-48 flex flex-col text-center'>
                    <div className='w-48 h-48 border'>
                        <img className='w-48 h-full shadow-[0 4px 60px rgb(0 0 0 / 50%)]' src={imageUpload?.url} alt="" />
                    </div>
                    <div className='mt-2'>
                        <label className='text-[#fff] font-CircularLight text-sm hover:underline cursor-pointer' htmlFor='upload-photo'>Choose File</label>
                        <input className='hidden' id='upload-photo' type="file" onChange={(e) => {
                            const file = e.target.files[0];
                            file.preview = URL.createObjectURL(file);
                            setImageUpload({ upload: e.target.files[0], url: file.preview })
                        }} />
                    </div>
                </div>
                <div className='form-upload w-full text-[#fff]'>
                    <div className='text-sm'>
                        <div className='w-full flex justify-between gap-10 mb-4'>
                            <div className='flex-1'>
                                <label className='pl-1 font-CircularBook block mb-2'>Tên bài hát :</label>
                                <input className='font-CircularLight w-full bg-transparent border rounded-[500px] px-5 outline-none py-2' placeholder='Nhập tên bài hát...' type="text" />
                            </div>
                            <div className='flex-1'>
                                <label className='pl-1 font-CircularBook block mb-2'>Nghệ sĩ :</label>
                                <input className='font-CircularLight w-full bg-transparent border rounded-[500px] px-5 outline-none py-2' placeholder='Nhập tên nghệ sĩ...' type="text" />
                            </div>
                        </div>
                        <div className='w-full flex justify-between gap-10 mb-4'>
                            <div className='flex-1'>
                                <label className='pl-1 font-CircularBook block mb-2'>Album :</label>
                                <input className='font-CircularLight w-full bg-transparent border rounded-[500px] px-5 outline-none py-2' placeholder='Nhập tên album...' type="text" />
                            </div>
                            <div className='flex-1'>
                                <label className='pl-1 font-CircularBook block mb-2'>Ngày đăng :</label>
                                <input className='font-CircularLight w-full bg-transparent border rounded-[500px] px-5 outline-none py-2' placeholder='Nhập ngày đăng...' type="text" />
                            </div>
                        </div>
                        <div className='flex justify-between gap-10'>
                            <div className='flex-1 relative'>
                                <label className='pl-1 font-CircularBook block mb-2'>Audio :</label>
                                <input defaultValue={audioUpload && audioUpload.name} disabled className='font-CircularLight w-full bg-transparent border rounded-[500px] px-5 outline-none py-2' type="text" />
                                <div className='mt-1 float-right flex items-center'>
                                    <label className='text-[#fff] z-50 bg-transparent font-CircularLight text-sm hover:underline cursor-pointer mr-2 translate-y-1' htmlFor='upload-audio'>Choose File</label>
                                    <input className='hidden' id='upload-audio' type="file" onChange={(e) => {
                                        setAudioUpload(e.target.files[0])
                                    }} />
                                </div>
                            </div>
                            <div className='bg-transparent flex-1'></div>
                        </div>
                        <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" onClick={uploadFile} className='text-[#121212] tracking-widest float-right mt-2 font-CircularMedium text-base px-8 py-3 hover:scale-105 hover:opacity-90 transition-all duration-200 bg-primaryColor rounded-[500px]'>Upload Audio</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
