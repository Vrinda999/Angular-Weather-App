# Angular-Weather-App
A Desktop Widget which takes Location as Input from the User, and Displays Current Weather. Made Using Angular, and OpenWeatherMap API.

The Contents of this Repository are the Files in the "src" Folder.

### 1. Installing the Necessary Tools.
Install the .msi Installer from [Here](https://nodejs.org/en/download).


### 2. Starting a Project.
```
>> ng new <Name of the Project> --no-standalone
```
Note: ```--no-standalone``` Suffix is Important, as in Recent Angular Updates, the module.ts file has been made optional and the default project has Standalone Value as True.

Choose Stylesheet as "CSS", and Allow SSR and Routing.
Save Static Elements to be used in a folder inside the "./apps/assets" Directory.
For more Details, follow [these Steps](https://medium.com/@dgongoragamboa/how-to-create-an-angular-project-from-scratch-b4031abeb4de) to start a New Project.

### 3. Creating Components and Services
To Create a New Service:
```
>> ng g s <Name>
```
Example: ```weather.service.ts``` and ```weather.servuce.spec.ts``` in "./app/Services"

To Create a New Component:
```
>> ng generate Component <Name>
```


### 4. Running the Server
```ng serve``` or ```ng serve --o```
