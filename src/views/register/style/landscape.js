export default `
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: min-content 1fr;
    justify-items: center;
    align-items: center;
    height: 100vh;
    .content {
        height: 60%;
        display: grid;
        grid-template-rows: min-content 1fr;
        .banner {
            justify-self: center;
            height: 25vh;
            width: auto;
            background-size: contain;
        }
        .login, .signup {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            .input {
                width: 80%;
                display: flex;
                flex-direction: column;
                .label {
                    font-family: hind;
                    font-variant: small-caps;
                    font-size: 1.5vh;
                }
                .input-box {
                    width: 100%;
                    color: #red;
                    font-size: 2vh;
                    font-family: hind;
                    font-variant: small-caps;
                    padding: .1vh .5vh;
                    border: 1px solid black;
                    cursor: pointer;
                    &:hover, &:focus {
                        background-color: #eee;
                    }
                }
            }
            .buttons {
                display: flex;
                justify-content: space-between;
                height: max-content;
                font-family: hind;
                width: 100%;
                button, a {
                    background-color: #eee;
                    border: 1px solid black;
                    width: 25%;
                    height: 100%;
                    padding: 1vh;
                    font-size: 1.5vh;
                    cursor: pointer;
                    span {
                        width: 100%;
                        text-align: center;
                        font-family: hind;
                    }
                    &:hover {
                        background-color: #6c0;
                    }
                }
            }
        }
    }
`