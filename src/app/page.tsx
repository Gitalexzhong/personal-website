import Image from 'next/image';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Box,
  Container,
  Typography,
  Button,
  AppBar,
  Toolbar,
} from '@mui/material';

export default function Home() {
  return (
    <div>
      <Container>
        <Box>Alex Zhong</Box>
      </Container>

      <Container>
        <Box>Education</Box>
      </Container>

      <Container>
        <Box>Projects</Box>
      </Container>

      <Container>
        <Box>Experience</Box>
      </Container>
      <Container>
        <Box>Contact me</Box>
      </Container>
    </div>
  );
}
