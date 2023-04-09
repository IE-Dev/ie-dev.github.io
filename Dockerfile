FROM php:8.1-apache
MAINTAINER Ian Everall<4145038+IE-Dev@users.noreply.github.com>
ENV DEBIAN_FRONTEND noninteractive

# Update the Repos and Install basics dev tools
RUN apt-get update \
    && apt-get install -y --no-install-recommends git zlib1g-dev libzip-dev zip unzip software-properties-common apt-transport-https curl lsb-release ca-certificates gnupg2 wget openssl ssl-cert

RUN curl -sSk https://getcomposer.org/installer | php -- --disable-tls && \
       mv composer.phar /usr/local/bin/composer

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

EXPOSE 80