import Image from 'next/image';
import portrait from '../assets/images/portrait.png';

const About = () => {
    return (
        <div className='container'>
            <div className='aboutWrapper'>
                <div className='aboutLeft'>
                    <div className='aboutLeftWrapper'>
                        <Image src={portrait} width='200' height='200' />
                    </div>
                </div>
                <div className='aboutRight'>
                    <div className='aboutRightWrapper'>
                        I&rsquo;m a software developer<br />
                        with strong <span className='aboutTextStrong'>attention to detail</span><br />
                        and <span className='aboutTextStrong'>automation</span> in mind.&nbsp;<span className='aboutTextCursor'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;