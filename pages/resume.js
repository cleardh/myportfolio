import { useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import linkedin from '../assets/images/linkedin.png';
import github from '../assets/images/github.png';
import { Icon } from '@blueprintjs/core';
import styles from '../styles/Resume.module.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Navbar from '../components/Navbar';
import Neu from '../components/Neumorphism';

export default function Home() {
    const resumeToPrint = useRef();
    const convertToPdf = () => {
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
        <div className={styles.container}>
        <Head>
            <title>Dongha Kang</title>
            <meta name="description" content="Dongha Kang Portfolio" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            <Navbar />
            <Neu type='concave' style={{ marginTop: 40, padding: '5px 40px' }}>
                <div className={styles.resumeContainer} ref={resumeToPrint}>
                    <div className={styles.resumeHeader} onClick={convertToPdf}>
                        <div style={{ fontSize: 45 }}>Dongha Kang</div>
                        <div>JavaScript Developer</div>
                    </div>
                    <div className={styles.resumeBody}>
                        <div className={styles.resumeMain}>
                            <div className={styles.resumeIntro}>
                                Well-qualified software developer familiar with JavaScript frameworks and libraries. Detail-oriented and active learner who always keep automation in mind. Collaborative team player with excellent technical abilities offering 6 years of web development experience.
                            </div>
                            <div className={styles.resumeWorkHistory}>
                                <div className={styles.resumeSectionTitle}>Work History</div>
                                <hr />
                                <div className={styles.resumeWorkHistoryBody}>
                                    <div className={styles.resumeWorkHistoryMonths}>Jun 2020 -<br />Now</div>
                                    <div className={styles.resumeWorkHistoryDetails}>
                                        <div className={styles.resumeJobTitle}>Full-Stack Developer</div>
                                        <div>Iris Booth, Remote</div>
                                        <ul className={styles.resumeJobUl}>
                                            <li className={styles.resumeListItems}>
                                                Maintaining and troubleshooting existing codebase as well as adding new features to apps that were built using technologies including Node.js, React, Redux, JavaScript, TypeScript, and NW.js.
                                            </li>
                                            <li className={styles.resumeListItems}>
                                                Developed a real-time remote controller app for kiosk using Node.js, React, AWS API Gateway, AWS Lambda and PostgreSQL.
                                            </li>
                                            <li className={styles.resumeListItems}>
                                                Managed and maintained booths that are in remote locations using VPN and SSH
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.resumeAccomplishments}>
                                <div className={styles.resumeSectionTitle}>Accomplishments</div>
                                <hr />
                                <div className={styles.resumeAccomplishmentsBody}>
                                    <div className={styles.resumeAccomplishmentsDetails}>
                                        <div className={styles.resumeAccomplishmentsTitle}>
                                            <Icon icon='star' style={{ marginRight: 5 }} />
                                            <Link passHref href='https://gageiboo.herokuapp.com'>
                                                <a className={styles.resumeLink} target='_blank'>gageiboo</a>
                                            </Link>
                                        </div>
                                            <ul className={styles.resumeAccomplishmentsUl}>
                                                <li className={styles.resumeListItems}>
                                                    An accounting app for my personal use
                                                </li>
                                                <li className={styles.resumeListItems}>
                                                    Utilized Next.js for both front and back-end in association with MongoDB
                                                </li>
                                                <li className={styles.resumeListItems}>
                                                    Visualized trends using both charts and spreadsheet views
                                                </li>
                                            </ul>
                                    </div>
                                    <div className={styles.resumeAccomplishmentsDetails}>
                                        <div className={styles.resumeAccomplishmentsTitle}>
                                            <Icon icon='star' style={{ marginRight: 5 }} />
                                            <Link passHref href='https://employee-time-off-tracker.herokuapp.com'>
                                                <a className={styles.resumeLink} target='_blank'>Employee Time-off Tracker</a>
                                            </Link>
                                        </div>
                                            <ul className={styles.resumeAccomplishmentsUl}>
                                                <li className={styles.resumeListItems}>
                                                    An HR software specialized in employee time-off management using MERN Stack
                                                </li>
                                                <li className={styles.resumeListItems}>
                                                    Led the team as the project manager/lead developer in an agile development environment
                                                </li>
                                                <li className={styles.resumeListItems}>
                                                    Implemented authentication using Google OAuth 2.0 as well as calendar events interactions with Google Calendar
                                                </li>
                                            </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.resumeEducation}>
                                <div className={styles.resumeSectionTitle}>Education</div>
                                <hr />
                                <div className={styles.resumeEducationBody}>
                                    <div className={styles.resumeEducationMonths}>Sep 2017 -<br />Apr 2020</div>
                                    <div className={styles.resumeEducationDetails}>
                                        <div className={styles.resumeJobTitle}>Advanced Diploma: Computer Programmer/Analyst Program</div>
                                        <div>Conestoga College - Waterloo, ON</div>
                                        <ul className={styles.resumeEducationUl}>
                                            <li className={styles.resumeListItems}>
                                                Graduated with 3.93 GPA
                                            </li>
                                            <li className={styles.resumeListItems}>
                                                Achieved the status of both Graduate with High Distinction and Dean&rsquo;s Honour List
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.resumeSide}>
                            <div className={styles.resumeSideItem}>
                                <div className={styles.resumeSectionTitle}>Contact</div>
                                <hr />
                                <div className={styles.resumeSideItemTitle}>
                                    <Icon icon='home' />
                                    <span style={{ marginLeft: 5 }}>Address</span>
                                </div>
                                <div>251 Margaret Ave, Kitchener, ON, N2H 4J6</div>
                                <div className={styles.resumeSideItemTitle}>
                                    <Icon icon='phone' />
                                    <span style={{ marginLeft: 5 }}>Phone</span>
                                </div>
                                <div>519-505-5699</div>
                                <div className={styles.resumeSideItemTitle}>
                                    <Icon icon='envelope' />
                                    <span style={{ marginLeft: 5 }}>Email</span>
                                </div>
                                <div>cleardh@hotmail.com</div>
                                <div className={styles.resumeSideItemTitle}>
                                    <Image src={linkedin} width={16} height={16} style={{ zIndex: -1 }} />
                                    <span style={{ marginLeft: 5 }}>LinkedIn</span>
                                </div>
                                <div>https://www.linkedin.com/in/donghakang</div>
                                <div className={styles.resumeSideItemTitle}>
                                    <Image src={github} width={16} height={16} style={{ zIndex: -1 }} />
                                    <span style={{ marginLeft: 5 }}>GitHub</span>
                                </div>
                                <div>https://github.com/cleardh</div>
                                <div className={styles.resumeSideItemTitle}>
                                    <Icon icon='globe-network' />
                                    <span style={{ marginLeft: 5 }}>Website</span>
                                </div>
                                <div>cleardh.github.io/portfolio</div>
                            </div>
                            <div className={styles.resumeSideItem}>
                                <div className={styles.resumeSectionTitle}>Skills</div>
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
            </Neu>
        </main>

        <footer className={styles.footer}>
        </footer>
        </div>
    )
}
