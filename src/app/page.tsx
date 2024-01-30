import Image from "next/image";
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Typography, Button, AppBar, Toolbar } from '@mui/material';

export default function Home() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Landing Page
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Typography variant="h2" align="center" gutterBottom>
          Welcome to My Landing Page
        </Typography>
        <Typography variant="h5" align="center" paragraph>
          This is a simple landing page built with Next.js and Material UI.
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <Image src="/landing-page.png" alt="Landing Page" width={500} height={300} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" color="primary" href="#about">
            Learn More
          </Button>
        </div>
      </Container>
      <Container maxWidth="md" id="about" style={{ marginTop: '2rem' }}>
        <Typography variant="h4" gutterBottom>
          About
        </Typography>
        <Typography variant="body1" paragraph>
          This landing page was built with Next.js and Material UI. It is a simple example of how to create a landing page with these technologies.
        </Typography>
        <Typography variant="body1" paragraph>
          Feel free to use this landing page as a starting point for your own projects!
        </Typography>
      </Container>
    </div>
  );
}
