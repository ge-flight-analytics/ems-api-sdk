# Typings for the EMS API

Strongly-typed bindings are useful when programming against an API because they help to avoid unintentional errors by forcing the existance of a property as well as making the model more discoverable. This readme will detail how to generate typings for use with the EMS API.

## Generate strongly typed files

We use [AutoRest](https://github.com/Azure/autorest) to generate the typing files. Install that package using the instructions in github.

*Important*: When running autorest commands, if you encounter npm errors like "Installs platform-specific .NET framework", make sure to run the autorest command after you've (1) cleared your HTTP proxy and (2) are not on a VPN.

*Important*: If you receive an error like:

```bash
Error: Unable to create directory '/Users/<usr>/.autorest/@microsoft.azure_autorest.typescript@2.3.3/'.
```

then you may need to run autorest with sudo the first time in order to install the typescript generator.

Autorest has the ability to generate typings in a lot of different languages, but documented below are the languages we are using currently.

### Autorest input (OpenAPI/Swagger.json)

Autorest consumes a swagger.json file to generate typing files. For the EMS API, the file can be accessed in the root of this repository:
`ems-api.json`

You can also download the newest copy from the ems api endpoint:
[EMS API Swagger.json](https://ems.efoqa.com/api/v2/swagger)


### python

To use python wrappers, the msrest package must be installed:

```bash
pip3 install msrest
pip3 install msrestazure
```

#### python file generation

See <https://github.com/Azure/autorest.python> for more information.

`Run from the root of ems-api-sdk`

```bash
autorest --input-file=ems-api.json --python --output-folder=autorest/python --add-credentials --override-client-name=emsapi
```

**NOTE**: The output of using autorest on the EMS API does not handle comments with \N or \U in them. Both of these occur in the output file analytic_operations.py. This seems to be a defect in the autorest generation. I filed an issue here:
<https://github.com/Azure/autorest.python/issues/84>


To work around this for the time being, I added a single space between the backslash and the letter manually. Hopefully the autorest guys will come up with a good fix for this and that will not be necessary every time the wrappers are generated.

#### Using the client files

See the file `examples/ge_connection.ipynb` for an example of connecting from a GE machine.

##### Update anaconda

Update all of the dependencies of anaconda if you are using it.

```bash
conda update --all
```

#### Networking setup

The hardest thing in getting these wrappers to work is getting the proxies and SSL certificates
set up properly on the system. Luckily, this should be a one-time setup and after things work
then you shouldn't have to muck with the settings any more.

There are 2 steps for a GE machine. Other corporate networks will be different but may share some
of the same challenges.

##### Proxy (anaconda)

If you are using anaconda as your Jupyter host, then you'll have to modify the anaconda setup files.

Edit `.condarc` to specify the proxies to use:

```text
proxy_servers:
  http: PITC-Zscaler-Americas-Cincinnati3PR.proxy.corporate.ge.com:80
  https: PITC-Zscaler-Americas-Cincinnati3PR.proxy.corporate.ge.com:443
```

For GE employees, there is a little more information provided in [this Yammer ariticle](https://www.yammer.com/ge.com/#/Threads/show?threadId=1183823411&search_origin=global&scoring=linear1Y-prankie-group-private-higher&match=any-exact&search_sort=relevance&page=1&search=%2Bproxy%20%2Bjupyter).

##### Conda validation

One helpful command that will make sure the proxies and certificate paths are correct is to run:

```bash
./conda info
```

This command will display error information if, for example, the certificate that was installed above is not accessible.