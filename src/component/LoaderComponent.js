import React from 'react';
import { Dimmer, Image, Loader, Segment } from 'semantic-ui-react';

const LoaderComponent = () => {
    return (
        <div>
            <Loader inline="centered" active>Loading</Loader>
        </div>
    );
};

export default LoaderComponent;