import React from 'react';
import { FaFacebookF, FaPhoneAlt } from 'react-icons/fa';
import Link from 'next/link';
import { MdEmail } from 'react-icons/md';
import { SiZalo } from 'react-icons/si';
import { IoMdSearch } from 'react-icons/io';
import Image from 'next/image';
import useCompany from '@/swr/useCompany';
import RadialMenu from './radiaMenu';

function HeaderMobile(props: { setShowFind: any }) {
    //swr
    const Company = useCompany();
    if (Company.error) return "Error load company";
    if (Company.isLoading) return "Loading company";
    return (
        <>
            <div className='flex justify-around items-center' >
                <div>
                    <Link href={"/"}>
                        <Image
                            width={120}
                            height={60}
                            src={`/img/logos/${Company.data?.logo}`}
                            alt="Logo"
                            className="h-24 lg:w-28  sm:w-16 w-16 cursor-pointer object-contain"
                        />
                    </Link>
                </div>
                <div className='flex justify-end items-center gap-1'>
                    <Link
                        aria-label="Liên hệ Facebook InNhanh79"
                        target='_blank' href={Company.data?.facebook || ""}
                        className='w-6 h-6 bg-blue-500 text-white relative rounded-sm shadow-lg transition-colors duration-300 hover:bg-blue-700'>
                        <FaFacebookF className='w-3 h-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                    </Link>
                    <Link
                        aria-label="Liên hệ Zalo InNhanh79"
                        target='_blank'
                        href={
                            `https://zalo.me/${Company.data?.zalo}` || "#"
                        }
                        className='w-6 h-6 bg-blue-500 text-white relative rounded-sm shadow-lg transition-colors duration-300 hover:bg-blue-700'>
                        <SiZalo className='w-3 h-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                    </Link>
                    <Link
                        aria-label="Liên hệ Hotline InNhanh79"
                        href={`tel:${Company.data?.hotline}`}
                        className='w-6 h-6 bg-blue-500 text-white relative rounded-sm shadow-lg transition-colors duration-300 hover:bg-blue-700'>
                        <FaPhoneAlt className='w-3 h-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                    </Link>
                    <Link
                        aria-label="Liên hệ Email InNhanh79"
                        href={`mailto:${Company.data?.email}`}
                        className='w-6 h-6 bg-blue-500 text-white relative rounded-sm shadow-lg transition-colors duration-300 hover:bg-blue-700'>
                        <MdEmail className='w-3 h-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                    </Link>
                    {/* <ButtonIcon
                        iconReact={IoMdSearch}
                        tooltip="Tìm sản phẩm"
                        onClick={() => setShowFind(true)}
                        className='w-6 h-6 bg-blue-500 text-white relative rounded-sm shadow-lg transition-colors duration-300 hover:bg-blue-700'
                        iconSize='w-3 h-3'
                    /> */}
                </div>
            </div>
            <RadialMenu />
        </>
    );
}

export default HeaderMobile;