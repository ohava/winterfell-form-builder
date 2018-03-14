import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import { editQuestionId, editQuestion, editQuestionText, editQuestionPostText } from '../../actions/winterfellFormBuilderActions';
import FieldGroup from '../UI/FieldGroup';

class QuestionEditor extends Component {
  static propTypes = {
    editQuestionId: PropTypes.func.isRequired,
    editQuestion: PropTypes.func.isRequired,
    editQuestionText: PropTypes.func.isRequired,
    editQuestionPostText: PropTypes.func.isRequired,
    questionId: PropTypes.string,
    question: PropTypes.string,
    questionText: PropTypes.string,
    questionPostText: PropTypes.string,
    questionInputType: PropTypes.string,
    questionInputOptions: PropTypes.object,
    currentQuestionSetIndex: PropTypes.number.isRequired,
    currentQuestionIndex: PropTypes.number.isRequired,
  }

  static defaultProps = {
    questionId: '',
    question: '',
    questionText: '',
    questionPostText: '',
    questionInputType: '',
    questionInputOptions: [],
  }
  constructor(props) {
    super(props);
    const {
      questionId,
      question,
      questionText,
      questionPostText,
      questionInputType,
      questionInputOptions,
    } = props;

    this.state = {
      questionId,
      question,
      questionText,
      questionPostText,
      questionInputType,
      questionInputOptions,
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.state = {
      questionId: nextProps.questionId,
      question: nextProps.question,
      questionText: nextProps.questionText,
      questionPostText: nextProps.questionPostText,
    };
  }

  onChange(event) {
    const { name, value } = event.target;
    const { currentQuestionSetIndex, currentQuestionIndex } = this.props;
    this.setState({ [name]: value });
    switch (name) {
      case 'questionId':
        this.props.editQuestionId(currentQuestionSetIndex, currentQuestionIndex, value);
        break;
      case 'question':
        this.props.editQuestion(currentQuestionSetIndex, currentQuestionIndex, value);
        break;
      case 'questionText':
        this.props.editQuestionText(currentQuestionSetIndex, currentQuestionIndex, value);
        break;
      case 'questionPostText':
        this.props.editQuestionPostText(currentQuestionSetIndex, currentQuestionIndex, value);
        break;
      default:
    }
  }

  getQuestionOptions() {
    return (
      <FormGroup>
        <table>
          <tbody>
            <tr>
              <th>Options</th>
              <th>Values</th>
            </tr>
            { this.props.questionInputOptions &&
              this.props.questionInputOptions.toJS().map((option, ix) => (
                <tr key={`${option.text}-${ix}`}>
                  <td>
                    <FormControl
                      type="text"
                      value={option.text}
                    />
                  </td>
                  <td>
                    <FormControl
                      type="text"
                      value={option.value}
                    />
                  </td>
                  <td><Button className="btn-success">+</Button></td>
                  <td><Button className="btn-danger">-</Button></td>
                </tr>))
            }
          </tbody>
        </table>
      </FormGroup>
    );
  }

  render() {
    const {
      questionId,
      question,
      questionText,
      questionPostText,
      questionInputType,
      questionInputOptions,
    } = this.props;
    return (
      <form>
        <FormGroup>
          <FieldGroup
            id="questionId"
            name="questionId"
            label="Question ID"
            onChange={this.onChange}
            placeholder={questionId}
            value={this.state.questionId}
          />
        </FormGroup>
        <FormGroup>
          <FieldGroup
            id="question"
            name="question"
            label="Question"
            onChange={this.onChange}
            placeholder={question}
            value={this.state.question}
          />
        </FormGroup>
        <FormGroup>
          <FieldGroup
            id="questionText"
            name="questionText"
            label="Question Text"
            placeholder={questionText}
            onChange={this.onChange}
            value={this.state.questionText}
          />
        </FormGroup>
        <FormGroup>
          <FieldGroup
            id="questionPostText"
            name="questionPostText"
            label="Question Post Text"
            placeholder={questionPostText}
            onChange={this.onChange}
            value={this.state.questionPostText}
          />
        </FormGroup>
        {
          (questionInputType === 'checkboxOptionsInput' ||
          questionInputType === 'selectInput' ||
          questionInputType === 'radioOptionsInput') &&
          questionInputOptions &&
          this.getQuestionOptions()
        }
      </form>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    questionId: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex,
      'questions', ownProps.currentQuestionIndex, 'questionId']),
    question: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex,
      'questions', ownProps.currentQuestionIndex, 'question']),
    questionText: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex,
      'questions', ownProps.currentQuestionIndex, 'text']),
    questionPostText: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex,
      'questions', ownProps.currentQuestionIndex, 'postText']),
    questionInputType: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex,
      'questions', ownProps.currentQuestionIndex, 'input', 'type']),
    questionInputOptions: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex,
      'questions', ownProps.currentQuestionIndex, 'input', 'options']),
    currentQuestionSetIndex: ownProps.currentQuestionSetIndex,
    currentQuestionIndex: ownProps.currentQuestionIndex,
  };
}

export default connect(
  mapStateToProps,
  { editQuestionId, editQuestion, editQuestionText, editQuestionPostText })(QuestionEditor);

