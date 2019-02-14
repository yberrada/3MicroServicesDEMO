@echo on
:: THIS BUILDS DOCKER IMAGES
cd admin
docker build --tag registry.ng.bluemix.net/la_factory/admin-image .
cd ..

cd authentification
docker build --tag registry.ng.bluemix.net/la_factory/auth-image .
cd ..

cd bill
docker build --tag registry.ng.bluemix.net/la_factory/bill-image .
cd ..

cd chatbot
docker build --tag registry.ng.bluemix.net/la_factory/chat-image .
cd ..

cd server
docker build --tag registry.ng.bluemix.net/la_factory/server-image .
cd ..
