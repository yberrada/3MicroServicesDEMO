clear
echo "Push Image : admin Microservice"
echo 'docker push registry.ng.bluemix.net/lafactory/admin-image'
docker push registry.ng.bluemix.net/la_factory/admin-image

echo "Push Image : authentification Microservice"
echo 'docker push registry.ng.bluemix.net/lafactory/auth-image'
docker push registry.ng.bluemix.net/la_factory/auth-image

echo "Push Image : Bill Microservice"
echo 'docker push registry.ng.bluemix.net/lafactory/bill-image'
docker push registry.ng.bluemix.net/la_factory/bill-image


echo "Push Image : Support Microservice"
echo 'docker push registry.ng.bluemix.net/lafactory/chat-image'
docker push registry.ng.bluemix.net/la_factory/chat-image

echo "Push Image : Web Server "
echo 'docker push registry.ng.bluemix.net/lafactory/server-image'
docker push registry.ng.bluemix.net/la_factory/server-image
