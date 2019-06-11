# ![LOGO](logo.png) Otoroshi Admin **flow**ground Connector

## Description

A generated **flow**ground connector for the Otoroshi Admin API (version 1.1.2).

Generated from: https://api.apis.guru/v2/specs/maif.local/otoroshi/1.1.2/swagger.json<br/>
Generated at: 2019-06-06T16:12:41+03:00

## API Description

Admin API of the Otoroshi reverse proxy

## Authorization

Supported authorization schemes:
- Basic Authentication

## Actions

### Get all api keys

*Tags:* `apikeys`

### Get the full configuration of Otoroshi

*Tags:* `configuration`

### Update the global configuration with a diff

*Tags:* `configuration`

### Update the global configuration

*Tags:* `configuration`

### Get all service groups

*Tags:* `groups`

### Create a new service group

*Tags:* `groups`

### Get all api keys for the group of a service

*Tags:* `apikeys`

#### Input Parameters
* `groupId` - _required_ - The api key group id

### Create a new api key for a group

*Tags:* `apikeys`

#### Input Parameters
* `groupId` - _required_ - The api key group id

### Delete an api key

> Delete an api key for a specified service group

*Tags:* `apikeys`

#### Input Parameters
* `groupId` - _required_ - The api key group id
* `clientId` - _required_ - the api key id

### Get an api key

> Get an api key for a specified service group

*Tags:* `apikeys`

#### Input Parameters
* `groupId` - _required_ - The api key group id
* `clientId` - _required_ - the api key id

### Update an api key with a diff

> Update an api key for a specified service descriptor with a diff

*Tags:* `apikeys`

#### Input Parameters
* `groupId` - _required_ - The api key group id
* `clientId` - _required_ - the api key id

### Update an api key

> Update an api key for a specified service group

*Tags:* `apikeys`

#### Input Parameters
* `groupId` - _required_ - The api key group id
* `clientId` - _required_ - the api key id

### Reset the quota state of an api key

*Tags:* `apikeys`

#### Input Parameters
* `groupId` - _required_ - The api key group id
* `clientId` - _required_ - the api key id

### Get the quota state of an api key

*Tags:* `apikeys`

#### Input Parameters
* `groupId` - _required_ - The api key group id
* `clientId` - _required_ - the api key id

### Delete a service group

*Tags:* `groups`

#### Input Parameters
* `serviceGroupId` - _required_ - The service group id

### Get a service group

*Tags:* `groups`

#### Input Parameters
* `serviceGroupId` - _required_ - The service group id

### Update a service group with a diff

*Tags:* `groups`

#### Input Parameters
* `serviceGroupId` - _required_ - The service group id

### Update a service group

*Tags:* `groups`

#### Input Parameters
* `serviceGroupId` - _required_ - The service group id

### Get all services descriptor for a group

*Tags:* `services`

#### Input Parameters
* `serviceGroupId` - _required_ - The service group id

### Import the full state of Otoroshi as a file

*Tags:* `import`

### Get global otoroshi stats

*Tags:* `stats`

### Get live feed of otoroshi stats

> Get live feed of global otoroshi stats (global) or for a service {id}

*Tags:* `stats`

#### Input Parameters
* `id` - _required_ - The service id or global for otoroshi stats

### Export the full state of Otoroshi

*Tags:* `import`

### Import the full state of Otoroshi

*Tags:* `import`

### Get all services

*Tags:* `services`

### Create a new service descriptor

*Tags:* `services`

### Delete a service descriptor

*Tags:* `services`

#### Input Parameters
* `serviceId` - _required_ - The service id

### Get a service descriptor

*Tags:* `services`

#### Input Parameters
* `serviceId` - _required_ - The service id

### Update a service descriptor with a diff

*Tags:* `services`

#### Input Parameters
* `serviceId` - _required_ - The service id

### Update a service descriptor

*Tags:* `services`

#### Input Parameters
* `serviceId` - _required_ - The service id

### Get all api keys for the group of a service

*Tags:* `apikeys`

#### Input Parameters
* `serviceId` - _required_ - The api key service id

### Create a new api key for a service

*Tags:* `apikeys`

#### Input Parameters
* `serviceId` - _required_ - The api key service id

### Delete an api key

> Delete an api key for a specified service descriptor

*Tags:* `apikeys`

#### Input Parameters
* `serviceId` - _required_ - The api key service id
* `clientId` - _required_ - the api key id

### Get an api key

> Get an api key for a specified service descriptor

*Tags:* `apikeys`

#### Input Parameters
* `serviceId` - _required_ - The api key service id
* `clientId` - _required_ - the api key id

### Update an api key with a diff

> Update an api key for a specified service descriptor with a diff

*Tags:* `apikeys`

#### Input Parameters
* `serviceId` - _required_ - The api key service id
* `clientId` - _required_ - the api key id

### Update an api key

> Update an api key for a specified service descriptor

*Tags:* `apikeys`

#### Input Parameters
* `serviceId` - _required_ - The api key service id
* `clientId` - _required_ - the api key id

### Get the group of an api key

*Tags:* `apikeys`

#### Input Parameters
* `serviceId` - _required_ - The api key service id
* `clientId` - _required_ - the api key id

### Reset the quota state of an api key

*Tags:* `apikeys`

#### Input Parameters
* `serviceId` - _required_ - The api key service id
* `clientId` - _required_ - the api key id

### Get the quota state of an api key

*Tags:* `apikeys`

#### Input Parameters
* `serviceId` - _required_ - The api key service id
* `clientId` - _required_ - the api key id

### Delete a service descriptor target

*Tags:* `services`

#### Input Parameters
* `serviceId` - _required_ - The service id

### Get a service descriptor targets

*Tags:* `services`

#### Input Parameters
* `serviceId` - _required_ - The service id

### Update a service descriptor targets

*Tags:* `services`

#### Input Parameters
* `serviceId` - _required_ - The service id

### Add a target to a service descriptor

*Tags:* `services`

#### Input Parameters
* `serviceId` - _required_ - The service id

### Delete a service descriptor error template

*Tags:* `services`

#### Input Parameters
* `serviceId` - _required_ - The service id

### Get a service descriptor error template

*Tags:* `services`

#### Input Parameters
* `serviceId` - _required_ - The service id

### Create a service descriptor error template

> Update a service descriptor targets

*Tags:* `services`

#### Input Parameters
* `serviceId` - _required_ - The service id

### Update an error template to a service descriptor

*Tags:* `services`

#### Input Parameters
* `serviceId` - _required_ - The service id

### Return current Otoroshi health

> Import the full state of Otoroshi as a file

*Tags:* `health`

### Get all environments

> Get all environments provided by the current Otoroshi instance

*Tags:* `environments`

### Get all services for an environment

> Get all services for an environment provided by the current Otoroshi instance

*Tags:* `environments`

#### Input Parameters
* `line` - _required_ - The environment where to find services

### Get a template of an Otoroshi Api Key

> Get a template of an Otoroshi Api Key. The generated entity is not persisted

*Tags:* `templates`

### Get a template of an Otoroshi service group

> Get a template of an Otoroshi service group. The generated entity is not persisted

*Tags:* `templates`

### Get a template of an Otoroshi service descriptor

> Get a template of an Otoroshi service descriptor. The generated entity is not persisted

*Tags:* `templates`

## License

**flow**ground :- Telekom iPaaS / maif-local-otoroshi-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
