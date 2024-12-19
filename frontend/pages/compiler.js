import { useState } from 'react';
import { gql } from '@apollo/client';
import client from '../src/apollo-client';  // Apollo client setup
import { TextField, Button, Container, Typography, Paper } from '@mui/material';

const EXECUTE_CODE_MUTATION = gql`
  mutation ExecuteCode($code: String!) {
    executeCode(code: $code) {
      output
      error
    }
  }
`;

export default function Compiler() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await client.mutate({
        mutation: EXECUTE_CODE_MUTATION,
        variables: { code },
      });
      if (data.executeCode.error) {
        setError(data.executeCode.error);
        setOutput('');
      } else {
        setError('');
        setOutput(data.executeCode.output);
      }
    } catch (err) {
      setError('An error occurred while executing the code.');
      setOutput('');
    }
  };

  return (
    <Container>
      <Paper sx={{ padding: 3, marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>Code Compiler</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Enter JavaScript Code"
            multiline
            rows={8}
            variant="outlined"
            fullWidth
            value={code}
            onChange={(e) => setCode(e.target.value)}
            margin="normal"
          />
          <Button
            style={{    color: 'black'}}
            variant="contained"
            color="secondary"
            type="submit"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Run Code
          </Button>
        </form>

        {output && (
          <div style={{ marginTop: 20 }}>
            <Typography variant="h6">Output:</Typography>
            <Paper sx={{ padding: 2, backgroundColor: '#f5f5f5' }}>
              <pre>{output}</pre>
            </Paper>
          </div>
        )}

        {error && (
          <div style={{ marginTop: 20, color: 'red' }}>
            <Typography variant="h6">Error:</Typography>
            <Paper sx={{ padding: 2, backgroundColor: '#f5f5f5' }}>
              <pre>{error}</pre>
            </Paper>
          </div>
        )}
      </Paper>
    </Container>
  );
}
