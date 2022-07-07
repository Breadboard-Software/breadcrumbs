// @mui
import { styled } from '@mui/material/styles'
import { Button, Typography, Container } from '@mui/material'
// components
import Page from '../components/Page'
import { MotionContainer, varBounce } from '../components/animate'
// assets
// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}))

// ----------------------------------------------------------------------

export default function Breadcrumbs() {

  return (
    <Page title="Login">
      <Container component={MotionContainer}>
        <ContentStyle>
          <Typography variant="h3" component="h1" paragraph>
            Login
          </Typography>
          <Typography gutterBottom>
            Click here to login to your Breadboard account
          </Typography>
          <Button onClick={() => alert("HELLO")} size="large" variant="contained">
            Login
          </Button>
        </ContentStyle>
      </Container>
    </Page>
  )
}
