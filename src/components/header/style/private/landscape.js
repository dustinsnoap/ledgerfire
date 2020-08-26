export default `
    display: grid;
    grid-template-columns: 1fr repeat(3,max-content);
    grid-gap: 1vh;
    align-items: center;
    padding: 1vh;
    height: 8vh;
    .notifications {
        grid-column: 2;
        height: 3vh;
        cursor: pointer;
    }
    .avatar {
        height: 6vh;
        width: 6vh;
        border: .15vh solid #333;
        border-radius: .5vh;
        cursor: pointer;
    }
    .user {
        display: flex;
        align-items: center;
        cursor: pointer;
        .username {
            font-family: hind;
            font-size: 2vh;
        }
        .dropdown {
            height: 1.5vh;
            width: 1.5vh;
            margin: 0 1vh;
            border: .25vh solid #333;
            border-width: 0 .25vh .25vh 0;
            transform: rotateZ(45deg) translateY(-0.25vh);
        }
    }
`