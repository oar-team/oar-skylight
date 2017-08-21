FROM debian:stretch

LABEL Description="Container for building OAR skylight"

RUN apt-get update && apt-get install -y perl vim man curl bzip2 less git gnupg
RUN curl -sL https://deb.nodesource.com/setup_6.x|bash - 
RUN apt-get install -y nodejs
RUN git clone https://github.com/oar-team/oar-skylight.git
RUN cd oar-skylight && git checkout master
RUN cd oar-skylight && perl -pi -e "s;API: 'localhost:46668;API: 'luke.univ-grenoble-alpes.fr:6669;" src/environments/environment.prod.ts
RUN cd oar-skylight && npm install
RUN cd oar-skylight && npm run build

# To build oar-skylight, you can run:
#     docker build -t skylight .
#     docker run -v /var/www/skylight:/server -it skylight
#       cp -a oar-skylight/dist/* /server/
#       cp -a oar-skylight/dist/.htaccess /server/

