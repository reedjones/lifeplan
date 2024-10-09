import React, { useState } from 'react';

const LifeCoachingQuestionnaire: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    selfDescription: '',
    todosAndGoals: '',
    typicalDay: '',
    lifeSatisfaction: '',
    fulfilledAreas: '',
    improvementAreas: '',
    holdingBack: '',
    coreValues: '',
    energizingActivities: '',
    unlimitedResources: '',
    passions: '',
    shortTermGoals: '',
    idealLife: '',
    unrealizedDream: '',
    legacy: '',
    obstacles: '',
    setbacks: '',
    challengeHandling: '',
    neededSkills: '',
    freeTime: '',
    timeConsumers: '',
    eliminateActivities: '',
    supporters: '',
    mentors: '',
    accountability: '',
    coachSupport: '',
    priorityFocus: '',
    goalImpact: '',
    thirtyDayFocus: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically send the data to a server or perform some action
    alert('Questionnaire submitted successfully!');
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">Life Coaching Questionnaire</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="selfDescription" className="block mb-1">Describe yourself</label>
          <textarea
            id="selfDescription"
            name="selfDescription"
            value={formData.selfDescription}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows={3}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="todosAndGoals" className="block mb-1">Describe your todos and goals (briefly)</label>
          <textarea
            id="todosAndGoals"
            name="todosAndGoals"
            value={formData.todosAndGoals}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows={3}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="typicalDay" className="block mb-1">What does a typical day in your life look like?</label>
          <textarea
            id="typicalDay"
            name="typicalDay"
            value={formData.typicalDay}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows={3}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="lifeSatisfaction" className="block mb-1">On a scale of 1-10, how satisfied are you with your current life?</label>
          <select
            id="lifeSatisfaction"
            name="lifeSatisfaction"
            value={formData.lifeSatisfaction}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>
        {/* Add more form fields for the remaining questions */}
        {/* ... */}
        <div>
          <label htmlFor="thirtyDayFocus" className="block mb-1">If you had to choose one thing to focus on for the next 30 days, what would it be?</label>
          <textarea
            id="thirtyDayFocus"
            name="thirtyDayFocus"
            value={formData.thirtyDayFocus}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows={3}
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Submit Questionnaire
        </button>
      </form>
    </div>
  );
};

export default LifeCoachingQuestionnaire;