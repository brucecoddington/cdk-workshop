import { App } from '@aws-cdk/core';

import { CdkWorkshopStack } from './stack';

const app = new App();
new CdkWorkshopStack(app, 'CdkWorkshopStack');
