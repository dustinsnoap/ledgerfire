export default `
    display: grid;
    grid-auto-rows: min-content;
    grid-row-gap: 2vh;
    align-items: center;
    width: max-content;
    height: 100%;
    background-color: #333;
    padding: 2vh;
    border-right: 1px solid #111;
    .logo {
        align-self: start;
        justify-self: center;
        grid-row: 1 / span 4;
        color: #ccc;
    }
    .link {
        padding: 1vh;
        font-family: hind;
        font-variant: small-caps;
        text-transform: lowercase;
        font-size: 2vh;
        width: 100%;
        color: #ccc;
        border: 1px solid #ccc;
        border-radius: .5vh;
        &.active {
            background-color: #ccc;
            color: #111;
        }
        &:hover {
            background-color: #ccc;
            border-color: #ccc;
            color: #111;
        }
    }
`