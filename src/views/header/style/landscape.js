export default `
    display: flex;
    height: 5vh;
    padding: 1vh;
    position: fixed;
    align-items: center;
    justify-content: space-between;
    width: 100%;
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
            font-size: 1.5vh;
            font-weight: 1000;
        }
    }
    .links {
        font-family: hind;
        font-size: 1.5vh;
        font-variant: small-caps;
        .link {
            margin: 0 1vw;
        }
    }
`