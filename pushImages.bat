@echo on
:: THIS BUILDS DOCKER IMAGES
docker push registry.ng.bluemix.net/la_factory/admin-image
docker push registry.ng.bluemix.net/la_factory/auth-image
docker push registry.ng.bluemix.net/la_factory/bill-image
docker push registry.ng.bluemix.net/la_factory/chat-image
docker push registry.ng.bluemix.net/la_factory/server-image
