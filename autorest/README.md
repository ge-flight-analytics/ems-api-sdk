# Typings for the EMS API

Strongly-typed bindings are useful when programming against an API because they help to avoid unintentional errors by forcing the existance of a property as well as making the model more discoverable. This readme will detail how to generate typings for use with the EMS API.

## Generate strongly typed files

We use [AutoRest](https://github.com/Azure/autorest) to generate the typing files. Install that package using the instructions in github.

*Important*: When running autorest commands, if you encounter npm errors like "Installs platform-specific .NET framework", make sure to run the autorest command after you've (1) cleared your HTTP proxy and (2) are not on a VPN.

*Important*: If you receive an error like: `Error: Unable to create directory '/Users/<usr>/.autorest/@microsoft.azure_autorest.typescript@2.3.3/'.` then you may need to run autorest with sudo the first time in order to install the typescript generator.

Autorest has the ability to generate typings in a lot of different languages, but documented below are the languages we are using currently.

### swagger.json

Autorest consumes a swagger.json file to generate typing files. For the EMS API, you can retrieve the swagger.json file from this URL:
[EMS API Swagger.json](https://ems.efoqa.com/api/v2/swagger)


### python

To use python wrappers, the msrest package must be installed:

```bash
pip3 install msrest
pip3 install msrestazure
```

#### python file generation

See https://github.com/Azure/autorest.python for more information.

```bash
autorest --input-file=swagger.json --python --output-folder=python --add-credentials
```

#### Using the client files
