import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from './components/Avatar';
import StartBtn from './components/StartBtn';
// import StartSlow from './components/StartSlow';
// import data from './data';
import GeneratePDF from './components/generatepdf';


const config = {
    botName: "Kudumbini",
    initialMessages: [createChatBotMessage(`Hi I'm Kudumbini. The Chatbot that helps you to create minutes.`, {
        widget: "startBtn"
    })],
    customComponents: {
        botAvatar: (props) => <Avatar {...props} />,
    },
    state: {
        checker: null,
        userData: {
            MeetingNumber: 0,
            MeetingDate: "",
            MeetingTime: "",
            MeetingLocation: "",
            MeetingAgendas:"",
            MeetingDecisions:"",
            MeetingSpecialNotes:"",
            NextMeetingDate:"",
            NextMeetingTime:"",
            NextMeetingLocation:""
        }
    },
    widgets: [
        {
            widgetName: "startBtn",
            widgetFunc: (props) => <StartBtn {...props} />,
        },
        // {
        //     widgetName: "startSlow",
        //     widgetFunc: (props) => <StartSlow {...props} />,
        // },
        {
            widgetName: "GeneratePDF",
            widgetFunc: (props) => <GeneratePDF {...props} />,
        },
    ]
};

export default config;
