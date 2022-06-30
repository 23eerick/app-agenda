import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body {
    background-color: #0d1117;
    color: #fff;
}

.container {
    width: 550px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-left: 10px;
    padding-right: 10px;
    border: 2px solid green;
 }

`