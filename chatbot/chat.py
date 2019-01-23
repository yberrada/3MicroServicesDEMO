import json
import watson_developer_cloud
from flask import Flask
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

assistant = watson_developer_cloud.AssistantV1(
    iam_apikey='sPuio6JYXBV1sNxp5dZRiO342cKbvVlgEhjfEa0U8YBB',
    version='2018-09-20',
    url="https://gateway.watsonplatform.net/assistant/api"
)
@app.route('/chatlog/<text>', methods=['GET'])
def botprocess(text):
    response = assistant.message(
        workspace_id='b663bdf5-e97f-432f-aa1f-472ae1dfcb7f',
        input={
            'text': text
        }
    ).get_result()
    output = json.dumps(response)
    data = json.loads(output)
    output=data['output']['text'][0];
    return(output)
