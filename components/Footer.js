import { Icon, IconSize } from '@blueprintjs/core';
import Image from 'next/image';
import linkedin from '../assets/images/linkedin.png';
import github from '../assets/images/github.png';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-elements'>
            <Link href='tel:+519-505-5699' passHref>
                <a className='footer-links'>
                    <Icon size={IconSize.LARGE} icon='phone' />
                </a>
            </Link>
            <Link href='mailto:cleardh@hotmail.com' passHref>
                <a className='footer-links'>
                    <Icon size={IconSize.LARGE} icon='envelope' />
                </a>
            </Link>
            <Link href='https://www.linkedin.com/in/donghakang' passHref>
                <a target='_blank' className='footer-links'>
                    <Image src={linkedin} width={20} height={20} />
                </a>
            </Link>
            <Link href='https://github.com/cleardh' passHref>
                <a target='_blank' className='footer-links'>
                    <Image src={github} width={20} height={20} />
                </a>
            </Link>
            <Link href='https://donghakang.com' passHref>
                <a target='_blank' className='footer-links'>
                    <Icon size={IconSize.LARGE} icon='globe-network' />
                </a>
            </Link>
        </div>
    </div>
  )
}

export default Footer;