import React from 'react'
import Router from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import Roosevelt from '../assets/1.jpg'
import Freeport from '../assets/2.jpg'




// before:bg-[url('../assets/sober-living.jpg')] 
const style = {
    wrapper: `relative`,
    container: `before:content-[''] before:absolute before:top-20 before:left-0 before:right-0 before:bottom-0  
    before:bg-cover before:bg-center before:opacity-30 before:blur before:bg-[url('../assets/sober-living.jpg')] before:-m-20  `,
    contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
    copyContainer: `w-1/2`,
    title: `relative text-white text-[46px] font-semibold`,
    description: `text-[#8a939b] container-[300px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
    ctaContainer: `flex`,
    accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
    button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
    cardContainer: `rounded-[3rem]`,
    infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
    infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
    author: `flex flex-col justify-center ml-4`,
}

const hero = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.contentWrapper}>
                    <div className={style.copyContainer}>
                        <div className={style.title}>
                            A stepping stone to a balanced life.
                        </div>

                        <div className={style.description}>
                            We provide housing and facilities to indivudals in recovery.
                        </div>

                        <div className={style.ctaContainer}>
                            <Link href="/about">
                                <button className={style.accentedButton}>Read about us</button>
                                {/* <button className={style.button}></button> */}</Link>
                        </div>
                    </div>
                    <div className={style.cardContainer}>
                        <Image
                            className="rounded-t-lg"
                            src={Roosevelt
                            }
                            alt=''
                            width={500}
                            height={600}
                        />
                        <div className={style.infoContainer}>
                         
                            <div className={style.author}>
                                <div className={style.name}>Roosevelt, NY</div>
                           
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default hero