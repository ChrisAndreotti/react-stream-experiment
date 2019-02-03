import React from 'react';

class GoogleAuth extends React.Component {
    constructor(props) {
        super(props);
        this.gApiApplicationClientId = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_GOOGLE_OAUTH_CLIENT_ID : process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID;
    }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: this.gApiApplicationClientId,
                scope: 'email',
            });
        });
    }

    render() {
        console.log(process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID);
        return <div>Google Auth</div>;
    }
}

export default GoogleAuth;
