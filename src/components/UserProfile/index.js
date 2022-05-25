
//IMPORTS: from required modules within file structure
import Contributions from './my-contributions/index'
import Favorites from './my-favorites/index'
import Recents from './my-recent-map/index'

//IMPORTS: from bootstrap for layout styling 
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

//IMPORTS: from MUI 
import Typography from '@mui/material/Typography';


///////IMPORTANT INFO////////////////
///In case rendering all of the Accordians becomes performant heavy and we get bottlenecks please///
////see documentation listed below: 
///<Accordion TransitionProps={{ unmountOnExit: true }} />
/// source: https://mui.com/material-ui/react-accordion/
///Bottom of page////
////////////////////////////////////

function Profile(props) {

  //make API CALLS -> Required data: Recents where id === user.id
  //                                 Contributions where id === user.id
  //                                 Favorites where id === user.id

  //pass data as props to children components 
  
  return (
    <>
      <Typography variant="h3" component="div" gutterBottom>
        Welcome back, ${'username'}
      </Typography>
      <Container>
        <Row>
          <Col className='w-50 m-4' style={{ backgroundColor: '#E9573F' }}>
            <Recents />
            <Favorites />
          </Col>
          <Col className='w-50 m-4' style={{ backgroundColor: '#E95162' }}>
            <Contributions />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Profile;
