import React from 'react';
import PropTypes from 'prop-types';

export default React.createClass({
  propTypes: {
    data: PropTypes.object,
    onClassify: PropTypes.func.isRequired,
  },

  getDefaultProps() {
    return { text: '' };
  },

  getInitialState() {
    return { text: '' };
  },

  /**
   * When pressing the Ask button
   */
  onSubmit() {
    this.props.onClassify(this.state.text);
  },

  /**
   * On sample question click
   */
  onSampleQuestionClick(e) {
    this.setState({ text: e.target.text });
    this.props.onClassify(e.target.text);
  },

  /**
   * During changes to the text input
   */
  handleInputChange(e) {
    this.setState({ text: e.target.value });
  },

  /**
   * On Input text key press
   */
  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.onClassify(this.state.text);
    }
  },
  render() {
    return (
      <div>
        <h2 className="base--h2">Ask a given text is question or not</h2>
        <p className="base--p" >Watch the Natural Language Classifier
          categorize your text as question or not. In this demo, the classifier is
          trained to determine whether the text is a <code className="base--code">question</code> or
          &nbsp;<code className="base--code">non question</code>.
          The output includes
          the top classification and a confidence score.
        </p>
        <div className="question-input">
          <div className="question-input--input-container">
            <input
              type=""
              autoFocus
              value={this.state.text}
              onChange={this.handleInputChange}
              onKeyPress={this.handleKeyPress}
              id="question"
              placeholder="Enter text to find out it is a question or not or Try a sample text below"
              className="base--input question-input--input"
              required="true"
            />
          </div>
          <div className="question-input--button-container">
            <button
              disabled={this.state.text.trim().length === 0}
              onClick={this.onSubmit}
              className="base--button question-input--submit-button"
            >
              Ask
            </button>
          </div>
        </div>
        <h3 className="base--h3">Sample text</h3>

        <div className="sample-questions">
          <div className="sample-questions--left">
            <ul className="base--ul">
              <li className="base--li">
                <a
                  className="base--a"
                  onClick={this.onSampleQuestionClick}
                >
                  How are you?
                </a>
              </li>
              <li className="base--li">
                <a
                  className="base--a"
                  onClick={this.onSampleQuestionClick}
                >
                  Are you OK?
                </a>
              </li>
              <li className="base--li">
                <a
                  className="base--a"
                  onClick={this.onSampleQuestionClick}
                >
                  I'm fine
                </a>
              </li>
              <li className="base--li">
                <a
                  className="base--a"
                  onClick={this.onSampleQuestionClick}
                >
                  What is DPA
                </a>
              </li>
              <li className="base--li">
                <a
                  className="base--a"
                  onClick={this.onSampleQuestionClick}
                >
                  Data Privacay Advocate
                </a>
              </li>
            </ul>
          </div>
          <div className="sample-questions--right">
            <p className="base--p">The classifier often scores well with terms that it hasn&apos;t
              been trained on. In the sample text, the words &quot;OK,&quot; or
              &quot;DPA,&quot; are not part of the&nbsp;
              <a
                className="base--a"
                href="https://github.com/bhuva123/natural-language-classifier-nodejs/blob/master/training/innovation_data_train.csv"
                target="_blank"
                rel="noopener noreferrer"
              >training data
              </a>, yet the classifier correctly handles questions about them.
            </p>
          </div>
        </div>
      </div>
    );
  },
});
