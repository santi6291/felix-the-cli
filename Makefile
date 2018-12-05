install: npm-install

npm-install:
	npm install

tslint:
	npx tslint -c tslint.json -p tsconfig.json

test: tslint
	npx mocha -r ts-node/register src/test.spec.ts

dev:
	npx mocha -r ts-node/register src/test.spec.ts --watch --watch-extensions ts json js hb

build:
	npx tsc
