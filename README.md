# UserManager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Ghost-xD/UserManager.git

# Project Setup

1. Open the project in your preferred development environment.

2. Run `ng serve --port 8082`.

3. Access the API using the specified endpoints. Navigate to `http://localhost:8082/`. Port 8082 is necessary as it is the only port allowed by CORS in the ContactManager backend api.

## Application Structure

- This app uses parent child components for Viewing/Editing/Adding Contacts.
- There are 2 services. 1 for accessing dot net api and 1 for fetching the data.
- There are other reusable standalone components for logo and loader.
- Routing module is also available although commented out.
- For styling, bootstrap is used. For searching and pagination, no external library is used.
- The app can be extended easily by using the api service to add as many endpoints as required.
- New components can be added and routing module can be used for navigation.
  
- For validations in the Model class, DataAnnotations are used.
