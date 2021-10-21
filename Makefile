install:
	npm i -g heroku
login:
	heroku login
create:
	heroku create react-wether-widget-app
deploy:
	git push heroku master

