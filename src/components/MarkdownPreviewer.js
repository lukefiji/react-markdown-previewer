import React, { Component } from 'react';
import marked from 'marked';

import '../github-markdown.css';

class MarkdownPreviewer extends Component {
  render() {
    const markdownPreview = this.props.text;
    return (
      <div
        className="preview markdown-body"
        dangerouslySetInnerHTML={{
          __html: marked(markdownPreview,
          {sanitize: true})
        }}  
      />
    )
  }
}

export default MarkdownPreviewer;