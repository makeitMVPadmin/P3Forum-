import React from 'react';
import { useGlobalContext } from '../../context';
import defaultUser from '../../assets/icons/defaultUser.svg'
import "./AskQuestion.scss";

const AskQuestion = ({openModal}) => {
    const { randomUser2 } = useGlobalContext()

    return (
        <div className='ask-question__container'>
            <div className='ask-question__profile--img'>
                <img className='ask-question__profile--img' src={randomUser2?.profilePhoto ? randomUser2?.profilePhoto : defaultUser} alt="Profile pic"/>
            </div>
            <button className='ask-question__button' onClick={openModal}>Ask something...</button>
        </div>
    );
};

export default AskQuestion;