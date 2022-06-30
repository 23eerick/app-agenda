import styled from "styled-components";

export const Container = styled.div`
    width: 800px;
    margin: 0 auto;

@media (max-width: 2560px) {
    width: 1000px;
    padding: 50px;

@media (max-width: 1024px) {
    width: 800px;

@media (max-width: 768px) {
    width: 600px;

@media (max-width: 426px) {
    width: 400px;
    margin-top: 100px;

@media (max-width: 376px) {
    width: 350px;
    margin-top: 100px;

@media (max-width: 320px) {
    width: 300px;
    margin-top: 100px;

     }
    }
   }
  }
 }
}
`

export const Title = styled.p`
    font-family: 'Courier New', Courier, monospace;
    border-top: 2px solid #4159e1;
    padding-top: 10px;
    padding-left: 10px;
    font-size: 20px;

@media (max-width: 768px) {
    border-top: none;

@media (max-width: 426px) {
    margin-left: -50px;
    margin-top: -200px;
 }
}
`