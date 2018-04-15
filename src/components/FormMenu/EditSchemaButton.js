import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Modal, FormGroup } from 'react-bootstrap';

import { updateForm } from '../../actions/winterfellFormBuilderActions';

class EditSchemaButton extends Component {
  static propTypes = {
    schema: PropTypes.object,
    updateForm: PropTypes.func.isRequired,
  };

  static defaultProps = {
    schema: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      schemaObject: null,
    };

    this.onChange = this.onChange.bind(this);
    this.onFormUpdate = this.onFormUpdate.bind(this);
  }

  onChange(e) {
    this.setState({ schema: JSON.parse(e.target.value) });
  }

  onFormUpdate(e) {
    e.preventDefault();
    this.props.updateForm(this.state.schema);
    this.setState({ showModal: false });
  }

  render() {
    const schemaObject = this.props.schema && this.props.schema.toJS();

    return (
      <Button
        className="btn btn-block btn-primary"
        onClick={() => {
          this.setState({
            schema: schemaObject,
            showModal: true,
          });
        }}
      >edit schema
        <Modal show={this.state.showModal}>
          <Modal.Header>
            <Modal.Title>Edit Schema</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup>
                <textarea
                  rows="30"
                  cols="78"
                  value={JSON.stringify(this.state.schema, undefined, 2)}
                  onChange={this.onChange}
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
    schema: state.getIn(['form', 'schema']),
  };
}
export default connect(mapStateToProps, { updateForm })(EditSchemaButton);
