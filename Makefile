deploy:
	rsync -raz * webpub@donner-online.ch:/home/webpub/html/oci/ --progress --delete
