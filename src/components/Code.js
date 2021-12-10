import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default ({ node }) => {
  if (!node || !node.code ) { return null }
  const {language, code} = node
  return (
    <SyntaxHighlighter className="code-block" style={atelierCaveDark} language={language || 'text'}>
      {code}
    </SyntaxHighlighter>
  )
};