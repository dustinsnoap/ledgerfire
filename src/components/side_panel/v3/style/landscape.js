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
    input:checked + .item {
        background-color: red;
        .submenu {
            height: 256px;
        }
    }
    .category {
        border: 0 solid #ccc;
        border-width: 1px 0;
        display: flex;
        align-items: center;
        input {display: none}
        .item {
            display: flex;
            flex-direction: column;
            width: 100%;
            .description {
                display: flex;
                align-items: center;
                min-height: 64px;
                span {
                    color: #ccc;
                    font-family: hind;
                    font-size: 1.5vh;
                    font-variant: small-caps;
                }
                figure {
                    height: 1.5vh;
                    width: 1.5vh;
                    background-color: #ccc;
                    border-radius: 22%;
                    margin: 0 1vh;
                }
            }
            &:hover > .description {
                span {color: #0c4}
                figure {background-color: #0c4}
            }
            .submenu {
                background-color: red;
                height: 0px;
                overflow: hidden;
            }
        }
    }
    // .link, .item {
    //     display: flex;
    //     align-items: center;
    //     background-color: #33333c;
    //     min-height: 64px;
    //     padding: 1vh 2vh;
    //     text-align: center;
    //     border: 0 solid #ccc;
    //     border-width: 1px 0;
    //     figure {
    //         height: 1.5vh;
    //         width: 1.5vh;
    //         background-color: #ccc;
    //         border-radius: 22%;
    //         margin-right: 1vh;
    //     }
    //     span {
    //         color: #ccc;
    //         font-family: hind;
    //         font-size: 1.5vh;
    //     }
    //     &:hover {
    //         figure {background-color: #0c4}
    //         span {color: #0c4}
    //     }
    //     &.active {
    //         background-color: #212023;
    //         figure {background-color: #0c4}
    //         span { color: #0c4}
    //     }
    // }
    // .sub-menu {
    //     background-color: #43434c;
    //     color: #ccc;
    //     height: 0;
    //     display: flex;
    //     flex-direction: column;
    //     overflow: hidden;
    //     transition: height .42s ease-in-out;
    //     .item {
    //         display: flex;
    //         align-items: center;
    //         min-height: 64px;
    //         justify-content: flex-start;
    //         &.active {
    //             background-color: #222226;
    //             figure {border-color: #0c4}
    //             span {color: #0c4}
    //         }
    //         &:hover {
    //             figure {border-color: #0c4}
    //             .title {color: #0c4}
    //         }
    //         figure {
    //             border: 0 solid white;
    //             border-width: 2px 2px 0 0;
    //             height: 8px;
    //             width: 8px;
    //             margin: 0 16px;
    //             transform: rotatez(45deg);
    //         }
    //         span {
    //             color: #ccc;
    //             font-size: 1.5vh;
    //         }
    //     }
    // }
`