// @mui
import { styled } from '@mui/material/styles'
import { Button, Typography, Container, Accordion, AccordionSummary, Box, AccordionDetails, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material'
import BreakfastDiningIcon from '@mui/icons-material/BreakfastDining';
// components
import Page from '../components/Page'
import { MotionContainer, varBounce } from '../components/animate'
import { Expand, ExpandMore, ExpandMoreSharp } from '@mui/icons-material'
import { BREADS } from '../constants/bread'
import { useState } from 'react';
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

export default function CrumbBuilder() {

  const [selectedCrumbs, setSelectedCrumbs] = useState<string[]>([])

  const handleAddToSelectedCrumbs = (breadcrumb: string) => {
    setSelectedCrumbs([
      ...selectedCrumbs,
      breadcrumb
    ])
  }

  return (
    <Page title="Crumb Builder">
      <Container component={MotionContainer}>
        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h3">Crumb Builder</Typography>
          <Typography variant="subtitle1">Select the crumbs on the left to build your customized bread crumb bag</Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
        }}>
          <Box sx={{ width: "50%" }}>
            {BREADS.map(([bread, description], idx) => <Accordion
              sx={{
                marginBottom: 2,
                borderRadius: '8px',
                '&:before': { display: 'none' },
              }}

              key={`${bread}-${idx}`}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreSharp />}
                aria-controls="breads"
              >
                <Box
                  sx={{
                    width: '90%',
                    minHeight: '100px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box
                    sx={{
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Typography variant="h5">{bread}</Typography>
                  </Box>
                  <Box>
                    <Button variant="contained" onClick={() => handleAddToSelectedCrumbs(bread)}>Add to Crumbs</Button>
                  </Box>
                </Box>

              </AccordionSummary>
              <AccordionDetails
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                {description}
              </AccordionDetails>
            </Accordion>
            )}
          </Box>
          <Box sx={{ width: "50%" }}>
            <List sx={{
              position: 'sticky', 
              margin: 'auto',
              maxWidth: "300px",
              top: '20px'
            }} >
              { selectedCrumbs.map((crumb, idx) =>      <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <BreakfastDiningIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={crumb}
                />
              </ListItem>)}
         
            </List>
          </Box>
        </Box>
      </Container>
    </Page>
  )
}
