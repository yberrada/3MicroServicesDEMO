FROM python:3.6.1-alpine
RUN pip3 install flask
RUN pip3 install watson_developer_cloud
RUN pip3 install requests
RUN pip3 install flask_cors
CMD ["python","chat.py"]
COPY chat.py /chat.py
