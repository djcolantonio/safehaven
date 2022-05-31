import React from 'react'
import Header from '../components/header'
import {Image} from 'next/image'
import Roose from '../assets/IMG-5770.JPG'

const style= {
    cardContainer: `rounded-[3rem]`,
}

const homes = () => {
  return (
      <div>
      <Header/>
      <div className='slider' >
                        <div className='slides'>
                            <div className='together'>
                            <div className={style.cardContainer}>

                                <Image
                                    className="rounded-t-lg"
                                    src={Roose}
                                    alt=''
                                />
                                <figcaption></figcaption>

                            </div>
                            </div>
                            <div className='together'>
                            <div className={style.cardContainer}>

                                <Image id='img'
                                    className="rounded-t-lg"
                                    // src={}
                                    alt=''
                                />
                                <figcaption></figcaption>

                            </div>
                            </div>
                        </div>
                    </div>
</div>
  )
}

export default homes