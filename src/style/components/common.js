export default `
    #root {
        height: 100vh;
        width: 100vw;
        position: relative;
        display: grid;
        grid-template-columns: max-content 1fr;
        grid-template-rows: max-content 1fr;
    }
    main {
        grid-column: span 2;
        height: 100%;
        width: 100%;
    }
    .side-panel {
        grid-column: 1;
    }
`