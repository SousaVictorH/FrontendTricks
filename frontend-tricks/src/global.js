import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap');

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        font: 400 14px Roboto, sans-serif;
        background-color: #fff;
        margin: 0;
    }

    input, button, textarea{
        font: 400 18px Roboto, sans-serif;
    }

    button{
        cursor: pointer;
    }
`;