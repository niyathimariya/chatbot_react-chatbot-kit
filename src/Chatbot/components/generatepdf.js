import React, { useEffect } from 'react';
import jsPDF from 'jspdf';

export default function GeneratePdf(props) {
  useEffect(() => {cd
    generatePDF();
  }, []);

  const generatePDF = () => {
    const {
      MeetingNumber,
      MeetingTime,
      MeetingDay,
      MeetingLocation,
      MeetingAgendas,
      MeetingDecisions,
      MeetingSpecialNotes,
      NextMeetingDate,
      NextMeetingTime,
      NextMeetingLocation,
    } = props.state.userData.product || {};

    // Check if imageUrl exists
    const { imageUrl } = props.state.userData.product || {};

    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Define x and y position for the text
    let yPos = 10;

    // Add meeting details to the PDF
    doc.text(`Meeting Number: ${MeetingNumber}`, 10, yPos += 10);
    doc.text(`Meeting Time: ${MeetingTime}`, 10, yPos += 10);
    doc.text(`Meeting Day: ${MeetingDay}`, 10, yPos += 10);
    doc.text(`Meeting Location: ${MeetingLocation}`, 10, yPos += 10);
    doc.text(`Meeting Agendas: ${MeetingAgendas}`, 10, yPos += 10);
    doc.text(`Meeting Decisions: ${MeetingDecisions}`, 10, yPos += 10);
    doc.text(`Meeting Special Notes: ${MeetingSpecialNotes}`, 10, yPos += 10);
    doc.text(`Next Meeting Date: ${NextMeetingDate}`, 10, yPos += 10);
    doc.text(`Next Meeting Time: ${NextMeetingTime}`, 10, yPos += 10);
    doc.text(`Next Meeting Location: ${NextMeetingLocation}`, 10, yPos += 10);

    // Add image if exists
    if (imageUrl) {
      const img = new Image();
      img.src = imageUrl;
      doc.addImage(img, 'JPEG', 10, yPos += 10, 180, 120);
    }

    // Save the PDF
    doc.save('meeting_details.pdf');
  };

  return <div>Generating PDF...</div>;
}
