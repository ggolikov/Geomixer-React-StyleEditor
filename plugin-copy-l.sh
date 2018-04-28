#!/bin/bash
rm -rf ../Geomixer-client/plugins/styleEditor;
cp -R dist ../Geomixer-client/plugins;
mv ../Geomixer-client/plugins/dist ../Geomixer-client/plugins/forestproject
echo plugin replaced
