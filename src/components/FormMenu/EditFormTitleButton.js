import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Modal, FormGroup } from 'react-bootstrap';
import { editFormTitle } from '../../actions/winterfellFormBuilderActions';
import FieldGroup from '../InputTypes/FieldGroup';


class EditFormTitleButton extends Component {
  static propTypes = {
    editFormTitle: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      formTitle: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onFormUpdate = this.onFormUpdate.bind(this);
  }

  onChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  onClose(e) {
    e.preventDefault();
    this.setState({ showModal: true });
  }

  onFormUpdate(e) {
    e.preventDefault();
    this.props.editFormTitle(this.state.formTitle);
    this.setState({ showModal: false });
  }

  render() {
    const { title } = this.props;

    return (
      <Button
        className="btn btn-block btn-primary"
        onClick={() => {
          this.setState({ showModal: true });
        }}
      >edit filename
        <Modal show={this.state.showModal}>
          <Modal.Header>
            <Modal.Title>Edit form filename</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup>
                <FieldGroup
                  id="formTitle"
                  name="formTitle"
                  label="Enter title of the form"
                  onChange={this.onChange}
                  placeholder={title}
                  value={this.state.formTitle}
                />
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              bsStyle="danger"
              onClick={() => { this.setState({ showModal: false }); }}
            >Cancel</Button>
            <Button
              bsStyle="primary"
              onClick={this.onFormUpdate}
            >Save changes</Button>
          </Modal.Footer>
        </Modal>
      </Button>
    );
  }
}

function mapStateToProps(state) {
  return {
    title: state.getIn(['form', 'title']),
  };
}
export default connect(mapStateToProps, { editFormTitle })(EditFormTitleButton);

