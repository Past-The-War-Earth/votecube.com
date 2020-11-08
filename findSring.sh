#!/bin/bash
cd apps
for i in `find . -name "src"`; do echo $i; cd $i; grep -RnH $1; cd -; done;
cd ..
cd libs
for i in `find . -name "src"`; do echo $i; cd $i; grep -RnH $1; cd -; done;
cd ..
cd schemas
for i in `find . -name "src"`; do echo $i; cd $i; grep -RnH $1; cd -; done;
cd ..
