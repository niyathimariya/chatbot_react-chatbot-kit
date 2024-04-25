import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const initialAction = () => {
        const message = createChatBotMessage('Meeting Number');
        updateState(message, "m-date")
    }

    const MeetingDate = () => {
        const message = createChatBotMessage("Meeting Date")
        updateState(message, "m-time")
    }
    const MeetingTime = () => {
        const message = createChatBotMessage("Meeting Time")
        updateState(message, "m-location")
    }
    const MeetingLocation = () => {
        const message = createChatBotMessage("Meeting Location")
        updateState(message,"m-agendas")

    }
    const MeetingAgendas= () => {
        const message = createChatBotMessage("Agendas")
        updateState(message,"m-decisions")
    }
    const MeetingDecisions = () => {
        const message = createChatBotMessage("Desicion taken")
        updateState(message,"m-specialnotes")
    }
    const MeetingSpecialNotes = () => {
        const message = createChatBotMessage("Any special notes")
        updateState(message,"m-ndate")
    }
    const NextMeetingDate = () => {
        const message = createChatBotMessage("Next Meeting Date")
        updateState(message,"m-ntime")
    }
    const NextMeetingTime = () => {
        const message = createChatBotMessage("Next Meeting Time")
        updateState(message,"m-nlocation")
    }
    const NextMeetingLocation = () => {
        const message = createChatBotMessage("Next Meeting Location")
        updateState(message,"generatepdf")
    }

    const generatepdf = (MeetingNumber, MeetingDate, MeetingTime, MeetingLocation, MeetingAgendas, MeetingDecisions, MeetingSpecialNotes, NextMeetingDate, NextMeetingTime, NextMeetingLocation) => {
        const message = createChatBotMessage(`Got it, ${MeetingNumber}! Based on your age ${MeetingTime} and preference for a ${MeetingDate} ride, I recommend the '${MeetingLocation}.' Enjoy the thrill!`, {
            widget: "GeneratePDF"
        });
        updateState(message);
    }

    // const updateState = (message, checker) => {
    //     setState((prev) => ({
    //         ...prev,
    //         messages: [...prev.messages, message],
    //         checker,
    //     }))
    // }
    // const updateState = (message, checker) => {
    //     console.log("Message:", message);
    //     setState((prev) => ({
    //         ...prev,
    //         messages: [...prev.messages, message],
    //         // userData: { ...prev.userData, name: prev.state.userInput } 
    //         checker,
    //     }))
    // }
    const updateState = (message, checker, userInputProperty, userInputValue) => {
        setState((prevState) => ({
          ...prevState,
          messages: [...prevState.messages, message],
          userData: {
            ...prevState.userData,
            [userInputProperty]: userInputValue,
          },
          checker,
        }));
        console.log("UserData:", userInputValue);
      };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        initialAction,
                        MeetingDate,
                        MeetingTime,
                        MeetingLocation,
                        MeetingAgendas,
                        MeetingDecisions,
                        MeetingSpecialNotes,
                        NextMeetingDate,
                        NextMeetingTime,
                        NextMeetingLocation,
                        generatepdf

                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;
