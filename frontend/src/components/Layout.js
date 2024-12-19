import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <>
      {/* Navigation Bar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          <Link href="/" passHref>
            <Button 
              color="inherit" 
              sx={{ color: 'white', '&:hover': { backgroundColor: '#1976d2', borderRadius: 1 } }}
            >
              Home
            </Button>
          </Link>
          <Link href="/compiler" passHref>
            <Button 
              color="inherit" 
              sx={{ color: 'white', '&:hover': { backgroundColor: '#1976d2', borderRadius: 1 } }}
            >
              Compiler
            </Button>
          </Link>
          <Link href="/video-chat" passHref>
            <Button 
              color="inherit" 
              sx={{ color: 'white', '&:hover': { backgroundColor: '#1976d2', borderRadius: 1 } }}
            >
              Video Chat
            </Button>
          </Link>
        </Toolbar>
      </AppBar>

      {/* Page Content */}
      <Container>
        <Box mt={4}>{children}</Box>
      </Container>
    </>
  );
};

export default Layout;
