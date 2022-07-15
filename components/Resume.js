import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Button, Icon, Intent } from '@blueprintjs/core';
import linkedin from '../assets/images/linkedin.png';
import github from '../assets/images/github.png';
import Link from 'next/link';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Resume = () => {
    const resumeToPrint = useRef();
    const [zoomFactor, setZoomFactor] = useState('100%');
    useEffect(() => {
        let zoom;
        if (typeof window === 'undefined' || window.outerWidth > 1000) zoom = '100%';
        else zoom = `${window.outerWidth / 1000 * 100}%`;
        setZoomFactor(zoom);
    }, []);
    const downloadPdf = () => {
        html2canvas(resumeToPrint.current, { scale: 3 }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'pt', 'a4', true);
            const pdfWidth = pdf.internal.pageSize.width;
            const pdfHeight = pdf.internal.pageSize.height;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight, '', 'FAST');
            pdf.save('donghakang_resume.pdf');
        }).catch(err => console.log(err));
    }
    const getSkill = (level) => {
        if (level > 5) level = 5;
        const levelArray = [];
        for (let i = 0; i < level; i++) {
            levelArray.push('full-circle');
        }
        for (let i = 0; i < 5 - level; i++) {
            levelArray.push('Circle');
        }
        return (
            <div>
                {levelArray.map((l, i) => (
                    <Icon key={i} icon={l} style={{ marginRight: 5 }} />
                ))}
            </div>
        )
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '30px 0px'}}>
            <div style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
                <Button type='button' rightIcon='download' className='resumeDownload' intent={Intent.PRIMARY} onClick={downloadPdf}>
                    <span style={{ fontSize: 20, marginRight: 5 }}>Download my resume</span>
                </Button>
            </div>
            <div className='resumeContainer' ref={resumeToPrint} style={{ zoom: zoomFactor }}>
                <div className='resumeHeader'>
                    <div style={{ fontSize: 45 }}>Dongha Kang</div>
                    <div>JavaScript Developer</div>
                </div>
                <div className='resumeBody'>
                    <div className='resumeMain'>
                        <div className='resumeIntro'>
                            Well-qualified software developer familiar with JavaScript frameworks and libraries. Detail-oriented and active learner who always keep automation in mind. Collaborative team player with excellent technical abilities offering 6 years of web development experience.
                        </div>
                        <div className='resumeWorkHistory'>
                            <div className='resumeSectionTitle'>Work History</div>
                            <hr />
                            <div className='resumeWorkHistoryBody'>
                                <div className='resumeWorkHistoryMonths'>Jun 2020 -<br />Now</div>
                                <div className='resumeWorkHistoryDetails'>
                                    <div className='resumeJobTitle'>Full-Stack Developer</div>
                                    <div>Iris Booth, Remote</div>
                                    <ul className='resumeJobUl'>
                                        <li className='resumeListItems'>
                                            Maintaining and troubleshooting existing codebase as well as adding new features to apps that were built using technologies including Node.js, React, Redux, JavaScript, TypeScript, and NW.js.
                                        </li>
                                        <li className='resumeListItems'>
                                            Developed a real-time remote controller app for kiosk using Node.js, React, AWS API Gateway, AWS Lambda and PostgreSQL.
                                        </li>
                                        <li className='resumeListItems'>
                                            Managed and maintained booths that are in remote locations using VPN and SSH
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='resumeAccomplishments'>
                            <div className='resumeSectionTitle'>Accomplishments</div>
                            <hr />
                            <div className='resumeAccomplishmentsBody'>
                                <div className='resumeAccomplishmentsDetails'>
                                    <div className='resumeAccomplishmentsTitle'>
                                        <Icon icon='star' style={{ marginRight: 5 }} />
                                        <Link passHref href='https://gageiboo.herokuapp.com'>
                                            <a className='resumeLink' target='_blank'>gageiboo</a>
                                        </Link>
                                    </div>
                                        <ul className='resumeAccomplishmentsUl'>
                                            <li className='resumeListItems'>
                                                An accounting app for my personal use
                                            </li>
                                            <li className='resumeListItems'>
                                                Utilized Next.js for both front and back-end in association with MongoDB
                                            </li>
                                            <li className='resumeListItems'>
                                                Visualized trends using both charts and spreadsheet views
                                            </li>
                                        </ul>
                                </div>
                                <div className='resumeAccomplishmentsDetails'>
                                    <div className='resumeAccomplishmentsTitle'>
                                        <Icon icon='star' style={{ marginRight: 5 }} />
                                        <Link passHref href='https://irisbooth.com/'>
                                            <a className='resumeLink' target='_blank'>Touchless App</a>
                                        </Link>
                                    </div>
                                        <ul className='resumeAccomplishmentsUl'>
                                            <li className='resumeListItems'>
                                                A remote controller app for kiosk
                                            </li>
                                            <li className='resumeListItems'>
                                                Utilized AWS API Gateway WebSocket API and Lambda in association with Node.js and React
                                            </li>
                                            <li className='resumeListItems'>
                                                Can be access by scanning a QR code on kiosk
                                            </li>
                                        </ul>
                                </div>
                            </div>
                        </div>
                        <div className='resumeEducation'>
                            <div className='resumeSectionTitle'>Education</div>
                            <hr />
                            <div className='resumeEducationBody'>
                                <div className='resumeEducationMonths'>Sep 2017 -<br />Apr 2020</div>
                                <div className='resumeEducationDetails'>
                                    <div className='resumeJobTitle'>Advanced Diploma: Computer Programmer/Analyst Program</div>
                                    <div>Conestoga College - Waterloo, ON</div>
                                    <ul className='resumeEducationUl'>
                                        <li className='resumeListItems'>
                                            Graduated with 3.93 GPA
                                        </li>
                                        <li className='resumeListItems'>
                                            Achieved the status of both Graduate with High Distinction and Dean&rsquo;s Honour List
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='resumeSide'>
                        <div className='resumeSideItem'>
                            <div className='resumeSectionTitle'>Contact</div>
                            <hr />
                            <div className='resumeSideItemTitle'>
                                <Icon icon='home' />
                                <span style={{ marginLeft: 5 }}>Address</span>
                            </div>
                            <div>251 Margaret Ave, Kitchener, ON, N2H 4J6</div>
                            <div className='resumeSideItemTitle'>
                                <Icon icon='phone' />
                                <span style={{ marginLeft: 5 }}>Phone</span>
                            </div>
                            <div>519-505-5699</div>
                            <div className='resumeSideItemTitle'>
                                <Icon icon='envelope' />
                                <span style={{ marginLeft: 5 }}>Email</span>
                            </div>
                            <div>cleardh@hotmail.com</div>
                            <div className='resumeSideItemTitle'>
                                <Image src={linkedin} width={16} height={16} />
                                <span style={{ marginLeft: 5 }}>LinkedIn</span>
                            </div>
                            <div>https://www.linkedin.com/in/donghakang</div>
                            <div className='resumeSideItemTitle'>
                                <Image src={github} width={16} height={16} />
                                <span style={{ marginLeft: 5 }}>GitHub</span>
                            </div>
                            <div>https://github.com/cleardh</div>
                            <div className='resumeSideItemTitle'>
                                <Icon icon='globe-network' />
                                <span style={{ marginLeft: 5 }}>Website</span>
                            </div>
                            <div>cleardh.github.io/portfolio</div>
                        </div>
                        <div className='resumeSideItem'>
                            <div className='resumeSectionTitle'>Skills</div>
                            <hr />
                            <div>Node.js</div>
                            {getSkill(5)}
                            <div>React/Redux</div>
                            {getSkill(5)}
                            <div>PostgreSQL</div>
                            {getSkill(5)}
                            <div>REST API</div>
                            {getSkill(5)}
                            <div>Web Socket</div>
                            {getSkill(5)}
                            <div>AWS</div>
                            {getSkill(5)}
                            <div>Linux</div>
                            {getSkill(5)}
                            <div>Raspberry Pi</div>
                            {getSkill(5)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume