#!/bin/bash

BASEDIR=$(dirname "$0")
cd ${BASEDIR}/../

DEBUG=SASDN:* node ./build/gateway.js