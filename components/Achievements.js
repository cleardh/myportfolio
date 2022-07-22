import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import gageiboo1 from '../assets/images/gageiboo/gageiboo1.png';
import gageiboo2 from '../assets/images/gageiboo/gageiboo2.png';
import gageiboo3 from '../assets/images/gageiboo/gageiboo3.png';
import gageiboo4 from '../assets/images/gageiboo/gageiboo4.png';
import gageiboo5 from '../assets/images/gageiboo/gageiboo5.png';
import gageiboo6 from '../assets/images/gageiboo/gageiboo6.png';
import gageiboo7 from '../assets/images/gageiboo/gageiboo7.png';
import { Icon, IconSize } from '@blueprintjs/core';

const Achievements = () => {
  return (
    <div className='container'>
        <div className='achievements-wrapper'>
            <div className='achievements-title'>
                <Icon icon='star' size={IconSize.LARGE} style={{ marginRight: 5 }} />
                gageiboo
            </div>
            <Carousel showThumbs={false}>
                <div className='achievements-image'>
                    <Image src={gageiboo1} width='800' height='600' />
                </div>
                <div className='achievements-image'>
                    <Image src={gageiboo2} width='800' height='600' />
                </div>
                <div className='achievements-image'>
                    <Image src={gageiboo3} width='800' height='600' />
                </div>
                <div className='achievements-image'>
                    <Image src={gageiboo4} width='800' height='600' />
                </div>
                <div className='achievements-image'>
                    <Image src={gageiboo5} width='800' height='600' />
                </div>
                <div className='achievements-image'>
                    <Image src={gageiboo6} width='800' height='600' />
                </div>
                <div className='achievements-image'>
                    <Image src={gageiboo7} width='800' height='600' />
                </div>
            </Carousel>
        </div>
    </div>
  )
}

export default Achievements;