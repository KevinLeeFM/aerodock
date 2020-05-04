# Aerodock

## Instructions
### Backend
**Setup**
1. Make sure to use `python3 -m venv ./env` to create a new virtual environment in the top directory
2. Activate it via `source env/bin/activate` on macOS. You will need to do this every time you start a new terminal session
3. Install the following by running this command:

```
pip3 install ariadne; pip3 install django;
```

**Note for VS Code users**
- Make sure to install the official Python extension for VS Code
- Make sure that the selected Python distribution is the one inside the `env` folder (i.e. `./env/bin/python`). If not, attempting to debug the server may result in `ImportError`.

### Frontend
1. Install all the `"devDependencies"`. To do so, in the `frontend/` folder, run `npm install`

**To run development server for the frontend**
1. In the `frontend/` folder, run `npm run start`
2. In your browser, navigate to http://localhost:8080/
- Note that the website will not be able to request any data and throw unexpected error until the backend Django server is also running.

We develop React components with Styleguidist, a development server that allows us to view and develop React components individually.

**To run development server for individual React components**
1. In the `frontend/` folder, run `npm run styleguide`
2. In your browser, navigate to http://localhost:6060/
- NOTE: Due to some bug, hot reloading with Styleguidist doesn't work.

## Pending unresolvable issues
- (As of 2020/05/02) Ariadne currently has a bug with interpreting SDL for default enum values in field arguments (e.g. `addPanel(size: PanelSize=MEDIUM)`, where `MEDIUM` is the default enum for `size`), where the default value will always become `null`. This issue is being tracked on Ariadne's repository and is in their milestone: https://github.com/mirumee/ariadne/issues/293
- (As of 2020/05/02) Styleguidist's hot reload feature does not work with Webpack version ^4.43.0 or ^4.41.6.