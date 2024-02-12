import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfig';
import firebase from 'firebase/app';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

function App() {
  const [values, setValues] = useState([]);
  const [date, setDate] = useState('');
  const [intensity, setIntensity] = useState(1);

  useEffect(() => {
    const unsubscribe = db.collection('workouts').onSnapshot(snapshot => {
      const workouts = snapshot.docs.map(doc => ({
        ...doc.data(),
        date: doc.data().date.toDate().toISOString().split('T')[0]
      }));
      setValues(workouts);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await db.collection('workouts').add({
      date: firebase.firestore.Timestamp.fromDate(new Date(date)),
      intensity: parseInt(intensity, 10)
    });

    // Reset form
    setDate('');
    setIntensity(1);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <label htmlFor="intensity">Intensity (1-10):</label>
        <input
          type="number"
          id="intensity"
          name="intensity"
          value={intensity}
          min="1"
          max="10"
          onChange={(e) => setIntensity(e.target.value)}
          required
        />

        <button type="submit">Add Workout</button>
      </form>

      <CalendarHeatmap
        startDate={new Date(new Date().getFullYear(), 0, 1)}
        endDate={new Date(new Date().getFullYear(), 11, 31)}
        values={values}
        classForValue={(value) => {
          if (!value) {
            return 'color-empty';
          }
          return `color-scale-${value.intensity}`;
        }}
      />
    </div>
  );
}

export default App;
