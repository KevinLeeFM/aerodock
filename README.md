# Aerodock

## Setup
### Backend
1. Make sure to use `python3 -m venv ./env` to create a new virtual environment in the top directory
2. Activate it via `source env/bin/activate` on macOS. You will need to do this every time you start a new terminal session
3. Install the following by running this command:

```
pip3 install ariadne; pip3 install django;
```

You can optionally install `pip3 install uvicorn;`

**Note for VS Code users**
- Make sure to install the official Python extension for VS Code
- Make sure that the selected Python distribution is the one inside the `env` folder (i.e. `./env/bin/python`). If not, attempting to debug the server will result in `ImportError`.
