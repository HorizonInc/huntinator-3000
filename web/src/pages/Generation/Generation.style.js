import { isAbsolute } from "path";

const styles = {
    container: {
        backgroundColor: '#ffffff',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    titleContainer: {
        width: '100%',
        height: '180px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: '30px'
    },
    inputsContainer: {
        marginTop: '40px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: '0px 20px'
    },
    inputContainer: {
        width: '100%',
        marginBottom: '50px'
    },
    locationInput: {
        marginTop: '15px',
        width: '80%',
        height: '30px',
        paddingLeft: '10px'
    },
    generateButtonContainer: {
        width: '100%',
        height: 'fit-content',
        padding: '30px 0px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
    },
    generateButton: {
        width: '92%',
        height: '60px',
        color: '#fff',
        backgroundColor: '#000',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
    }
};

export default styles;