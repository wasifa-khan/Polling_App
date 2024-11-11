
import React, { useEffect, useState } from 'react';
import api from '../api';
import socket from '../socket';
import { useParams } from 'react-router-dom';

function PollDetails() {
  const { id } = useParams();
  const [poll, setPoll] = useState(null);

  useEffect(() => {
    const fetchPoll = async () => {
      const { data } = await api.get(`/polls/${id}`);
      setPoll(data);
    };
    fetchPoll();

    socket.on('updatePoll', (updatedPollId) => {
      if (updatedPollId === id) fetchPoll(); // Fetch updated poll data
    });

    return () => socket.off('updatePoll');
  }, [id]);

  const handleVote = async (optionIndex) => {
    await api.post(`/polls/${id}/vote`, { optionIndex });
    socket.emit('vote', id); // Emit real-time vote update
  };

  return poll ? (
    <div>
      <h2>{poll.question}</h2>
      <img src={poll.image} alt="Poll" />
      {poll.options.map((option, index) => (
        <button key={index} onClick={() => handleVote(index)}>
          {option.optionText} ({option.votes} votes)
        </button>
      ))}
    </div>
  ) : (
    <p>Loading poll...</p>
  );
}

export default PollDetails;
