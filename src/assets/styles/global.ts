import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
    padding: 0;
    margin:0;
    outline: 0;
    box-sizing:border-box;
    font-family: 'Poppins' ;
}

html, body, #root{
    height:100vh;
    width:100%;
}

h1, h2 , h3, h4, h5 , h6{
    font-family:'Lato';
    font-size: 2rem;
}


body, input, button{
    font-size: 1rem;
}

button{
    cursor: pointer ;
}

a{
    text-decoration: none ;
}

ul{
    list-style:none ;
}
`
