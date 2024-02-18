// MembersPage.jsx

import React from 'react';

const Members = () => {
  const members = [
    'John Doe',
    'Jane Smith',
    'Alex Johnson',
    'Emily Brown',
    'Michael Davis',
    'Olivia Martinez',
    'William Lee',
  ];

  return (
    <div>
      <h2>Exclusive Members Club</h2>
      <p>Welcome to the Exclusive Members Club! Meet our distinguished members:</p>
      <ul>
        {members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
      <div>
        <h3>Exclusive News for Members</h3>
        <ul>
          <li>Breaking News: John Doe Receives Award for Excellence</li>
          <li>Interview with Jane Smith on the Future of Technology</li>
          <li>Alex Johnson's Insights on Global Economy Trends</li>
          <li>Emily Brown's Latest Research on Environmental Sustainability</li>
          <li>Michael Davis Unveils New Innovation in Science</li>
          <li>Olivia Martinez's Exclusive Travel Diary</li>
          <li>William Lee's Impactful Philanthropic Endeavors</li>
          {/* Add more news items as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Members;
