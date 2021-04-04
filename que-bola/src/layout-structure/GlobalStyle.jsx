import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background: lightgray
    }
    h1 {
        @import url("https://fonts.googleapis.com/css2?family=Recursive:wght@500&display=swap");
        font-family: "Recursive", sans-serif;
    }
`;
