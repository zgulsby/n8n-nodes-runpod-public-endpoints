import {
  IAuthenticateGeneric,
  ICredentialType,
  INodeProperties,
} from 'n8n-workflow';

class RunpodPublicEndpointsApi implements ICredentialType {
  name = 'runpodPublicEndpointsApi';
  displayName = 'Runpod Public Endpoints API';
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

export { RunpodPublicEndpointsApi };
