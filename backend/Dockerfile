FROM ruby:2.6
RUN apt-get update -qq && apt-get install -y nodejs yarnpkg
RUN ln -s /usr/bin/yarnpkg /usr/bin/yarn
RUN mkdir /hippy_app
WORKDIR /hippy_app
COPY Gemfile /hippy_app/Gemfile
COPY Gemfile.lock /hippy_app/Gemfile.lock
RUN bundle install -j4
COPY . /hippy_app
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000
CMD ["rails", "server", "-b", "0.0.0.0"]