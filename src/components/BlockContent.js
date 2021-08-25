import React from 'react';
import BaseBlockContent from '@sanity/block-content-to-react';
import '../styles/typography.css';

const serializers = {
  types: {
    block (props) {
      switch (props.node.style) {
        case 'h1':
          return <h1 className="headerOne">{props.children}</h1>

        case 'h2':
          return <h2 className="headerTwo">{props.children}</h2>

        case 'h3':
          return <h3 className="headerThree">{props.children}</h3>

        case 'h4':
          return <h4 className="headerFour">{props.children}</h4>

        case 'blockquote':
          return <blockquote className="blockQuote">{props.children}</blockquote>

        default:
          return <p className="textBody">{props.children}</p>
      }
    }
  }
}

const BlockContent = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />

export default BlockContent;