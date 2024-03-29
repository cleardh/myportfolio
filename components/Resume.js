import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Button, Icon, Intent } from '@blueprintjs/core';
import linkedin from '../assets/images/linkedin.png';
import github from '../assets/images/github.png';
import Link from 'next/link';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const resumeWidth = 1000;
const Resume = () => {
    const resumeToPrint = useRef();
    const [zoomFactor, setZoomFactor] = useState('100%');
    useEffect(() => {
        resizeResume();
        window.addEventListener('resize', resizeResume);
        return () => {
            window.removeEventListener('resize', resizeResume);
        };
    }, []);
    const resizeResume = () => {
        let zoom;
        if (typeof window === 'undefined' || window.outerWidth > resumeWidth) zoom = '100%';
        else zoom = `${window.outerWidth / resumeWidth * 100}%`;
        setZoomFactor(zoom);
    }
    const downloadPdf = () => {
        html2canvas(resumeToPrint.current, { scale: 3 }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'pt', 'a4', true);
            const pdfWidth = pdf.internal.pageSize.width;
            const pdfHeight = pdf.internal.pageSize.height;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight, '', 'FAST');
            // pdf.save('donghakang_resume.pdf');
            pdf.output('dataurlnewwindow');
        }).catch(err => console.log(err));
    }
    const getSkill = (skill) => {
        return (
            <div style={{ marginBottom: 10 }}>
                <Icon icon='full-circle' size={12} style={{ marginRight: 5 }} />
                <span>{skill}</span>
            </div>
        );
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '30px 0px'}}>
            <div className='resume-download-container'>
                <Button type='button' rightIcon='download' className='resumeDownload' intent={Intent.NONE} onClick={downloadPdf}>
                    <span style={{ fontSize: 20, marginRight: 5, color: '#000' }}>Download my resume</span>
                </Button>
            </div>
            <div className='resumeContainer' ref={resumeToPrint} style={{ zoom: zoomFactor }}>
                <div className='resumeHeader'>
                    <div style={{ fontSize: 45 }}>Dongha Kang</div>
                    <div>Full-stack Developer</div>
                </div>
                <div className='resumeBody'>
                    <div className='resumeMain'>
                        <div className='resumeIntro'>
                            Well-qualified software developer, specializing in JavaScript programming language. 
                            Detail-oriented and active learner who always keeps automation in mind. 
                            Collaborative team player with excellent technical abilities offering 3 years of professional full-stack web development experience.
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
                                            Tech Stack: Node.js(Express), React, Redux, JavaScript, TypeScript, PostgreSQL, and AWS
                                        </li>
                                        <li className='resumeListItems'>
                                            Develop a real-time remote controller app for photo booths using Node.js(Express), React, AWS API Gateway, AWS Lambda and PostgreSQL
                                        </li>
                                        <li className='resumeListItems'>
                                            Create and maintain API
                                        </li>
                                        <li className='resumeListItems'>
                                            Manage CI/CD process using AWS CodeDeploy
                                        </li>
                                        <li className='resumeListItems'>
                                            Perform major version upgrades that include Node, Webpack, and React
                                        </li>
                                        <li className='resumeListItems'>
                                            Provides maintenance to booths in remote locations using VPN and SSH
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
                                        <Link passHref href='https://gageiboo.vercel.app'>
                                            <a className='resumeLink' target='_blank'>gageiboo</a>
                                        </Link>
                                    </div>
                                        <ul className='resumeAccomplishmentsUl'>
                                            <li className='resumeListItems'>
                                                An accounting app for personal use
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
                                                Can be access by scanning a QR code on photo booths
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
                                <Link passHref href='tel:519-505-5699'>
                                    <a>
                                        <Icon icon='phone' />
                                        <span style={{ marginLeft: 5 }}>Phone</span>
                                    </a>
                                </Link>
                            </div>
                            <div>519-505-5699</div>
                            <div className='resumeSideItemTitle'>
                                <Link passHref href='mailto:cleardh@hotmail.com'>
                                    <a>
                                        <Icon icon='envelope' />
                                        <span style={{ marginLeft: 5 }}>Email</span>
                                    </a>
                                </Link>
                            </div>
                            <div>cleardh@hotmail.com</div>
                            <div className='resumeSideItemTitle'>
                                <Link passHref href='https://www.linkedin.com/in/donghakang'>
                                    <a target='_blank'>
                                        <Image src={linkedin} width={16} height={16} />
                                        <span style={{ marginLeft: 5 }}>LinkedIn</span>
                                    </a>
                                </Link>
                            </div>
                            <div>https://www.linkedin.com/in/donghakang</div>
                            <div className='resumeSideItemTitle'>
                                <Link passHref href='https://github.com/cleardh'>
                                    <a target='_blank'>
                                        <Image src={github} width={16} height={16} />
                                        <span style={{ marginLeft: 5 }}>GitHub</span>
                                    </a>
                                </Link>
                            </div>
                            <div>https://github.com/cleardh</div>
                            <div className='resumeSideItemTitle'>
                                <Link passHref href='https://donghakang.com'>
                                    <a target='_blank'>
                                        <Icon icon='globe-network' />
                                        <span style={{ marginLeft: 5 }}>Website</span>
                                    </a>
                                </Link>
                            </div>
                            <div>https://donghakang.com</div>
                        </div>
                        <div className='resumeSideItem'>
                            <div className='resumeSectionTitle'>Skills</div>
                            <hr />
                            {getSkill('Node.js(Express.js)')}
                            {getSkill('React/Redux')}
                            {getSkill('WebPack')}
                            {getSkill('PostgreSQL')}
                            {getSkill('MongoDB')}
                            {getSkill('REST API')}
                            {getSkill('Web Socket')}
                            {getSkill('Linux')}
                            {getSkill('AWS EC2')}
                            {getSkill('AWS S3')}
                            {getSkill('AWS CloudWatch')}
                            {getSkill('AWS Lambda')}
                            {getSkill('AWS API Gateway')}
                            {getSkill('Docker')}
                        </div>
                        {/* <div className='resumeSideItem'>
                            <div className='resumeSectionTitle'>References</div>
                            <hr />
                            <div style={{ marginBottom: 5 }}>
                                <div>Name: JungSang Cho</div>
                                <div>Nickname: Jason Cho</div>
                                <div>Business Title: Senior Full-stack Software Engineer</div>
                                <div>Department: DIGITAL INITIATIVES</div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume