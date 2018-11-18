install: npm-install pre-push-link

npm-install:
	npm install

pre-push-link:
	ln -s ${PWD}/pre-push .git/hooks

tslint:
	tslint -c tslint.json -p tsconfig.json

test: tslint
	npx mocha -r ts-node/register src/test.spec.ts

watch:
	npx pre-push-link

build:
	npx tsc
