export default `
    #root {
        height: 100vh;
        width: 100vw;
    }
    .page {
        display: grid;
        grid-template-rows: min-content 1fr;
        grid-template-columns: min-content 1fr;
    }
    .logo {
        justify-self: flex-start;
        height: 3vh;
        display: flex;
        align-items: center;
        img {
            height: 100%;
        }
        span {
            font-family: hind;
            font-variant: small-caps;
            padding: .5vh 0 0 .5vh;
            font-size: 3vh;
            font-weight: 1000;
        }
    }
`