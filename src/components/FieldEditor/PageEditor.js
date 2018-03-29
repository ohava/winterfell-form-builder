import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';
import { fromJS } from 'immutable';

import { editPageId, editPageHeader, editPageText, changeCurrentEditingField, updateErrorMessage, clearErrorMessage } from '../../actions/winterfellFormBuilderActions';
import { AddQuestionSetButton } from '../FormMenu';
import FieldGroup from '../InputTypes/FieldGroup';

class PageEditor extends PureComponent {
  static propTypes = {
    editPageId: PropTypes.func.isRequired,
    editPageHeader: PropTypes.func.isRequired,
    editPageText: PropTypes.func.isRequired,
    updateErrorMessage: PropTypes.func.isRequired,
    changeCurrentEditingField: PropTypes.func.isRequired,
    panelId: PropTypes.string,
    panelHeader: PropTypes.string,
    panelText: PropTypes.string,
    currentQuestionSets: PropTypes.object,
    questionSets: PropTypes.object,
    currentQuestionPanelIndex: PropTypes.number.isRequired,
    formPanels: PropTypes.object.isRequired,
  }

  static defaultProps = {
    currentQuestionPanelIndex: 0,
    panelId: '',
    panelHeader: '',
    panelText: '',
    questionSets: fromJS({}),
    currentQuestionSets: fromJS({}),
    formPanels: fromJS({}),
  }
  constructor(props) {
    super(props);
    const { panelId, panelHeader, panelText } = props;

    this.state = {
      panelId,
      panelHeader,
      panelText,
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onUpdatePageId = this.onUpdatePageId.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.state = {
      panelId: nextProps.panelId,
      panelHeader: nextProps.panelHeader,
      panelText: nextProps.panelText,
    };
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    switch (event.target.name) {
      case 'panelHeader': this.props.editPageHeader(this.props.currentQuestionPanelIndex, event.target.value); break;
      case 'panelText': this.props.editPageText(this.props.currentQuestionPanelIndex, event.target.value); break;
      default: break;
    }
  }

  onClick(questionSetId) {
    const questionSetIndex = this.props.questionSets.findIndex(questionSet => questionSet.get('questionSetId') === questionSetId);
    this.props.changeCurrentEditingField('questionSet', questionSetIndex);
  }

  onUpdatePageId() {
    const { panelId } = this.props;
    const formPanelIndex = this.props.formPanels.findIndex(formPanel => formPanel.get('panelId') === this.state.panelId);
    if (formPanelIndex === -1) {
      this.props.editPageId(this.props.currentQuestionPanelIndex, this.state.panelId);
    } else {
      this.props.updateErrorMessage('Page ID already exists.  No update performed.');
      this.setState({ panelId });
    }
  }

  render() {
    const questionSetsArray = this.props.currentQuestionSets.toJS();
    return (
      <form>
        <FormGroup>
          <label htmlFor="panelId">
              Page ID
          </label>
          <InputGroup>
            <FormControl
              id="panelId"
              name="panelId"
              onChange={this.onChange}
              placeholder={this.props.panelId}
              value={this.state.panelId}
            />
            <InputGroup.Button>
              <Button
                onClick={this.onUpdatePageId}
                className="btn btn-primary"
                title="Click to update page title"
              >save
              </Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <FieldGroup
            id="panelHeader"
            name="panelHeader"
            label="Page Header"
            onChange={this.onChange}
            placeholder={this.props.panelHeader}
            value={this.state.panelHeader}
          />
        </FormGroup>
        <FormGroup>
          <FieldGroup
            id="panelText"
            name="panelText"
            label="Page Text"
            placeholder={this.props.panelText}
            onChange={this.onChange}
            value={this.state.panelText}
          />
        </FormGroup>
        <FormGroup>
          <AddQuestionSetButton />
        </FormGroup>
        { questionSetsArray && questionSetsArray.length > 0 &&
        <FormGroup>
          <label htmlFor="questionSetList">Question Sets</label>
          <div id="questionSetList">
            { questionSetsArray.map((questionSet, index) => (
              <Button
                key={`questionSet-${index}`}
                bsStyle="link"
                onClick={() => this.onClick(questionSet.questionSetId)}
              >{questionSet.questionSetId}
              </Button>
            ))
            }
          </div>
        </FormGroup>
        }
      </form>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    panelId: state.getIn(['form', 'schema', 'questionPanels',
      ownProps.currentQuestionPanelIndex, 'panelId']),
    panelHeader: state.getIn(['form', 'schema', 'questionPanels',
      ownProps.currentQuestionPanelIndex, 'panelHeader']),
    panelText: state.getIn(['form', 'schema', 'questionPanels',
      ownProps.currentQuestionPanelIndex, 'panelText']),
    currentQuestionSets: state.getIn(['form', 'schema', 'questionPanels',
      ownProps.currentQuestionPanelIndex, 'questionSets']),
    questionSets: state.getIn(['form', 'schema', 'questionSets']),
    currentQuestionPanelIndex: state.getIn(['form', 'currentQuestionPanelIndex']),
    formPanels: state.getIn(['form', 'schema', 'formPanels']),
  };
}

export default connect(mapStateToProps, {
  editPageId,
  editPageHeader,
  editPageText,
  changeCurrentEditingField,
  updateErrorMessage,
  clearErrorMessage,
})(PageEditor);

