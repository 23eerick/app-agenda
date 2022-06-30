import styled from "styled-components";

export const Container = styled.div`
    width: 800px;
    margin: 0 auto;
    margin-top: 200px;
    margin-bottom: 150px;
    border: 3px solid #4159e1;
    border-radius: 8px;

@media (max-width: 2560px) {
    width: 1000px;
    padding: 50px;

@media (max-width: 1024px) {
    width: 800px;
    margin-bottom: 50px;

@media (max-width: 768px) {
    width: 600px;
    margin-bottom: 20px;

@media (max-width: 755px) {
    width: 400px;
    margin-top: 100px;

@media (max-width: 426px) {
    width: 400px;
    margin-top: 100px;
    margin-bottom: 180px;

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
}
`

export const HomePage = styled.section`
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-auto-rows: 250px;

@media (max-width: 426px) {
    display: flex;
    flex-wrap: wrap;
}

@media (max-width: 755px) {
    display: flex;
    flex-wrap: wrap;
}
`

export const Text = styled.h1`
    font-family:  'Courier New', Courier, monospace;;
    text-transform: uppercase;
    font-size: 25px;
    text-align: center;
    padding: 40px;
    margin: 70px;

@media (max-width: 768px) {
    padding: 20px;

@media (max-width: 426px) {
    padding: 10px;
    margin: 35px;
 }
}
`

export const Title = styled.h2`
    font-family: 'Courier New', Courier, monospace;
    font-size: 20px;

@media (max-width: 768px) {
    font-size: 15px;
    margin-top: -20px;

@media (max-width: 426px) {
    font-size: 20px;
 }
}
`

export const Description = styled.div`
    border-left: 2px solid gray;
    margin: 10px;
    padding: 20px;
`

export const Subtitle = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 20px;
    font-size: 15px;

@media (max-width: 768px) {
    font-size: 13px;
}

@media (max-width: 426px) {
    font-size: 15px;
}
`

export const Button = styled.button`
    font-family: 'Courier New', Courier, monospace;
    background-color: #4159e1;
    padding: 18px;
    margin-top: 10px;
    padding-right: 50px;
    border-radius: 8px;
    font-size: 15px;
    border: none;


@media (max-width: 1024px) {
    padding: 15px;

@media (max-width: 426px) {
    margin-top: 20px;
 }
}
`
