clear
echo "Build Image for admin Microservice"
echo 'docker build --tag registry.ng.bluemix.net/lafactory/admin-image .'
cd admin
echo $PWD
docker build --tag registry.ng.bluemix.net/la_factory/admin-image .
cd -
echo $PWD


echo "Build Image for authentification Microservice"
echo 'docker build --tag registry.ng.bluemix.net/lafactory/auth-image .'
cd authentification
echo $PWD
docker build --tag registry.ng.bluemix.net/la_factory/auth-image .
cd -
echo $PWD

echo "Build Image for Bill Microservice"
echo 'docker build --tag registry.ng.bluemix.net/lafactory/bill-image .'
cd bill
echo $PWD
docker build --tag registry.ng.bluemix.net/la_factory/bill-image .
cd -
echo $PWD

echo "Build Image for Support Microservice"
echo 'docker build --tag registry.ng.bluemix.net/lafactory/chat-image .'
cd chatbot
echo $PWD
docker build --tag registry.ng.bluemix.net/la_factory/chat-image .
cd -
echo $PWD

echo "Build Image for Web Server "
echo 'docker build --tag registry.ng.bluemix.net/lafactory/server-image .'
cd server
docker build --tag registry.ng.bluemix.net/la_factory/server-image .
