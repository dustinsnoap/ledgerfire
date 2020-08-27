export default `
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
    padding: 3vh;
    grid-gap: 3vh;
    .widget {
        background-color: #333;
        border-radius: .5vh;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        padding: 2vh;
        .title {
            color: #ccc;
            font-family: hind;
            font-size: 2vh;
        }
    }
`