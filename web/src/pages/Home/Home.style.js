const GEN_BUTTON_HEIGHT = 60;
const GEN_BUTTON_PADDING = 20;

const CODE_CONTAINER_MARGIN = GEN_BUTTON_HEIGHT + (GEN_BUTTON_PADDING * 2);

const styles = {
    container: {
        height: '100%',
        position: 'relative',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
    },
    headingContainer: {
        padding: '45px 0',
    },
    headingText: {
        fontSize: '40px',
    },
    gameCodeContainer: {
        flex: 1,
        paddingTop: '90px',
        marginBottom: `${CODE_CONTAINER_MARGIN}px`,
    },
    enterGameCodeText: {
        fontSize: '20px',
        display: 'block',
    },
    gameCodeInput: {
        maxWidth: '80%',
        margin: '10px auto',
        padding: '5px',
        textAlign: 'center',
        fontSize: '20px',
        outline: 'none',
        border: 'none',
        borderBottom: '2px solid #f0f0f0',
    },
    generateBtnContainer: {
        position: 'relative',
        bottom: 0,
        left: 0,
        padding: `${GEN_BUTTON_PADDING}px`,
        width: '100%',
    },
    generateBtn: {
        width: '100%',
        height: `${GEN_BUTTON_HEIGHT}px`,
        fontSize: '20px',
        backgroundColor: '#000',
        color: '#fff',
        outline: 'none',
        border: 'none',
        borderRadius: '3px',
    },
};

export default styles;