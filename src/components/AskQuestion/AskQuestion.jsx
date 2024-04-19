import React from 'react';
import "./AskQuestion.scss";

const AskQuestion = ({openModal}) => {
    return (
        <div className='ask-question__container'>
            <div className='ask-question__profile--img'></div>
            <button className='ask-question__button' onClick={openModal}>Ask something...</button>
        </div>
    );
};

export default AskQuestion;