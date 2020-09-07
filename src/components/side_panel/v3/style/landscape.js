export default `
    grid-row: 2;
    display: grid;
    grid-auto-rows: min-content;
    align-items: center;
    width: max-content;
    height: 100%;
    background-color: #33333a;
    border-right: 1px solid #111;
    min-width: 100%;
    .link {
        display: flex;
        align-items: center;
        background-color: #33333a;
        min-height: 60px;
        padding: 1vh 2vh;
        text-align: center;
        border: 0 solid #ccc;
        border-width: 1px 0;
        figure {
            height: 1.5vh;
            width: 1.5vh;
            background-color: #ccc;
            border-radius: 22%;
            margin-right: 1vh;
        }
        span {
            color: #ccc;
            font-family: hind;
            font-size: 1.5vh;
        }
        &:hover {
            figure {background-color: #0c4}
            span {color: #0c4}
        }
        &.active {
            background-color: #212023;
            figure {background-color: #0c4}
            span { color: #0c4}
        }
    }
`