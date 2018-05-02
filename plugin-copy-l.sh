#!/bin/bash
rm -rf ../../Scanex/Geomixer-client/plugins/styleEditor;
cp -R dist ../../Scanex/Geomixer-client/plugins;
mv ../../Scanex/Geomixer-client/plugins/dist ../../Scanex/Geomixer-client/plugins/styleEditor
echo plugin replaced
