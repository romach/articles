#!/usr/bin/env bash

# install jekyll and bundler gems
sudo gem install jekyll bundler

# create blog in 'blog' directory
sudo jekyll new blog

# because of 'blog' directory was created using sudo command, we need to change owner to current user
sudo chown -r romach:romach blog

cd blog

# run Jekyll blog on http://127.0.0.1:4000/ address
bundle exec jekyll serve