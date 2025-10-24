import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class TestCredential implements ICredentialType {
  name = 'testCredential';
  displayName = 'Test Credential';
  properties: INodeProperties[] = [
    {
      displayName: 'Test Field',
      name: 'testField',
      type: 'string',
      default: '',
    },
  ];
}
