import React from 'react'
import { useState, useEffect } from 'react';
import { storage } from '../firebase/config'
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { useDispatch, useSelector } from 'react-redux';
import { selectTrackSelector } from '../redux/selector';
import { actUpdateTrack } from '../redux/actions';


export default function EditModal(props) {
    const dispatch = useDispatch()
    const selectTrack = useSelector(selectTrackSelector)
    console.log(selectTrack);
    // Upload Firebase
    const [imageUploadModal, setImageUploadModal] = useState(null);
    const [imageUrlsModal, setImageUrlsModal] = useState([]);
    const imagesListRef = ref(storage, "images/");
    const [audioUploadModal, setAudioUploadModal] = useState(null);
    const [audioUrlsModal, setAudioUrlsModal] = useState([])
    const audioListRef = ref(storage, "audios/");

    // Viết hàm upload
    const uploadImgFileModal = (e) => {
        console.log("Nhân");
        setImageUploadModal(pre => pre = e.target.files[0])
        let image = e.target.files[0]
        const imageRef = ref(storage, `images/${image.name}`);
        uploadBytes(imageRef, image).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrlsModal(url);
            });
        });

    };
    useEffect(() => {
        setImageUrlsModal([])
        setAudioUrlsModal([])
    }, []);

    const uploadAudioFileModal = (e) => {

        setAudioUploadModal(e.target.files[0])
        let audio = e.target.files[0]
        const audioRef = ref(storage, `audios/${audio.name}`);
        uploadBytes(audioRef, audio).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setAudioUrlsModal(url);
            });
        });
    };


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
            handleCloseModal()
            let updateTrack = { ...inputValue, audioImg: imageUrlsModal, audioUrl: audioUrlsModal }
            dispatch(actUpdateTrack(updateTrack))
        }
    }

    const handleCloseModal = () => {
        props.setOpenEditModal(false)
    }


    useEffect(() => {
        selectTrack.selectTrack && setInputValue(
            {
                id: selectTrack.selectTrack.id,
                audioName: selectTrack.selectTrack.audioName,
                artist: selectTrack.selectTrack.artist,
                albums: selectTrack.selectTrack.albums,
                date: selectTrack.selectTrack.date
            }
        )

    }, [selectTrack.selectTrack])

    const editModal = (props.openEditModal) ? "opacity-100 z-[100]" : "-translate-y-16 z-[-1] opacity-0 h-0 w-0"

    return (
        <div className={`${editModal}`}>
            <div className={`transition duration-1000 fixed bg-black bg-opacity-80 ${editModal} top-0 left-0 w-screen h-screen overflow-hidden flex justify-center items-center`}>
                <div className="bg-white w-[63%] h-[75%] relative  rounded-lg bg-gradient-to-b from-[#8ba1b4] to-[#2b2e2e] flex justify-center items-center">
                    <div className="flex justify-between w-[83%] h-[70%]">
                        <div className=' flex justify-between w-full gap-10'>
                            <div className='banner-img w-48 flex flex-col text-center'>
                                <div className='w-48 h-48 border'>
                                    <img className='w-48 h-full object-cover shadow-[0 4px 60px rgb(0 0 0 / 50%)]' src={imageUrlsModal.length === 0 ? "" : imageUrlsModal} alt="" />
                                </div>
                                <div className='mt-2 overflow-hidden'>
                                    <label className=' text-[#fff] font-CircularLight text-sm hover:underline cursor-pointer' htmlFor='upload-photo-modal'>Choose File</label>
                                    <input className='hidden text-[#fff] font-CircularLight text-sm hover:underline cursor-pointer truncate' id='upload-photo-modal' type="file" onChange={uploadImgFileModal} />
                                </div>
                            </div>
                            <div className='form-upload w-full text-[#fff]'>
                                <div className='text-sm w-full'>
                                    <div className='w-full flex justify-between gap-10 mb-4'>
                                        <div className='flex-1'>
                                            <label className='pl-1 font-CircularBook block mb-2'>Tên bài hát :</label>
                                            <input value={inputValue.audioName} name='audioName' onChange={handleChange} className='font-CircularLight border-[#fff] w-full bg-transparent border rounded-[500px] px-5 outline-none py-2' placeholder='Nhập tên bài hát...' type="text" />
                                        </div>
                                        <div className='flex-1'>
                                            <label className='pl-1 font-CircularBook block mb-2'>Nghệ sĩ :</label>
                                            <input value={inputValue.artist} name='artist' onChange={handleChange} className='font-CircularLight border-[#fff] w-full bg-transparent border rounded-[500px] px-5 outline-none py-2' placeholder='Nhập tên nghệ sĩ...' type="text" />
                                        </div>
                                    </div>
                                    <div className='w-full flex justify-between gap-10 mb-4'>
                                        <div className='flex-1'>
                                            <label className='pl-1 font-CircularBook block mb-2'>Album :</label>
                                            <input value={inputValue.albums} name='albums' onChange={handleChange} className='font-CircularLight border-[#fff] w-full bg-transparent border rounded-[500px] px-5 outline-none py-2' placeholder='Nhập tên album...' type="text" />
                                        </div>
                                        <div className='flex-1'>
                                            <label className='pl-1 font-CircularBook block mb-2'>Ngày đăng :</label>
                                            <input value={inputValue.date} name='date' onChange={handleChange} className='font-CircularLight border-[#fff] w-full bg-transparent border rounded-[500px] px-5 outline-none py-2' placeholder='Nhập ngày đăng...' type="text" />
                                        </div>
                                    </div>
                                    <div className='flex justify-between gap-10 mb-8'>
                                        <div className='flex-1 relative'>
                                            <label className='pl-1 font-CircularBook block mb-2'>Audio :</label>
                                            <input defaultValue={audioUploadModal && audioUploadModal.name} disabled className='font-CircularLight w-full bg-transparent border rounded-[500px] px-5 outline-none py-2' type="text" />
                                            <div className='mt-1 float-right flex items-center'>
                                                <label className='text-[#fff] z-50 bg-transparent font-CircularLight text-sm hover:underline cursor-pointer mr-2 translate-y-1' htmlFor='upload-audio-modal'>Choose File</label>
                                                <input className='hidden' id='upload-audio-modal' onChange={uploadAudioFileModal} type="file" />
                                            </div>
                                        </div>
                                        <div className='bg-transparent flex-1'></div>
                                    </div>
                                    <button onClick={handleSubmit} data-modal-target="popup-modal" data-modal-toggle="popup-modal" className='text-[#121212] tracking-widest float-right mt-2 font-CircularMedium text-base px-8 py-3 hover:scale-105 hover:opacity-90 transition-all duration-200 bg-primaryColor rounded-[500px]'>Update Audio</button>
                                </div>
                            </div>
                        </div>
                        <div className='text-[#fff] opacity-70 hover:opacity-100 text-2xl right-6 absolute top-4'><button onClick={handleCloseModal}><i className="fa-solid fa-xmark"></i></button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
