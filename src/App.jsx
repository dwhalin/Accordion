import data from './data';
import { useState } from 'react';
import Questions from './Questions';
import SingleQuestion from './SingleQuestion';

const App = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <Questions questions={questions} />
    </main>
  );
};
export default App;
