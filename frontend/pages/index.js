import { Typography, Button, Grid, Box } from '@mui/material';

export default function Home() {
  return (
      <Box textAlign="center" mt={4}>
        <Typography variant="h3" gutterBottom>
          Welcome to My App
        </Typography>
        <Typography variant="body1" gutterBottom>
          Explore the Compiler and Video Chat functionalities.
        </Typography>

        <Grid container spacing={2} justifyContent="center" mt={4}>
          <Grid item>
            <Button variant="contained" color="primary" href="/compiler">
              Go to Compiler
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary" href="/video-chat">
              Start Video Chat
            </Button>
          </Grid>
        </Grid>
      </Box>
  );
}
