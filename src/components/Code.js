import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { paraisoDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Code = ({ node }) => {
  if (!node || !node.code ) { return null }
  const {language, code} = node
  return (
    <SyntaxHighlighter className="code-block" style={paraisoDark} language={language || 'text'}>
      {code}
    </SyntaxHighlighter>
  )
}

export default Code;