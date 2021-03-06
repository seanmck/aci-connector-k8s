import resource = require('./resource');

export function ListContainerGroups(resourceClient): Promise<Array<Object>> {
    let resourceType = 'Microsoft.ContainerInstance/containerGroups'
    let apiVersion = '2017-08-01-preview'

    return resource.getMatchingResources(resourceClient, resourceType, apiVersion);
}

export function DeleteContainerGroup(id, resourceClient): Promise<Object> {
    let resourceType = 'Microsoft.ContainerInstance/containerGroups'
    let apiVersion = '2017-08-01-preview'

    return resource.deleteResource(resourceClient, id, apiVersion);
}
