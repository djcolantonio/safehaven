import React from 'react'
import Header from '../components/header'

const style = {
  wrapper: `relative`,
  container: `before:content-[''] before:absolute before:top-20 before:left-0 before:right-0 before:bottom-0  
  before:bg-cover before:bg-center before:opacity-30 before:blur  before:-m-20  `,
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
  copyContainer: `w-1/2`,
  title: `relative text-white text-[46px] font-semibold`,
  description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  cardContainer: `rounded-[3rem]`,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}

const about = () => {
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.contentWrapper}>
                    <div className={style.copyContainer}>
                        <div className={style.title}>
                            About Safe Haven
                        </div>

                        <div className={style.description}>
                        Addiction is something that is involved in many families and we want to be there to help and assist in the recovery process. The effects of addiction on the family can be difficult to deal with for the addict and for the family and having a place to stay 
                        where individuals in recovery can organize their life, and improve their coping skills is something 
                        that is essential for living a balanced life. At Safe Haven Sober Living, we provide housing, food and a healthy environment so that residents can mend relationships with their loved ones, enhance their career and get back to living a stable life. Being around others that are consistently improving their life and management skills is important to one's recovery and going to meetings, taking care of responsibilities, and following healthy routines will put them in the position to get the life back that they deserve. If you or someone you know needs help, feel free to send us an email or give us a call to learn more. 
                        </div>

                        {/* <div className={style.ctaContainer}>
                        </div> */}
                    </div>
                    <div className={style.cardContainer}>

                        {/* <div className={style.infoContainer}>
                            <img
                                className="h-[2.25rem] rounded-full"
                                src="https://i0.wp.com/mediianews.com/wp-content/uploads/2022/04/Why-Elon-Musk-Didnt-Join-the-Twitter-Board-After-All.jpg?resize=500%2C280&ssl=1"
                                alt=''
                            />
                            <div className={style.author}>
                                <div className={style.name}>Luxury House on Mars</div>
                                <a
                                    className="text-[#1868b7]"
                                    href=''>
                                    Elon Musk
                                </a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}

export default about