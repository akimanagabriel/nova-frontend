import React from 'react'

function InfoBar() {
  const updates = [
    {
      id: 1,
      title: "About us",
      content: `Explain why someone should contact your business. Describe how your business can help solve the visitors' problems.Include an email and phone number so visitors can get in touch with you on their first attempt.Include a short form using fields that'll help your business understand who's contacting them.`,
    },
    {
      id: 2,
      title: "Premises",
      content: `Explain why someone should contact your business. Describe how your business can help solve the visitors' problems.Include an email and phone number so visitors can get in touch with you on their first attempt.Include a short form using fields that'll help your business understand who's contacting them.`,
    },
    {
      id: 3,
      title: "Development history",
      content: `Explain why someone should contact your business. Describe how your business can help solve the visitors' problems.Include an email and phone number so visitors can get in touch with you on their first attempt.Include a short form using fields that'll help your business understand who's contacting them.`,
    },
  ];

  return (
    <>
      {updates.map((info) => (
        <div key={info.id} className="my-3">
          <h1 className="text-sky-800 text-2xl font-bold">{info.title}</h1>
          <p>{info.content}</p>
        </div>
      ))}
    </>
  );
}

export default InfoBar
