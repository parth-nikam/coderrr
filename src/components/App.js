import React, { useState, useEffect } from 'react';
import Editor from './Editor';
import useLocalStorage from '../hooks/useLocalStorage';
import TrySampleButton from './TrySampleButton';
import '../index.css'; 

function App() {
  const [html, setHtml] = useLocalStorage('html', '');
  const [css, setCss] = useLocalStorage('css', '');
  const [js, setJs] = useLocalStorage('js', '');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  const clearEditors = () => {
    setHtml('');
    setCss('');
    setJs('');
  };

  return (
    <>
      <header className="header">
        <h1>Coderrr</h1>
        <p>The Live Code Editor of HTML CSS JS - Parth Nikam</p>
      </header>
      <div className="try-sample">
        <TrySampleButton loadSampleCode={(sampleHtml, sampleCss, sampleJs) => {
          setHtml(sampleHtml);
          setCss(sampleCss);
          setJs(sampleJs);
        }} />
        <button className="clear-button" onClick={clearEditors}>Clear Editors</button>
      </div>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
