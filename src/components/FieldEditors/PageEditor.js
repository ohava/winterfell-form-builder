import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, FormGroup } from 'react-bootstrap';
import { editFormTitle } from '../../actions/winterfellFormBuilderActions';
import FieldGroup from '../UI/FieldGroup';

class PageEditor extends Component {
  static propTypes = {
    editFormTitle: PropTypes.func.isRequired,
    panelHeader: PropTypes.string,
    panelText: PropTypes.string,
  }

  static defaultProps = {
    currentPanelIndex: 0,
    panelHeader: '',
    panelText: '',
  }
  constructor(props) {
    super(props);
    const { panelHeader, panelText } = props;

    this.state = {
      panelHeader,
      panelText,
    };

    this.onChange = this.onChange.bind(this);
    this.onFormUpdate = this.onFormUpdate.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);
    this.state = {
      panelHeader: nextProps.panelHeader,
      panelText: nextProps.panelText,
    };
  }
  onChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
    this.props.editFormTitle(event.target.value);
  }

  onFormUpdate(e) {
    e.preventDefault();
    this.props.editFormTitle(this.state.formTitle);
  }

  render() {
    return (
      <Row>
        <Col xs={12}>
          <form>
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
                placeholder="low"
                onChange={this.onChange}
                value={this.state.panelText}
              />
            </FormGroup>
          </form>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log('ownProps:', ownProps);
  console.log('panelHeader:', state.getIn(['form', 'schema', 'questionPanels',
    ownProps.currentPanelIndex, 'panelHeader']));

  return {
    panelHeader: state.getIn(['form', 'schema', 'questionPanels',
      ownProps.currentPanelIndex, 'panelHeader']),
    panelText: state.getIn(['form', 'schema', 'questionPanels',
      ownProps.currentPanelIndex, 'panelText']),
  };
}
export default connect(mapStateToProps, { editFormTitle })(PageEditor);

