import React from 'react';
import { useEffect, useState } from "react";
import { addDoc } from "firebase/firestore";
// import { useGlobalContext } from ""../../context.jsx"; 

import "./AskQuestion.scss";

const AskQuestion = ({openModal}) => {
    // const { userList, questionsList, answersList, usersCollection, getUserList, questionsCollection, getQuestionsList  } = useGlobalContext();

    return (
        <div className='ask-question__container'>
            <div className='ask-question__profile--img'></div>
            <button className='ask-question__button' onClick={openModal}>Ask something...</button>
        </div>
    );
};

export default AskQuestion;