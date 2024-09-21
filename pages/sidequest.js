import { useState } from 'react';
import fs from 'fs';
import path from 'path';
import styled from 'styled-components';

// Styled components for the card layout
const SidequestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const SidequestCard = styled.div`
  background-color: ${props => props.completed ? "#d4edda" : "#f8d7da"};
  border: 2px solid ${props => props.completed ? "#28a745" : "#dc3545"};
  border-radius: 10px;
  padding: 1.5rem;
  width: 300px;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const SidequestTitle = styled.h3`
  color: ${props => props.completed ? "#155724" : "#721c24"};
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const SidequestDescription = styled.p`
  color: ${props => props.completed ? "#155724" : "#721c24"};
  margin-bottom: 1rem;
`;

const SidequestCheckbox = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ProgressBar = styled.div`
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 1rem;
`;

const Progress = styled.div`
  width: ${props => props.completed ? "100%" : "0%"};
  height: 10px;
  background-color: #28a745;
  transition: width 0.5s ease-in-out;
`;

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'sidequests', 'sidequests.json');
  const sidequestsData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  return {
    props: {
      sidequestsData,
    },
  };
}

const Sidequests = ({ sidequestsData }) => {
  const [sidequests, setSidequests] = useState(sidequestsData);

  const handleToggle = (id) => {
    const updatedSidequests = sidequests.map((quest) => {
      if (quest.id === id) {
        return { ...quest, completed: !quest.completed };
      }
      return quest;
    });

    setSidequests(updatedSidequests);
  };

  return (
    <SidequestWrapper>
      <h1>Your Sidequests</h1>
      {sidequests.map((quest) => (
        <SidequestCard key={quest.id} completed={quest.completed}>
          <SidequestTitle completed={quest.completed}>
            {quest.title}
          </SidequestTitle>
          <SidequestDescription>
            {quest.completed ? "Completed!" : "Not yet completed."}
          </SidequestDescription>
          <SidequestCheckbox>
            <input
              type="checkbox"
              checked={quest.completed}
              onChange={() => handleToggle(quest.id)}
            />
            <span style={{ marginLeft: '10px' }}>{quest.completed ? "Mark as incomplete" : "Mark as complete"}</span>
          </SidequestCheckbox>
          <ProgressBar>
            <Progress completed={quest.completed} />
          </ProgressBar>
        </SidequestCard>
      ))}
    </SidequestWrapper>
  );
};

export default Sidequests;
