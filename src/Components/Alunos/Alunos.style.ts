import styled from "styled-components";

export const Container = styled.div`
    width: 800px;
    margin: 0 auto;
    margin-top: 100px;
    padding-left: 20px;
    border: 3px solid gray;
    border-radius: 5px;

@media (max-width: 2560px) {
    width: 1000px;
    padding: 50px;

@media (max-width: 1024px) {
    width: 800px;

@media (max-width: 768px) {
    width: 600px;

@media (max-width: 755px) {
   width: 400px;

@media (max-width: 426px) {
    width: 400px;
    margin-top: -150px;
    
@media (max-width: 376px) {
    width: 350px;

@media (max-width: 320px) {
    width: 300px;

      }
     }
    }
   }
  }
 }
}
`
export const List = styled.section`
    border: 1px solid gray;
    border-radius: 5px;
    margin: 20px;
    padding: 5px;
`

export const Title = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    text-decoration: none;
`

export const Subtitle = styled.p`
    font-family: 'Courier New', Courier, monospace;
    font-size: 18px;
`