import {
  IAuthenticateGeneric,
  ICredentialType,
  INodeProperties,
} from 'n8n-workflow';

class RunpodApi implements ICredentialType {
  name = 'runpodApi';
  displayName = 'Runpod API';
  documentationUrl = 'https://docs.runpod.io/hub/public-endpoints';
  properties: INodeProperties[] = [
    {
      displayName: 'API Key',
      name: 'apiKey',
      type: 'string',
      typeOptions: { password: true },
      default: '',
      description: 'Your Runpod API key (Settings → API Keys)'
    },
  ];

  authenticate: IAuthenticateGeneric = {
    type: 'generic',
    properties: {
      headers: {
        Authorization: '={{ `Bearer ${$credentials.apiKey}` }}',
        'Content-Type': 'application/json',
      },
    },
  };
}

export { RunpodApi };

