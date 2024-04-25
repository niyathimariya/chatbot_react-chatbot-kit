
import React from 'react';

const MessageParser = ({ children, actions }) => {
    // console.log(children.props.state)
    const { checker } = children.props.state;
    const parse = (message) => {
        if (checker === "m-date") {
            children.props.state.userData.MeetingNumber = message;
            actions.MeetingDate();
            
        }
        if (checker === "m-time") {
            children.props.state.userData.MeetingDate = message;
            actions.MeetingTime();
            
        }
        if (checker === "m-location") {
            children.props.state.userData.MeetingTime = message;
            actions.MeetingLocation();
            
        }
        if (checker === "m-agendas") {
            children.props.state.userData.MeetingLocation = message;
            actions.MeetingAgendas();
            
        }
        if (checker === "m-decisions") {
            children.props.state.userData.MeetingAgendas= message;
            actions.MeetingDecisions();
            
        }
        if (checker === "m-specialnotes") {
            children.props.state.userData.MeetingDecisions = message;
            actions.MeetingSpecialNotes();
            
        }
        if (checker === "m-ndate") {
            children.props.state.userData.MeetingSpecialNotes = message;
            actions.NextMeetingDate();
            
        }
        if (checker === "m-ntime") {
            children.props.state.userData.NextMeetingDate = message;
            actions.NextMeetingTime();
            
        }
        if (checker === "m-nlocation") {
            children.props.state.userData.NextMeetingTime = message;
            actions.NextMeetingLocation();
            
        }
        if (checker === "generatepdf") {
            children.props.state.userData.NextMeetingLocation = message;
            actions.generatepdf();
            
        }
    }
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions,
                });
            })}
        </div>
    );
};

export default MessageParser;
