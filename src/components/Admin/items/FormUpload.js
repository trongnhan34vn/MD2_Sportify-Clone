import React from 'react'
import { useState, useEffect } from 'react';
import { storage } from '../../../firebase/config'
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { useDispatch, useSelector } from 'react-redux';
import { postNewTrackAudio } from '../../../redux/actions';
import { listTracksAdmin } from '../../../redux/selector';

export default function FormUpload(props) {
    const dispatch = useDispatch()
    const listTracksAudio = useSelector(listTracksAdmin)
    // Upload Firebase
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);
    const imagesListRef = ref(storage, "images/");
    const [audioUpload, setAudioUpload] = useState(null);
    const [audioUrls, setAudioUrls] = useState([])
    const audioListRef = ref(storage, "audios/");

    // Viết hàm upload
    const uploadImgFile = (e) => {
        setImageUpload(pre => pre = e.target.files[0])
        let image = e.target.files[0]
        const imageRef = ref(storage, `images/${image.name}`);
        uploadBytes(imageRef, image).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrls(url);
            });
        });

    };
    useEffect(() => {
        setImageUrls([])
        setAudioUrls([])
    }, []);

    const uploadAudioFile = (e) => {
        console.log(e.target.files[0]);
        setAudioUpload(e.target.files[0])
        let audio = e.target.files[0]
        const audioRef = ref(storage, `audios/${audio.name}`);
        uploadBytes(audioRef, audio).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setAudioUrls(url);
            });
        });
    };
    console.log(audioUrls);
    

    // Upload Firebase

    const [inputValue, setInputValue] = useState(
        {
            audioName: "",
            albums: "",
            date: "",
            artist: ""
        }
    )

    const validate = () => {
        if (inputValue.audioName.trim() === "") {
            return false
        }
        if (inputValue.albums.trim() === "") {
            return false
        }
        if (inputValue.date.trim() === "") {
            return false
        }
        if (inputValue.artist.trim() === "") {
            return false
        }
        return true
    }

    const handleChange = (e) => {
        let key = e.target.name;
        let value = e.target.value;
        setInputValue({ ...inputValue, [key]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validate()) {
            let newTrack = { ...inputValue, id: listTracksAudio.length + 1, audioImg: imageUrls, audioUrl: audioUrls }
            dispatch(postNewTrackAudio(newTrack))
        }
    }

    return (
        <div className={`section-playlist-banner items-center bg-cover bg-left-bottom bg-no-repeat flex gap-6 bg-[url("https://firebasestorage.googleapis.com/v0/b/spotify-clone-2754a.appspot.com/o/Admin%20Page%2Fbackground-adminpage.jpeg?alt=media&token=2e67d13a-90f6-4f8d-9939-16a6001063e7")] max-h-[500px] h-[30vh] min-h-[400px] pb-8 pt-16 px-8`}>
            <div className='w-3/4 flex gap-16 m-auto'>
                <div className='banner-img w-48 flex flex-col text-center'>
                    <div className='w-48 h-48 border'>
                        <img className='w-48 h-full object-cover shadow-[0 4px 60px rgb(0 0 0 / 50%)]' src={imageUrls.length === 0 ? ""  : imageUrls} alt="" />
                    </div>
                    <div className='mt-2 overflow-hidden'>
                        <label className=' text-[#fff] font-CircularLight text-sm hover:underline cursor-pointer' htmlFor='upload-photo'>Choose File</label>
                        <input className='hidden text-[#fff] font-CircularLight text-sm hover:underline cursor-pointer truncate' id='upload-photo' type="file" onChange={uploadImgFile} />
                    </div>
                </div>
                <div className='form-upload w-full text-[#fff]'>
                    <div className='text-sm'>
                        <div className='w-full flex justify-between gap-10 mb-4'>
                            <div className='flex-1'>
                                <label className='pl-1 font-CircularBook block mb-2'>Tên bài hát :</label>
                                <input name='audioName' onChange={handleChange} className='font-CircularLight border-[#fff] w-full bg-transparent border rounded-[500px] px-5 outline-none py-2' placeholder='Nhập tên bài hát...' type="text" />
                            </div>
                            <div className='flex-1'>
                                <label className='pl-1 font-CircularBook block mb-2'>Nghệ sĩ :</label>
                                <input name='artist' onChange={handleChange} className='font-CircularLight border-[#fff] w-full bg-transparent border rounded-[500px] px-5 outline-none py-2' placeholder='Nhập tên nghệ sĩ...' type="text" />
                            </div>
                        </div>
                        <div className='w-full flex justify-between gap-10 mb-4'>
                            <div className='flex-1'>
                                <label className='pl-1 font-CircularBook block mb-2'>Album :</label>
                                <input name='albums' onChange={handleChange} className='font-CircularLight border-[#fff] w-full bg-transparent border rounded-[500px] px-5 outline-none py-2' placeholder='Nhập tên album...' type="text" />
                            </div>
                            <div className='flex-1'>
                                <label className='pl-1 font-CircularBook block mb-2'>Ngày đăng :</label>
                                <input name='date' onChange={handleChange} className='font-CircularLight border-[#fff] w-full bg-transparent border rounded-[500px] px-5 outline-none py-2' placeholder='Nhập ngày đăng...' type="text" />
                            </div>
                        </div>
                        <div className='flex justify-between gap-10'>
                            <div className='flex-1 relative'>
                                <label className='pl-1 font-CircularBook block mb-2'>Audio :</label>
                                <input defaultValue={audioUpload && audioUpload.name} disabled className='font-CircularLight w-full bg-transparent border rounded-[500px] px-5 outline-none py-2' type="text" />
                                <div className='mt-1 float-right flex items-center'>
                                    <label className='text-[#fff] z-50 bg-transparent font-CircularLight text-sm hover:underline cursor-pointer mr-2 translate-y-1' htmlFor='upload-audio'>Choose File</label>
                                    <input className='hidden' id='upload-audio' onChange={uploadAudioFile} type="file" />
                                </div>
                            </div>
                            <div className='bg-transparent flex-1'></div>
                        </div>
                        <button onClick={handleSubmit} data-modal-target="popup-modal" data-modal-toggle="popup-modal" className='text-[#121212] tracking-widest float-right mt-2 font-CircularMedium text-base px-8 py-3 hover:scale-105 hover:opacity-90 transition-all duration-200 bg-primaryColor rounded-[500px]'>Upload Audio</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
