import React from 'react'

export default function ListTracks(props) {
    return (
        <div className='section-playlist-list-song bg-[#121212]'>
            <div className='section-play-list-control flex justify-between gap-8 px-8 py-6 items-center'>
                <div className='flex items-center gap-8'>
                    <button onClick={props.handlePlay} className='rounded-[50%] hover:scale-110 transition-all duration-200 bg-primaryColor p-3.5'>
                        {props.elementIconPlayingItem}
                    </button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="hsla(0,0%,100%,.7)" className="bi bi-heart cursor-pointer" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                </div>
                <div className='flex items-center'>
                    <input className='text-[#fff] font-CircularLight bg-transparent border rounded-tl-[500px] rounded-bl-[500px] px-5 outline-none py-2' type="text" />
                    <div className='bg-primaryColor px-5 py-2 border border-primaryColor rounded-tr-[500px] rounded-br-[500px]'><i className="-ml-1 fa-solid fa-magnifying-glass text-[#fff]"></i></div>
                </div>
            </div>
            <div className='section-playlist-list px-8'>
                <table className='table-fixed w-full text-[#B3B3B3] font-CircularLight text-sm'>
                    <thead className='text-left'>
                        <tr className='border-b border-[hsla(0,0%,100%,.1)]'>
                            <th width="5%" className='text-center'>#</th>
                            <th width="35%" className='py-2'>Title</th>
                            <th wdth="20%" className='py-2'>Album</th>
                            <th className='py-2'>Date Added</th>
                            <th width="5%" className='py-2'><i className="fa-regular fa-clock"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='pt-8 hover:bg-[hsla(0,0%,100%,.1)]'>
                            <td className='text-center'>1</td>
                            <td className='flex gap-2 items-center py-2'>
                                <div><img className='w-10 h-10' src="https://i.scdn.co/image/ab67616d000048513a9bb590e0c50a8774333783" alt="" /></div>
                                <div><p className='text-base font-CircularBook text-[#fff]'>Tình Đơn Phương</p><p className='text-sm'>Tùng Acoustic</p></div>
                            </td>
                            <td>Tuyển tập của Tùng Acoustic</td>
                            <td></td>
                            <td>4:42</td>
                        </tr>
                        <tr className='pt-8 hover:bg-[hsla(0,0%,100%,.1)]'>
                            <td className='text-center'>1</td>
                            <td className='flex gap-2 items-center py-2'>
                                <div><img className='w-10 h-10' src="https://i.scdn.co/image/ab67616d000048513a9bb590e0c50a8774333783" alt="" /></div>
                                <div><p className='text-base font-CircularBook text-[#fff]'>Tình Đơn Phương</p><p className='text-sm'>Tùng Acoustic</p></div>
                            </td>
                            <td>Tuyển tập của Tùng Acoustic</td>
                            <td></td>
                            <td>4:42</td>
                        </tr>
                        <tr className='pt-8 hover:bg-[hsla(0,0%,100%,.1)]'>
                            <td className='text-center'>1</td>
                            <td className='flex gap-2 items-center py-2'>
                                <div><img className='w-10 h-10' src="https://i.scdn.co/image/ab67616d000048513a9bb590e0c50a8774333783" alt="" /></div>
                                <div><p className='text-base font-CircularBook text-[#fff]'>Tình Đơn Phương</p><p className='text-sm'>Tùng Acoustic</p></div>
                            </td>
                            <td>Tuyển tập của Tùng Acoustic</td>
                            <td></td>
                            <td>4:42</td>
                        </tr>
                        <tr className='pt-8 hover:bg-[hsla(0,0%,100%,.1)]'>
                            <td className='text-center'>1</td>
                            <td className='flex gap-2 items-center py-2'>
                                <div><img className='w-10 h-10' src="https://i.scdn.co/image/ab67616d000048513a9bb590e0c50a8774333783" alt="" /></div>
                                <div><p className='text-base font-CircularBook text-[#fff]'>Tình Đơn Phương</p><p className='text-sm'>Tùng Acoustic</p></div>
                            </td>
                            <td>Tuyển tập của Tùng Acoustic</td>
                            <td></td>
                            <td>4:42</td>
                        </tr>
                        <tr className='pt-8 hover:bg-[hsla(0,0%,100%,.1)]'>
                            <td className='text-center'>1</td>
                            <td className='flex gap-2 items-center py-2'>
                                <div><img className='w-10 h-10' src="https://i.scdn.co/image/ab67616d000048513a9bb590e0c50a8774333783" alt="" /></div>
                                <div><p className='text-base font-CircularBook text-[#fff]'>Tình Đơn Phương</p><p className='text-sm'>Tùng Acoustic</p></div>
                            </td>
                            <td>Tuyển tập của Tùng Acoustic</td>
                            <td></td>
                            <td>4:42</td>
                        </tr>
                        <tr className='pt-8 hover:bg-[hsla(0,0%,100%,.1)]'>
                            <td className='text-center'>1</td>
                            <td className='flex gap-2 items-center py-2'>
                                <div><img className='w-10 h-10' src="https://i.scdn.co/image/ab67616d000048513a9bb590e0c50a8774333783" alt="" /></div>
                                <div><p className='text-base font-CircularBook text-[#fff]'>Tình Đơn Phương</p><p className='text-sm'>Tùng Acoustic</p></div>
                            </td>
                            <td>Tuyển tập của Tùng Acoustic</td>
                            <td></td>
                            <td>4:42</td>
                        </tr>
                        <tr className='pt-8 hover:bg-[hsla(0,0%,100%,.1)]'>
                            <td className='text-center'>1</td>
                            <td className='flex gap-2 items-center py-2'>
                                <div><img className='w-10 h-10' src="https://i.scdn.co/image/ab67616d000048513a9bb590e0c50a8774333783" alt="" /></div>
                                <div><p className='text-base font-CircularBook text-[#fff]'>Tình Đơn Phương</p><p className='text-sm'>Tùng Acoustic</p></div>
                            </td>
                            <td>Tuyển tập của Tùng Acoustic</td>
                            <td></td>
                            <td>4:42</td>
                        </tr>
                        <tr className='pt-8 hover:bg-[hsla(0,0%,100%,.1)]'>
                            <td className='text-center'>1</td>
                            <td className='flex gap-2 items-center py-2'>
                                <div><img className='w-10 h-10' src="https://i.scdn.co/image/ab67616d000048513a9bb590e0c50a8774333783" alt="" /></div>
                                <div><p className='text-base font-CircularBook text-[#fff]'>Tình Đơn Phương</p><p className='text-sm'>Tùng Acoustic</p></div>
                            </td>
                            <td>Tuyển tập của Tùng Acoustic</td>
                            <td></td>
                            <td>4:42</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
