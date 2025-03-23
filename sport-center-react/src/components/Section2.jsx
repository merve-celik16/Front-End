import React, { useState } from 'react';

const ClassesSection = () => {
    // Hangi içeriğin gösterileceğini tutacak state
    const [activeContent, setActiveContent] = useState('yoga'); // Varsayılan içerik 'yoga'

    const showContent = (contentId) => {
        setActiveContent(contentId);
    };

    return (
        <section id="our-classes">
            <div className="polygon" /> {/* For Polygon View */}
            <div className="section-title">
                <h2>OUR CLASSES</h2>
                <hr className="line" />
                <p>
                    Lorem ipsum is not simply random text. It has roots in a piece of
                    classical at Hampden-Sydney College.
                </p>
            </div>
            <div className="classes-buttons">
                <a href="#yoga" onClick={() => showContent('yoga')}>
                    Yoga
                </a>
                <a href="#group" onClick={() => showContent('group')}>
                    Group
                </a>
                <a href="#solo" onClick={() => showContent('solo')}>
                    Solo
                </a>
                <a href="#stretching" onClick={() => showContent('stretching')}>
                    Stretching
                </a>
            </div>
            <div className="classes">
                <div id="yoga" className="content-section" style={{ display: activeContent === 'yoga' ? 'flex' : 'none' }}>
                    <div className="left-column">
                        <h2>Why are your Yoga?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                        <h2>When comes Yoga Your Time.</h2>
                        <p>Saturday-Sunday: 8:00am - 10:00am</p>
                        <p>Monday-Tuesday: 10:00am - 12:00pm</p>
                        <p>Wednesday-Friday: 3:00pm - 6:00pm</p>
                    </div>
                    <div className="right-column">
                        <img src="images/yoga.jpg" alt="Yoga" />
                    </div>
                </div>
                <div id="group" className="content-section" style={{ display: activeContent === 'group' ? 'flex' : 'none' }}>
                    <div className="left-column">
                        <h2>Why are your Group?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                        <h2>When comes Group Your Time.</h2>
                        <p>Saturday-Sunday: 10:00am - 12:00am</p>
                        <p>Monday-Tuesday: 12:00am - 14:00pm</p>
                        <p>Wednesday-Friday: 5:00pm - 7:00pm</p>
                    </div>
                    <div className="right-column">
                        <img src="images/group.webp" alt="Group" />
                    </div>
                </div>
                <div id="solo" className="content-section" style={{ display: activeContent === 'solo' ? 'flex' : 'none' }}>
                    <div className="left-column">
                        <h2>Why are your Solo?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                        <h2>When comes Solo Your Time.</h2>
                        <p>Saturday-Sunday: 12:00am - 14:00pm</p>
                        <p>Monday-Tuesday: 14:00pm - 16:00pm</p>
                        <p>Wednesday-Friday: 7:00pm - 9:00pm</p>
                    </div>
                    <div className="right-column">
                        <img src="images/solo.jpg" alt="Solo" />
                    </div>
                </div>
                <div id="stretching" className="content-section" style={{ display: activeContent === 'stretching' ? 'flex' : 'none' }}>
                    <div className="left-column">
                        <h2>Why are your Stretching?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                        <h2>When comes Stretching Your Time.</h2>
                        <p>Saturday-Sunday: 14:00pm - 16:00pm</p>
                        <p>Monday-Tuesday: 16:00pm - 18:00pm</p>
                        <p>Wednesday-Friday: 9:00pm - 11:00pm</p>
                    </div>
                    <div className="right-column">
                        <img src="images/stret.webp" alt="Stretching" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClassesSection;