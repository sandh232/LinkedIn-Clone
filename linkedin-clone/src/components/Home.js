/*
author: Manpreet Sandhu
File: Home.js
*/
import styled from 'styled-components';

const Home = (props) => {
     return (
          <Container>
               <Section>
                    <p>Urgent Hiring! Innovative, tech company seeks talented Developers.&nbsp;</p>
                    <h5><a>Apply today?</a></h5>
               </Section>
          </Container>
     );
};

const Container = styled.div`
 padding-top: 52px;
 max-width: 100%;
`;

const Content = styled.div`
 max-width: 1128px;
 margin-left: auto;
 margin-right: auto;
`;

const Section = styled.section`
 height: 50px;
 padding: 16px 0;
 box-sizing: content-box;
 text-align: center;
 text-decoration: underline;
 display: flex;
 justify-content: center;

 h5{
      color: #0a66c2;
      font-size: 14px;
      a{
           font-weight: 700;
      }
 }

 p{
      font-size: 14px;
      color: #434649;    
      font-weight: 600;
 }

 @media (max-width: 768px){
     flex-direction: column;
     padding: 0 5px;
 }
`;

export default Home;