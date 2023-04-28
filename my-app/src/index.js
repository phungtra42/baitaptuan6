import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
function Root() {
    return (
      <div>
      <h1>THÊM SỬA XÓA HTML + CSS + JS</h1>
      <tableCom></tableCom>
      <formCom></formCom>
    </div>
    );

} 
root.render(<Root />);
