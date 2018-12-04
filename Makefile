install: npm-install

npm-install:
	npm install

tslint:
	npx tslint -c tslint.json -p tsconfig.json

test: tslint
	npx mocha -r ts-node/register src/test.spec.ts

watch:
	npx pre-push-link

build:
	npx tsc
