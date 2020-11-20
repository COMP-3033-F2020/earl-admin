import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { createEarl } from '../../api';

const EarlForm = () => {
  const [target, setTarget] = useState('');
  const [message, setMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (target !== '') {
      createEarl(target).then(earl => {
        setMessage(`Created EARL for ${ target }`);
        setTarget('');
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      });
    }
  }

  const handleTargetChange = (e) => {
    setTarget(e.target.value);
  }

  return (
    <div>
      { message ? <p>{ message }</p> : null }
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="targetUrl">
          <Form.Label>Target URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="https://example.com"
            value={ target }
            onChange={handleTargetChange}
          />
          <Form.Text>
            Description of the field
          </Form.Text>
        </Form.Group>

        <Button type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default EarlForm;