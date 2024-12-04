import React from 'react';
import Tabs from '../../components/Tabs/tabs';

const App = () => {
  const tabs = [
    { id: 'tab1', label: 'Tab 1', content: <p>Anar</p> },
    { id: 'tab2', label: 'Tab 2', content: <p>Aliyev</p> },
  ];

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>React Tabs</h1>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default App;
